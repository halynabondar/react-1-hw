import React, {Component} from 'react';
import styles from "@/components/destination/destination.module.css";

export default function PlanetCard({name, description, thumbnail, isSelected, onAddOrRemovePlanet}) {
    return (
        <div className={styles.planetCard}>
            <img className={styles.planetThumbnail} src={thumbnail} alt={`image of ${name}`}/>
            <div className={styles.planetDescription}>
                <h2>{name} {isSelected ? "- SELECTED" : ""}</h2>
                <p className={styles.planetDescription}>{description}</p>
            </div>
            <button className="roundButton" onClick={() => onAddOrRemovePlanet('Pluto', 0)}>
                {isSelected ? "REMOVE" : "ADD PLANET"}
            </button>
        </div>
    )
}