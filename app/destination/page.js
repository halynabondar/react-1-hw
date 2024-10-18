"use client";

import {useState} from 'react';

import styles from '@/components/destination/destination.module.css';
import {AddWishlistItem} from '@/components/destination/AddWishlistItem';
import PlanetCard from "@/components/destination/PlanetCard";
import PlanetWishlistItem from "@/components/destination/PlanetWishlistItem";

export const Destinations = () => {

    const planetItems = [
        {
            name: "Europa",
            description: "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
            thumbnail: "/destination/image-europa.png",
            isSelected: false,
        },
        {
            name: "Mars",
            description: "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
            thumbnail: "/destination/image-mars.png",
            isSelected: false,
        },
        {
            name: "Moon",
            description: "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
            thumbnail: "/destination/image-moon.png",
            isSelected: false,
        },
        {
            name: "Titan",
            description: "Titan, Saturn\\'s largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
            thumbnail: "/destination/image-titan.png",
            isSelected: false,
        },
    ]

    const [selectedPlanets, setSelectedPlanets] = useState([]);

    const onAddOrRemovePlanet = (name, index) => {
        setSelectedPlanets((prevSelectedPlanets) => {
            if (prevSelectedPlanets.includes(name)) {
                // Remove the planet if it is already selected
                return prevSelectedPlanets.filter(planet => planet !== name);
            } else {
                // Add the planet if it is not already selected
                return [...prevSelectedPlanets, name];
            }
        });
        console.log(`You selected the following planet: ${name}, with the index of ${index}`);
    }
    const numberOfPlanets = selectedPlanets.length;

    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Travel destinations</h1>
                <section className="card">
                    <h2>Wishlist</h2>
                    {numberOfPlanets === 0 ? (
                        <p>No planets in wishlist :(</p>
                    ) : (
                        <p>You have {numberOfPlanets} {numberOfPlanets > 1 ? 'planets' : 'planet'} in your wishlist</p>
                    )}
                    {selectedPlanets.map((planet, index) => (
                        <p key={index}>{planet}</p>
                    ))}
                    <b>List coming soon after lesson 3!</b>
                     <AddWishlistItem />
                    {/* TASK - React 1 week 3 */}
                    {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
                    {/* Implement the "REMOVE" function */}
                    {/* uncomment the following code snippet: */}
          <h3>Your current wishlist</h3>
          <div className={styles.wishlistList}>
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
            <PlanetWishlistItem 
              name="europa"
              onRemove={() => removeFromWishlist('europa')}
              thumbnail="/destination/image-europa.png"
            />
          </div>
                </section>
                <section className="card">
                    <h2>Possible destinations</h2>
                    {planetItems.map((item, index) => (
                        <PlanetCard
                            name={item.name}
                            key={index}
                            description={item.description}
                            thumbnail={item.thumbnail}
                            isSelected={selectedPlanets.includes(item.name)}
                            onAddOrRemovePlanet={() => onAddOrRemovePlanet(item.name)}/>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Destinations;
