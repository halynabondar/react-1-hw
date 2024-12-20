"use client";

import React, {useState, useEffect} from 'react';
import styles from './page.module.css';

const API_KEY = 'TaA8BgllKVYPCxHa4t6SkF5NemO6QmTGv4lwvRkM';

const NASA_URLs = {
    astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
    marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

const RoverPhoto = ({src, date, roverName}) => {
    return (
        <div className={styles.nasaPicOfTheDayImg}>
            <img src={src} alt={`Rover: ${roverName} on ${date}`}/>
            <p className={styles.roverText}>{`Date: ${date}`}</p>
            <p className={styles.roverText}>{`Rover: ${roverName}`}</p>
        </div>
    );
}

export const NasaCollaboration = () => {
    const [dailyImg, setDailyImg] = useState({});
    const [roverPhoto, setRoverPhoto] = useState({});

    useEffect(() => {
        const fetchRoverPhotos = async () => {
            const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(response => response.json());
            setRoverPhoto(roverPhotoResponse);
        };

        const fetchData = async () => {
            try {
                const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay);
                const dailyImg = await dailyImgResponse.json();
                setDailyImg(dailyImg);
            } catch (error) {
                console.error("Error fetching astronomy picture of the day:", error);
            }
        }
        fetchRoverPhotos();
        fetchData();
    }, []);

    return (
        <div className="fullBGpicture">
            <main className="mainContent">
                <h1>Collaboration with NASA</h1>
                <section className="card">
                    <h2>Astronomy Picture of the day</h2>
                    {dailyImg && dailyImg.url ? (
                        <div className={styles.collaborationItem}>
                            <img src={dailyImg.url} title={dailyImg.title} alt={dailyImg.title}/>
                            <h3 className={styles.collaborationTitle}>{dailyImg.title}</h3>
                            <p className={styles.collaborationText}>{dailyImg.explanation}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </section>
                <section className="card">
                    <h2 className={styles.roverPhotosTitle}>Rover Photos</h2>
                    {roverPhoto?.photos?.length ? (
                        <div className={styles.roverPhotos}>
                            {roverPhoto.photos.map((photo, index) => (
                                <RoverPhoto key={index} src={photo.img_src} date={photo.earth_date}
                                            roverName={photo.rover.name}/>
                            ))}
                        </div>
                    ) : (
                        <p>Loading rover photos...</p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default NasaCollaboration;
