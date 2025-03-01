import React, { useState } from 'react';
import styled from 'styled-components';

import './App.css';

import nineMM from './assets/ammo/9mm.png';
import twelvegauge from './assets/ammo/12gauge.png';
import sevensixtwo from './assets/ammo/7.62x39.png';
import fivefivesix from './assets/ammo/5.56x45.png';

import glock from './assets/guns/glock17.png';
import remington from './assets/guns/remington870.png';
import ak from './assets/guns/ak47.png';
import mp from './assets/guns/mp5.png';
import mtwofournine from './assets/guns/m249.webp';

const Title = styled.h1`
font-family: 'gunmetal', sans-serif;
font-size: 5rem;
color: #D20A2E;
text-align: center;
margin: 0;
`;

const GunTypesText = styled.h1`
font-family: 'gunslinger', sans-serif;
font-size: 2rem;
color: #ff5722;
text-align: center;
margin: 0;
`;

const ammoImages = {
  '9mm': nineMM,
  '7.62x39mm': sevensixtwo,
  '12 Gauge': twelvegauge,
  '5.56x45mm NATO': fivefivesix
};

const getAmmoImage = (ammoType) => {
  return ammoImages[ammoType] || 'https://via.placeholder.com/50?text=Ammo';
};

const initialGuns = {
  Handguns: [
    { 
      id: 1, 
      name: 'Glock 17', 
      description: 'A reliable semi-automatic handgun.', 
      ammo: ['9mm'],
      image: glock
    },
  ],
  Rifles: [
    { 
      id: 2, 
      name: 'AK-47', 
      description: 'A popular military assault rifle.', 
      ammo: ['7.62x39mm'],
      image: ak
    },
  ],
  Shotguns: [
    { 
      id: 3, 
      name: 'Remington 870', 
      description: 'A pump-action shotgun known for its durability.', 
      ammo: ['12 Gauge'],
      image: remington
    },
  ],
  SMGs: [
    { 
      id: 4, 
      name: 'MP5', 
      description: 'A widely used submachine gun.', 
      ammo: ['9mm'],
      image: mp
    },
  ],
  Machineguns: [
    { 
      id: 5, 
      name: 'M249', 
      description: 'A light machine gun used for sustained fire.', 
      ammo: ['5.56x45mm NATO'],
      image: mtwofournine
    },
  ],
};

function App() {
  const [guns, setGuns] = useState(initialGuns);
  const [selectedType, setSelectedType] = useState(null);

  const handleAddGun = (gunType) => {
    const gunName = prompt('Enter gun name:');
    const description = prompt('Enter a description:');
    const ammoInput = prompt('Enter ammo types (comma separated):');
    const image = prompt('Enter image URL for the gun:');
    if (gunName && description && ammoInput && image) {
      const newGun = {
        id: Date.now(), 
        name: gunName,
        description,
        ammo: ammoInput.split(',').map(a => a.trim()),
        image,
      };
      setGuns({
        ...guns,
        [gunType]: [...guns[gunType], newGun],
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title>Pew Pew</Title>
      </header>
      <main>
        <nav className="menu">
          <GunTypesText>Gun Types</GunTypesText>
          <ul>
            {Object.keys(guns).map((type) => (
              <li key={type}>
                <button onClick={() => setSelectedType(type)}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section className="content">
          {selectedType ? (
            <>
              <h2>{selectedType.charAt(0).toUpperCase() + selectedType.slice(1)}</h2>
              <button className="add-button" onClick={() => handleAddGun(selectedType)}>
                Add Gun
              </button>
              <ul className="gun-list">
                {guns[selectedType].map((gun) => (
                  <li key={gun.id} className="gun-card">
                    <img src={gun.image} alt={gun.name} className="gun-image" />
                    <div className="gun-details">
                      <h3>{gun.name}</h3>
                      <p>{gun.description}</p>
                      <div className="ammo-container">
                        <strong>Ammo Types:</strong>
                        <ul className="ammo-list">
                          {gun.ammo.map((ammo, index) => (
                            <li key={index} className="ammo-item">
                              <img 
                                src={getAmmoImage(ammo)} 
                                alt={ammo} 
                                className="ammo-image" 
                              />
                              <span>{ammo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Please select a gun type from the menu.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
