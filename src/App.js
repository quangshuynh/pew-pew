import React, { useState } from 'react';
import './App.css';

const initialGuns = {
  handguns: [
    { 
      id: 1, 
      name: 'Glock 17', 
      description: 'A reliable semi-automatic handgun.', 
      ammo: ['9mm'],
      image: 'https://assets.basspro.com/image/upload/c_limit,dpr_1.0,f_auto,h_562,q_auto,w_900/c_limit,h_562,w_900/v1/ProductImages/450/master1_10218314_main?pgw=1'
    },
  ],
  rifles: [
    { 
      id: 2, 
      name: 'M4 Carbine', 
      description: 'A popular military assault rifle.', 
      ammo: ['5.56 NATO'],
      image: 'https://via.placeholder.com/150?text=M4+Carbine'
    },
  ],
  shotguns: [
    { 
      id: 3, 
      name: 'Remington 870', 
      description: 'A pump-action shotgun known for its durability.', 
      ammo: ['12 Gauge'],
      image: 'https://via.placeholder.com/150?text=Remington+870'
    },
  ],
  smgs: [
    { 
      id: 4, 
      name: 'MP5', 
      description: 'A widely used submachine gun.', 
      ammo: ['9mm'],
      image: 'https://via.placeholder.com/150?text=MP5'
    },
  ],
  machineguns: [
    { 
      id: 5, 
      name: 'M249', 
      description: 'A light machine gun used for sustained fire.', 
      ammo: ['5.56 NATO'],
      image: 'https://via.placeholder.com/150?text=M249'
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
    const image = prompt('Enter image URL:');
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
        <h1>Pew Pew</h1>
      </header>
      <main>
        <nav className="menu">
          <h2>Gun Types</h2>
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
                      <p>
                        <strong>Ammo Types:</strong> {gun.ammo.join(', ')}
                      </p>
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
