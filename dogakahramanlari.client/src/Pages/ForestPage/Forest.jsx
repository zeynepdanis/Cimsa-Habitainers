import React from "react";
import "./Forest.style.css";

const animals = [
    { id: 1, name: "Owl", image: "/black-animals/black-owl.png", content: "Owl içeriği" },
    { id: 2, name: "Lion", image: "/black-animals/black-lion.png", content: "Lion içeriği", key: 2, value: 6 },
    { id: 3, name: "Monkey", image: "/black-animals/black-monkey.png", content: "Monkey içeriği", key: 3, value: 7 },
    { id: 4, name: "Giraffe", image: "/black-animals/black-giraffe.png", content: "Giraffe içeriği", key: 4, value: 8 },
    { id: 5, name: "Fox", image: "/black-animals/black-fox.png", content: "Fox içeriği", key: 5, value: 2 },
    { id: 6, name: "Beaver", image: "/black-animals/black-beaver.png", content: "Beaver içeriği", key: 6, value: 7 },
    { id: 7, name: "Rabbit", image: "/black-animals/black-rabbit.png", content: "Rabbit içeriği", key: 7, value: 3 },
    { id: 8, name: "Cat", image: "/black-animals/black-cat.png", content: "Cat içeriği", key: 8, value: 7 },
    { id: 9, name: "Dog", image: "/black-animals/black-dog.png", content: "Dog içeriği", key: 9, value: 5 },
    { id: 10, name: "Flamingo", image: "/black-animals/black-flamingo.png", content: "Flamingo içeriği", key: 10, value: 2 },
    { id: 11, name: "Parrot", image: "/black-animals/black-parrot.png", content: "Parot içeriği" },
    { id: 12, name: "Frog", image: "/black-animals/black-frog.png", content: "Frog içeriği" }
];


const Forest = () => {
    return (

        <div id="animal-grid">
            {animals.map((animal) => (
                <div className="animal" key={animal.id}>
                    <img
                        className="animal-image"
                        src={animal.image}
                        alt={animal.name}
                    />

                </div>
            ))}


        </div>


    )
}

export default Forest;