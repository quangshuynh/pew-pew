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
import fourtyfiveacp from './assets/ammo/45 acp.png'
import fiftyae from './assets/ammo/50 ae.png'

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
    {
      id: 10,
      name: 'Beretta 92FS',
      description: 'Standard Italian military sidearm known for its durability and accuracy.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 11,
      name: 'SIG Sauer P226',
      description: 'Popular law enforcement sidearm with a proven track record.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 12,
      name: 'CZ 75 SP-01',
      description: 'Ergonomic design and reliable performance in competitive shooting.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 13,
      name: 'Walther P99',
      description: 'German semi-automatic pistol with a modern design and polymer frame.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 14,
      name: 'Heckler & Koch USP Compact',
      description: 'Compact variant of the USP series known for its reliability and performance.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 15,
      name: 'Browning Hi-Power',
      description: 'Legendary pistol with a high-capacity magazine and classic design.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 16,
      name: 'Springfield XD',
      description: 'Modern striker-fired pistol with excellent ergonomics.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 17,
      name: 'Glock 19',
      description: 'Compact version of the Glock series favored by law enforcement.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 18,
      name: 'SIG Sauer P320',
      description: 'Modular design with a reliable striker-fired mechanism.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 19,
      name: 'Smith & Wesson Model 686',
      description: 'Robust revolver known for its precision and reliability.',
      ammo: ['.357 Magnum'],
      image: unknown
    },
  ],

  Rifles: [
    {
      id: 16,
      name: 'AK-47',
      description: 'A popular military assault rifle.',
      ammo: ['7.62x39mm'],
      image: ak
    },
    {
      id: 1,
      name: 'M16A4',
      description: 'Standard issue American military rifle.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 2,
      name: 'AR-15',
      description: 'Lightweight and versatile rifle popular among civilians.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 3,
      name: 'FN FAL',
      description: 'Battle rifle widely used by NATO forces.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 4,
      name: 'Heckler & Koch G3',
      description: 'Reliable battle rifle known for its rugged design.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 5,
      name: 'Steyr AUG',
      description: 'Innovative bullpup design rifle from Austria.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 6,
      name: 'L85',
      description: 'British bullpup assault rifle, also known as the SA80.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 7,
      name: 'HK416',
      description: 'Modern assault rifle designed for enhanced reliability.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 8,
      name: 'FN SCAR-H',
      description: 'High-caliber variant of the SCAR series used by special forces.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 9,
      name: 'Tavor TAR-21',
      description: 'Compact, bullpup rifle used by the Israeli military.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 10,
      name: 'FN SCAR-L',
      description: 'Light variant of the SCAR series offering modularity and adaptability.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 11,
      name: 'M14',
      description: 'Legacy rifle that blends semi-automatic fire with high power.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 12,
      name: 'SR-25',
      description: 'Designated marksman rifle known for precision shooting.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 13,
      name: 'Barrett M82',
      description: 'Anti-materiel rifle capable of long-range precision.',
      ammo: ['.50 BMG'],
      image: unknown
    },
    {
      id: 14,
      name: 'Steyr Scout',
      description: 'Lightweight rifle optimized for scouting and sniping.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 15,
      name: 'Dragunov Sniper Rifle (SVD)',
      description: 'Semi-automatic sniper rifle designed for precise long-range shooting.',
      ammo: ['7.62x54mmR'],
      image: unknown
    },
    {
      id: 17,
      name: 'AK-50',
      description: 'A custom .50 BMG AK platform.',
      ammo: ['.50 BMG'],
      image: akfifty
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
    {
      id: 7,
      name: 'Benelli M4',
      description: 'A semi-automatic shotgun used by military and law enforcement.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 8,
      name: 'Mossberg 500',
      description: 'A reliable pump-action shotgun with various configurations.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 9,
      name: 'Remington 1100',
      description: 'A semi-automatic shotgun known for its smooth action.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 10,
      name: 'Browning Auto-5',
      description: 'The first successful semi-automatic shotgun design.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 11,
      name: 'Winchester SXP',
      description: 'A modern pump-action shotgun with a fast cycling action.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 12,
      name: 'Stoeger M3000',
      description: 'A versatile semi-automatic shotgun designed for sport shooting.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 13,
      name: 'Kel-Tec KSG-25',
      description: 'A high-capacity version of the Kel-Tec KSG with dual magazine tubes.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 14,
      name: 'Ithaca 37',
      description: 'A classic pump-action shotgun known for its bottom-eject design.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 15,
      name: 'Saiga-12K',
      description: 'A variant of the Saiga-12 designed for compact use.',
      ammo: ['12 Gauge'],
      image: unknown
    },
    {
      id: 16,
      name: 'Benelli Super Black Eagle 3',
      description: 'A high-performance semi-automatic shotgun favored by professionals.',
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
    {
      id: 8,
      name: 'UMP45',
      description: 'A compact and versatile SMG known for its .45 ACP chambering.',
      ammo: ['.45 ACP'],
      image: unknown
    },
    {
      id: 9,
      name: 'MAC-10',
      description: 'A compact and lightweight SMG with a high rate of fire.',
      ammo: ['.45 ACP'],
      image: unknown
    },
    {
      id: 10,
      name: 'PP-19 Bizon',
      description: 'A Russian SMG featuring a helical magazine for increased capacity.',
      ammo: ['9x18mm'],
      image: unknown
    },
    {
      id: 11,
      name: 'Sterling L2A3',
      description: 'A classic British submachine gun renowned for its reliability.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 12,
      name: 'CZ Scorpion Evo 3',
      description: 'A modern SMG offering high performance and ergonomics.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 13,
      name: 'SIG MPX',
      description: 'A modular SMG designed for precision and adaptability.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 14,
      name: 'Uzi',
      description: 'An iconic Israeli SMG known for its compact design and reliability.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 15,
      name: 'Beretta M12',
      description: 'An Italian SMG with a reputation for performance and durability.',
      ammo: ['9mm'],
      image: unknown
    },
    {
      id: 16,
      name: 'H&K MP7',
      description: 'A futuristic PDW/SMG known for its lightweight design and high penetration.',
      ammo: ['4.6x30mm NATO'],
      image: unknown
    },
    {
      id: 17,
      name: 'Sten Mk II',
      description: 'A historic British SMG with a simple, effective design.',
      ammo: ['9mm'],
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
    {
      id: 2,
      name: 'M60',
      description: 'A heavy machine gun used by the U.S. military since the 1950s.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 3,
      name: 'PKM',
      description: 'A reliable Russian general-purpose machine gun.',
      ammo: ['7.62x54mmR'],
      image: unknown
    },
    {
      id: 4,
      name: 'M240',
      description: 'A versatile medium machine gun favored by NATO forces.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 5,
      name: 'Browning M2',
      description: 'A heavy machine gun known for its destructive power.',
      ammo: ['.50 BMG'],
      image: unknown
    },
    {
      id: 6,
      name: 'MG42',
      description: 'A World War II-era machine gun renowned for its high rate of fire.',
      ammo: ['7.92×57mm Mauser'],
      image: unknown
    },
    {
      id: 7,
      name: 'M1919 Browning',
      description: 'A .30 caliber machine gun that served in several wars.',
      ammo: ['.30-06 Springfield'],
      image: unknown
    },
    {
      id: 8,
      name: 'FN MAG',
      description: 'A general-purpose machine gun known for its reliability and firepower.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 9,
      name: 'HK21',
      description: 'A German-designed machine gun often used as a squad automatic weapon.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 10,
      name: 'Ultimax 100',
      description: 'A light machine gun renowned for its controllability and accuracy.',
      ammo: ['5.56x45mm NATO'],
      image: unknown
    },
    {
      id: 11,
      name: 'PKP Pecheneg',
      description: 'An updated version of the classic PK machine gun with modern features.',
      ammo: ['7.62x54mmR'],
      image: unknown
    },
    {
      id: 12,
      name: 'QJZ-171',
      description: 'A Chinese heavy machine gun used by modern armed forces.',
      ammo: ['12.7x108mm'],
      image: unknown
    },
    {
      id: 13,
      name: 'RPK',
      description: 'A light machine gun variant of the AK series, designed for squad support.',
      ammo: ['7.62x39mm'],
      image: unknown
    },
    {
      id: 14,
      name: 'MG3',
      description: 'An improved version of the MG42 with enhanced features.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 15,
      name: 'Minigun',
      description: 'A rotary machine gun known for its extremely high rate of fire.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
    },
    {
      id: 16,
      name: 'M134 Vulcan',
      description: 'A lightweight rotary machine gun used on aircraft and ground vehicles.',
      ammo: ['7.62x51mm NATO'],
      image: unknown
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
