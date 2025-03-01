import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';

// AMMO
import unknown from './assets/ammo/unknown.png';
import nineMM from './assets/ammo/9mm.png';
import twelvegauge from './assets/ammo/12gauge.png';
import sevensixtwo from './assets/ammo/7.62x39.png';
import fivefivesix from './assets/ammo/5.56x45.png';
import fiveseventwoeight from './assets/ammo/5.7x28.png'
import sevensixthree from './assets/ammo/7.63x25.png'
import fourtyfiveacp from './assets/ammo/.45 acp.png'
import fiftyae from './assets/ammo/.50 ae.png'

// GUNS
import glock from './assets/guns/glock17.png';
import remington from './assets/guns/remington870.png';
import ak from './assets/guns/ak47.png';
import mp from './assets/guns/mp5.png';
import mtwofournine from './assets/guns/m249.webp';
import mpfiveseven from './assets/guns/m&p 5.7.webp'
import mpninetwo from './assets/guns/m&p 9 2.0.webp'
import glockthreefourgenfive from './assets/guns/glock34gen5mos.png'
import pitviper from './assets/guns/pitviper.webp'
import combatmaster from './assets/guns/combatmaster.png'
import mausercninesix from './assets/guns/mauser c96.png'
import coltnineteeneleven from './assets/guns/colt 1911.png'
import deserteagle from './assets/guns/deserteagle.webp'
import akfifty from './assets/guns/ak-50.png'

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
  '5.56x45mm NATO': fivefivesix,
  '5.7x28mm': fiveseventwoeight,
  '7.63x25mm': sevensixthree,
  '.45 ACP': fourtyfiveacp,
  '.50 AE': fiftyae,

};

const getAmmoImage = (ammoType) => {
  return ammoImages[ammoType] || unknown;
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
    {
      id: 2,
      name: 'Colt 1911',
      description: 'A classic .45 ACP semi-automatic pistol.',
      ammo: ['.45 ACP'],
      image: coltnineteeneleven
    },
    {
      id: 3,
      name: 'Glock 34 Gen5 MOS',
      description: 'Extended-barrel Glock designed for competition.',
      ammo: ['9mm'],
      image: glockthreefourgenfive
    },
    {
      id: 4,
      name: 'Desert Eagle',
      description: 'A powerful semi-automatic pistol known for its large caliber and iconic design.',
      ammo: ['.50 AE'],
      image: deserteagle
    },
    {
      id: 5,
      name: 'Smith & Wesson M&P 5.7',
      description: 'A S&W pistol chambered in 5.7x28mm.',
      ammo: ['5.7x28mm'],
      image: mpfiveseven
    },
    {
      id: 6,
      name: 'Smith & Wesson M&P 9 2.0',
      description: 'A modern S&W pistol in 9mm.',
      ammo: ['9mm'],
      image: mpninetwo
    },
    {
      id: 7,
      name: 'TTI JW4 Pit Viper',
      description: 'Custom 9mm pistol from Taran Tactical, featured in John Wick 4.',
      ammo: ['9mm'],
      image: pitviper
    },
    {
      id: 8,
      name: 'TTI JW3 Combat Master',
      description: 'Another Taran Tactical 9mm pistol, featured in John Wick 3.',
      ammo: ['9mm'],
      image: combatmaster
    },
    {
      id: 9,
      name: 'Mauser C96',
      description: 'Iconic early 20th-century pistol with a distinctive box magazine.',
      ammo: ['7.63x25mm'],
      image: mausercninesix
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
    {
      id: 3,
      name: 'AK-50',
      description: 'A custom .50 BMG AK platform.',
      ammo: ['.50 BMG'],
      image: akfifty
    },
    {
      id: 4,
      name: 'Century arms WASR-10',
      description: 'Romanian AK variant imported by Century Arms.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 5,
      name: 'BCM Recce 16 MCMR AR-15',
      description: 'A high-quality AR-15 from Bravo Company.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 6,
      name: 'Daniel Defense & Aero Precision parts AR-15',
      description: 'AR-15 built with Daniel Defense and Aero Precision components.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 7,
      name: 'Aero Precision & BCM parts AR-15',
      description: 'Custom AR-15 using Aero Precision and BCM parts.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 8,
      name: 'F1 firearms AR-10 6.5 Creedmoor',
      description: 'AR-10 platform chambered in 6.5 Creedmoor by F1 Firearms.',
      ammo: ['6.5 Creedmoor'],
      image: unknown
    },
    {
      id: 9,
      name: 'KAC SR-25',
      description: 'Knight\'s Armament semi-auto rifle in 7.62x51.',
      ammo: ['7.62x51mm'],
      image: unknown
    },
    {
      id: 10,
      name: 'Bergara B-14 Timber',
      description: 'Bolt-action rifle in 6.5 Creedmoor with a classic wooden stock.',
      ammo: ['6.5 Creedmoor'],
      image: unknown
    },
    {
      id: 11,
      name: 'Bergara B-14 HMR',
      description: 'Hunting and Match Rifle variant in 6.5 Creedmoor.',
      ammo: ['6.5 Creedmoor'],
      image: unknown
    },
    {
      id: 12,
      name: 'Mosin Nagant',
      description: 'Historic Russian bolt-action rifle.',
      ammo: ['7.62x54R'],
      image: unknown
    },
    {
      id: 13,
      name: 'M1 Garand',
      description: 'Iconic U.S. WWII-era semi-automatic rifle.',
      ammo: ['.30-06'],
      image: unknown
    },
    {
      id: 14,
      name: 'Springfield M1903',
      description: 'Classic bolt-action rifle used by U.S. forces.',
      ammo: ['.30-06'],
      image: unknown
    },
    {
      id: 15,
      name: 'Mauser Kar98 kurt',
      description: 'German WWII-era bolt-action rifle.',
      ammo: ['7.92x57 Mauser'],
      image: unknown
    },
    {
      id: 16,
      name: 'Barrett M82A1',
      description: 'Famous .50 BMG anti-materiel rifle.',
      ammo: ['.50 BMG'],
      image: unknown
    },
    {
      id: 17,
      name: 'Norinco Type 56 AKM',
      description: 'Chinese AKM variant in 7.62x39mm.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 18,
      name: 'SKS',
      description: 'Soviet semi-auto carbine pre-dating the AK-47.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 19,
      name: 'HK MR556A1',
      description: 'Heckler & Koch civilian version of the HK416 in 5.56x45.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 20,
      name: 'HK MR762A1',
      description: 'Heckler & Koch civilian version of the HK417 in 7.62x51.',
      ammo: ['7.62x51mm'],
      image: unknown
    },
    {
      id: 21,
      name: 'Transferable AK and AR',
      description: 'Full-auto capable AK and AR rifles (NFA registered).',
      ammo: ['7.62x39mm', '5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 22,
      name: 'AKG-47',
      description: 'A specialized AK variant from AKG.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 23,
      name: 'Zastava ZPAP M70',
      description: 'Serbian-made AK variant in 7.62x39mm.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 24,
      name: 'CMMG Mutant Mk47',
      description: 'AR/AK hybrid rifle from CMMG in 7.62x39mm.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 25,
      name: 'Accuracy International AXMC',
      description: 'Modular bolt-action rifle in .338 Lapua Magnum.',
      ammo: ['.338 Lapua Magnum'],
      image: unknown
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
    {
      id: 4,
      name: 'Kel-Tec KSG',
      description: 'A modern bullpup shotgun with dual tube magazines.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 5,
      name: 'Winchester M1897',
      description: 'John Browning–designed pump-action shotgun.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 6,
      name: 'Saiga-12',
      description: 'AK-style shotgun chambered in 12 Gauge.',
      ammo: ['12 Gauge'],
      image: unknown
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
    {
      id: 5,
      name: 'FN P90 SBR',
      description: 'Compact bullpup SMG in 5.7x28mm.',
      ammo: ['5.7x28mm'],
      image: unknown
    },
    {
      id: 6,
      name: 'Kriss Vector 9mm and .45ACP',
      description: 'Vector SMG available in multiple calibers.',
      ammo: ['9mm', '.45 ACP'],
      image: unknown
    },
    {
      id: 7,
      name: 'Transferable M3 grease gun',
      description: 'Classic WWII-era .45 ACP submachine gun.',
      ammo: ['.45 ACP'],
      image: unknown
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
        ammo: ammoInput.split(',').map((a) => a.trim()),
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
