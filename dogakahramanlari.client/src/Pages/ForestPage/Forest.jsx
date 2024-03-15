
import React, { useState } from "react";
import "./ForestStyle.css";

const Forest = () => {

    const [animals, setAnimals] = useState([
        {
            id: 1,
            name: "Monkey",
            images: {
                normal: "/black-animals/black-monkey.png",
                status1: "/animals/monkey.png",
            },
            content: "Monkey içeriği",
            key: 1,
            value: 2,
            status: 0,
        },
        {
            id: 2,
            name: "Lion",
            images: {
                normal: "/black-animals/black-lion.png",
                status1: "/animals/lion.png",
            },
            content: "Lion içeriği",
            key: 2,
            value: 6,
            status: 0,
        },
        {
            id: 3,
            name: "Giraffe",
            images: {
                normal: "/black-animals/black-giraffe.png",
                status1: "/animals/giraffe.png",
            },
            content: "Giraffe içeriği",
            key: 3,
            value: 7,
            status: 0,
        },
        {
            id: 4,
            name: "Owl",
            images: {
                normal: "/black-animals/black-owl.png",
                status1: "/animals/owl.png",
            },
            content: "Owl içeriği",
            key: 4,
            value: 8,
            status: 0,
        },
        {
            id: 5,
            name: "Fox",
            images: {
                normal: "/black-animals/black-fox.png",
                status1: "/animals/fox.png",
            },
            content: "Fox içeriği",
            key: 5,
            value: 2,
            status: 0,
        },
        {
            id: 6,
            name: "Beaver",
            images: {
                normal: "/black-animals/black-beaver.png",
                status1: "/animals/beaver.png",
            },
            content: "Beaver içeriği",
            key: 6,
            value: 7,
            status: 0,
        },
        {
            id: 7,
            name: "Rabbit",
            images: {
                normal: "/black-animals/black-rabbit.png",
                status1: "/animals/rabbit.png",
            },
            content: "Rabbit içeriği",
            key: 7,
            value: 3,
            status: 0,
        },
        {
            id: 8,
            name: "Cat",
            images: {
                normal: "/black-animals/black-cat.png",
                status1: "/animals/cat.png",
            },
            content: "Cat içeriği",
            key: 8,
            value: 7,
            status: 0,
        },
        {
            id: 9,
            name: "Dog",
            images: {
                normal: "/black-animals/black-dog.png",
                status1: "/animals/dog.png",
            },
            content: "Dog içeriği",
            key: 9,
            value: 5,
            status: 0,
        },

        {
            id: 10,
            name: "Flamingo",
            images: {
                normal: "/black-animals/black-flamingo.png",
                status1: "/animals/flamingo.png",
            },
            content: "Flamingo içeriği",
            key: 10,
            value: 2,
            status: 0,
        },
        {
            id: 11,
            name: "Reindeer",
            images: {
                normal: "/black-animals/black-reindeer.png",
                status1: "/animals/reindeer.png",
            },
            content: "Reindeer içeriği",
            key: 11,
            value: 6,
            status: 0,
        },
        {
            id: 12,
            name: "Frog",
            images: {
                normal: "/black-animals/black-frog.png",
                status1: "/animals/frog.png",
            },
            content: "Frog içeriği",
            key: 12,
            value: 8,
            status: 0,
        },
        {
            id: 13,
            name: "Parrot",
            images: {
                normal: "/black-animals/black-parrot.png",
                status1: "/animals/parrot.png",
            },
            content: "Parrot içeriği",
            key: 13,
            value: 3,
            status: 0,
        }

    ]);


    const updateAnimalStatus = (id, newStatus) => {
        setAnimals(prevAnimals =>
            prevAnimals.map(animal =>
                animal.id === id ? { ...animal, status: newStatus } : animal
            )
        );
    };

    // return (
    //     <div className="forest-wrapper">

    //         <div className="forest-header-container">
    //             <div className="forest-header">
    //                 <h1>ORMAN</h1>
    //             </div>
    //             <div className="forest-header2">
    //                 <h1>ORMAN</h1>
    //             </div>
    //         </div>

    //         <div id="forest-animal-container">
    //             {animals.map((animal) => (
    //                 <div className={`animal-${animal.id}`} key={animal.id}>
    //                     <img
    //                         className={`animal-${animal.id}`}
    //                         src={animal.image}
    //                         alt={animal.name}
    //                     />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // )

    return (
        <div className="forest-wrapper">
            <div className="forest-header-container">
                <div className="forest-header">
                    <h1>ORMAN</h1>
                </div>
                <div className="forest-header2">
                    <h1>ORMAN</h1>
                </div>
            </div>
            <div id="forest-animal-container">
                {animals.map(animal => (
                    <div className={`animal-${animal.id}`} key={animal.id}>
                        <img
                            className={`animal-${animal.id}`}
                            src={animal.status === 1 ? animal.images.status1 : animal.images.normal}
                            alt={animal.name}
                            onClick={() => updateAnimalStatus(animal.id, 1)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );



};

export default Forest;