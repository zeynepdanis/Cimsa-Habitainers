import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const AnimalsInCages = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [keyNumber, setKeyNumber] = useState(10);
  const [insufficientKeys, setInsufficientKeys] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Monkey",
      image: "/black-animals/black-monkey.png",
      content: "Monkey içeriği",
      key: 1,
      value: 2,
      status: 0,
    },
    {
      id: 2,
      name: "Lion",
      image: "/black-animals/black-lion.png",
      content: "Lion içeriği",
      key: 2,
      value: 6,
      status: 0,
    },
    {
      id: 3,
      name: "Giraffe",
      image: "/black-animals/black-giraffe.png",
      content: "Giraffe içeriği",
      key: 3,
      value: 7,
      status: 0,
    },
    {
      id: 4,
      name: "Owl",
      image: "/black-animals/black-owl.png",
      content: "Owl içeriği",
      key: 4,
      value: 8,
      status: 0,
    },
    {
      id: 5,
      name: "Fox",
      image: "/black-animals/black-fox.png",
      content: "Fox içeriği",
      key: 5,
      value: 2,
      status: 0,
    },
    {
      id: 6,
      name: "Beaver",
      image: "/black-animals/black-beaver.png",
      content: "Beaver içeriği",
      key: 6,
      value: 7,
      status: 0,
    },
    {
      id: 7,
      name: "Rabbit",
      image: "/black-animals/black-rabbit.png",
      content: "Rabbit içeriği",
      key: 7,
      value: 3,
      status: 0,
    },
    {
      id: 8,
      name: "Cat",
      image: "/black-animals/black-cat.png",
      content: "Cat içeriği",
      key: 8,
      value: 7,
      status: 0,
    },
    {
      id: 9,
      name: "Dog",
      image: "/black-animals/black-dog.png",
      content: "Dog içeriği",
      key: 9,
      value: 5,
      status: 0,
    },
    {
      id: 10,
      name: "Flamingo",
      image: "/black-animals/black-flamingo.png",
      content: "Flamingo içeriği",
      key: 10,
      value: 2,
      status: 0,
    },
    {
      id: 11,
      name: "Reindeer",
      image: "/black-animals/black-reindeer.png",
      content: "Reindeer içeriği",
      key: 11,
      value: 6,
      status: 0,
    },
    {
      id: 12,
      name: "Frog",
      image: "/black-animals/black-frog.png",
      content: "Frog içeriği",
      key: 12,
      value: 8,
      status: 0,
    },
    {
      id: 13,
      name: "Parrot",
      image: "/black-animals/black-parrot.png",
      content: "Parrot içeriği",
      key: 13,
      value: 3,
      status: 0,
    },
    // Add more animals as needed
  ]);

  const animalsPerPage = 12;

  const indexOfLastAnimal = currentPage * animalsPerPage;
  const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
  const currentAnimals = animals.slice(indexOfFirstAnimal, indexOfLastAnimal);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openPopup = (animal) => {
    setSelectedAnimal(animal);
    if (keyNumber >= animal.value) {
      setPopupOpen(true);
    } else {
      setInsufficientKeys(true);
      setTimeout(() => setInsufficientKeys(false), 1000);
    }
  };

  const closePopup = () => {
    setSelectedAnimal(null);
    setPopupOpen(false);
  };

  const updateKeys = (value) => {
    setKeyNumber((prevKeyNumber) => Math.max(prevKeyNumber - value, 0));
  };

  const rescueAnimal = () => {
    const updatedAnimals = animals.map((animal) =>
      animal.id === selectedAnimal.id ? { ...animal, status: 1 } : animal
    );

    setPopupOpen(false);
    setSelectedAnimal(null);
    setKeyNumber((prevKeyNumber) =>
      Math.max(prevKeyNumber - selectedAnimal.value, 0)
    );
    setAnimals(updatedAnimals);
  };

  return (
    <div>
      <div className="header">
        <h1>HAYVANLAR</h1>
      
      </div>

      <div className="container">
        <div id="holder">
          <div id="text">
            <h1>Kurtarmak istediğiniz hayvanın kafesine tıklayın.</h1>
          </div>
          <div id="key">
            <div id="keyIcon">
              <img src="/icon/keyIcon.png" alt="Key Icon" />
            </div>
            <div id="keyNumber">{keyNumber}</div>
          </div>
        </div>
        <div id="animal-grid">
          {currentAnimals.map((animal) => (
            <div className="animal" key={animal.id}>
              <img
                className="animal-image"
                src={
                  animal.status === 1
                    ? `/animals/${animal.name.toLowerCase()}.png`
                    : animal.image
                }
                alt={animal.name}
              />
              {!animal.status && (
                <>
                  <img src="/animals/cage.png" className="cage" />
                  <button
                    id="keyOpen"
                    onClick={() => openPopup(animal)}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FontAwesomeIcon icon={faLock} />
                    <span style={{ marginLeft: "5px" }}>/</span>
                    <span style={{ marginLeft: "5px" }}>{animal.value}</span>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>

        {isPopupOpen && selectedAnimal && (
          <div className="popup">
            <div className="popup-content">
              <h2>{selectedAnimal.name}</h2>
              <img
                src={`/animals/${selectedAnimal.name.toLowerCase()}.png`}
                alt={selectedAnimal.name}
              />
              <p>{selectedAnimal.content}</p>
              <button style={{ marginLeft: "5px" }} onClick={rescueAnimal}>
                Kurtar
              </button>
              <button style={{ marginLeft: "5px" }} onClick={closePopup}>
                Kapat
              </button>
            </div>
          </div>
        )}

        {insufficientKeys && (
          <div className="custom-alert">
            <p>
              Yetersiz anahtar sayısı. Daha fazla anahtar kazanmak için
              görevleri yerine getirin.
            </p>
          </div>
        )}

        <div className="pagination">
          {currentPage > 1 && (
            <button onClick={() => paginate(currentPage - 1)}>&lt; </button>
          )}

          {Array.from(
            { length: Math.ceil(animals.length / animalsPerPage) },
            (_, index) => (
              <button key={index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            )
          )}

          {currentPage < Math.ceil(animals.length / animalsPerPage) && (
            <button onClick={() => paginate(currentPage + 1)}> &gt;</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalsInCages;