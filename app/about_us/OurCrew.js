import styles from './page.module.css';

const crewMembers = [
    {
        name: "Sarah Vega",
        imageUrl: "crew/image-anousheh-ansari.png",
        title: "Mission Commander",
        description:
            "A former NASA astronaut with over 15 years of experience, Captain Vega leads our missions with unparalleled expertise and a passion for space exploration.",
    },
    {
        name: "Dr. Leo Redding",
        title: "Chief AstroPhysicist",
        imageUrl: "crew/image-mark-shuttleworth.png",
        description:
            "Our chief astrophysicist, Dr. Redding, is a renowned scientist who has contributed to major space discoveries. He ensures that every journey is as educational as it is exhilarating.",
    },
    {
        name: "Hana Lee",
        title: "Chief Engineer",
        imageUrl: "crew/image-victor-glover.png",
        description:
            "With her extensive background in aerospace engineering, Hana Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her innovation ensures that our travelers are always in safe hands.",
    },
    {
        name: "Alex Santos",
        title: "Mission Specialist",
        imageUrl: "crew/image-douglas-hurley.png",
        description:
            "As a mission specialist, Alex’s job is to ensure that every aspect of the journey runs smoothly. With a background in both science and adventure tourism, Alex is the perfect guide for our space travelers.",
    },
    {
        name: "Maya Patel",
        title: "Crew Member",
        imageUrl: "crew/image-anousheh-ansari.png",
        description:
            "Maya brings a unique blend of technical skills and customer service experience to the team. She’s always ready to assist with any needs and to make sure every traveler has an unforgettable experience.",
    },
];

const OurCrew = () => {
    return (
        <section>
            <p className={styles.textCrew}>Our crew is the heart and soul of Galactica. We are a diverse team of
                seasoned space explorers, engineers, and visionaries who are united by a common goal: to make space
                travel accessible and exciting
                for all.</p>
            <div className={styles.containerCrew}>
                {crewMembers.map((member, index) => (
                    <div className={styles.itemCrew} key={index}>
                        <div className={styles.imageCrew}>
                            <img src={member.imageUrl} alt={`image of {member.name}`}></img>
                        </div>
                        <div className={styles.nameCrew}>{member.name}</div>
                        <div className={styles.titleCrew}>{member.title}</div>
                        <p className={styles.descriptionCrew}>{member.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurCrew;