import React, { useState } from "react";
import "./style.css";

const AnimalsInCages = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [keyNumber, setKeyNumber] = useState(5); // Default anahtar sayısı
  const [insufficientKeys, setInsufficientKeys] = useState(false);

  // Pop-up'ı açmak için kullanılacak fonksiyon
  const openPopup = (animal) => {
    setSelectedAnimal(animal);
    if (keyNumber >= animal.key) {
      setPopupOpen(true);
    } else {
      setInsufficientKeys(true);
      setTimeout(() => setInsufficientKeys(false), 1000); // 1 saniye sonra uyarıyı kapat
    }
  };

  // Pop-up'ı kapatmak için kullanılacak fonksiyon
  const closePopup = () => {
    setSelectedAnimal(null);
    setPopupOpen(false);
  };

  // Anahtarları güncelleyen fonksiyon
  const updateKeys = (value) => {
    setKeyNumber((prevKeyNumber) => Math.max(prevKeyNumber - value, 0));
  };

  const animals = [
    { id: 1, name: "Monkey", image: "/animals/sad_monkey.png", content: "Monkey içeriği", key: 1, value: 2 },
    { id: 2, name: "Lion", image: "/animals/sad_lion.png", content: "Lion içeriği", key: 2, value: 6 },
    { id: 3, name: "Elephant", image: "/animals/sad_elephant.png", content: "Elephant içeriği", key: 3, value: 7 },
    { id: 4, name: "Owl", image: "/animals/sad_owl.png", content: "Owl içeriği", key: 4, value: 8},
    { id: 5, name: "Fox", image: "/animals/sad_fox.png", content: "Fox içeriği", key: 5, value: 2 },
    { id: 6, name: "Beaver", image: "/animals/sad_beaver.png", content: "Beaver içeriği", key: 6, value: 7 },
    { id: 7, name: "Rabbit", image: "/animals/sad_rabbit.png", content: "Rabbit içeriği", key: 7, value: 3 },
    { id: 8, name: "Cat", image: "/animals/sad_cat.png", content: "Cat içeriği", key: 8, value: 7 },
    { id: 9, name: "Dog", image: "/animals/sad_dog.png", content: "Dog içeriği", key: 9, value: 5 },
    { id: 10, name: "Flamingo", image: "/animals/sad_flamingo.png", content: "Flamingo içeriği", key: 10, value: 2 },
    { id: 11, name: "Reindeer", image: "/animals/sad_reindeer.png", content: "Reindeer içeriği", key: 11, value: 6 },
    { id: 12, name: "Frog", image: "/animals/sad_frog.png", content: "Frog içeriği", key: 12, value: 8 },
    // Diğer hayvanlar...
  ];

  return (
    <div className="container">
      <div id="holder">
        <div id="text">
          <h1>Kurtarmak istediğiniz hayvanın kafesine tıklayın.</h1>
        </div>
        <div id="key">
          <div id="keyIcon"><img src="/icon/keyIcon.png" alt="Key Icon" /></div>
          <div id="keyNumber">{keyNumber}</div>
        </div>
      </div>
      <div id="animal-grid">
        {animals.map((animal) => (
          <div className="animal" key={animal.id}>
            <img
              className="animal-image"
              src={animal.image}
              alt={animal.name}
              
            />
                        <img src="/animals/cage.png" className="cage"/>
            <button id="keyOpen" onClick={() => openPopup(animal)} >
              
              {animal.value}/{keyNumber}</button>

          </div>
        ))}
      </div>

      {/* Pop-up bileşeni */}
      {isPopupOpen && selectedAnimal && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedAnimal.name}</h2>
            <img
              src={`/animals/${selectedAnimal.name.toLowerCase()}_happy.png`}
              alt={selectedAnimal.name}
            />
            <p>{selectedAnimal.content}</p>
            {/* Pop-up'ı kapatmak için buton */}
            <button onClick={() => { closePopup(); updateKeys(selectedAnimal.value); }}>Kapat</button>
          </div>
        </div>
      )}

      {/* Yetersiz anahtar uyarısı */}
      {insufficientKeys && (
        <div className="custom-alert">
          <p>Yetersiz anahtar sayısı. Daha fazla anahtar kazanmak için görevleri yerine getirin.</p>
        </div>
      )}
    </div>
  );
};

export default AnimalsInCages;
