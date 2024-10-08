import styles from './page.module.css';

export const OurCrew = () => {
    return (
        <section>
            <p className={styles.textCrew}>Our crew is the heart and soul of Galactica. We are a diverse team of
                seasoned space explorers,
                engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting
                for all.</p>
            <div className={styles.containerCrew}>
                <div className={styles.itemCrew}>
                    <div className={styles.imageCrew}>
                        <img src={"crew/image-anousheh-ansari.png"} alt={"anousheh-ansari"}></img>
                    </div>
                    <div className={styles.nameCrew}>Captain Sarah Vega</div>
                    <div className={styles.titleCrew}>Astronaut</div>
                    <p className={styles.descriptionCrew}>A former NASA astronaut with over 15 years of experience,
                        Captain
                        Vega leads our missions with unparalleled expertise and a passion for space exploration.</p>
                </div>
                <div className={styles.itemCrew}>
                    <div className={styles.imageCrew}>
                        <img src={"crew/image-douglas-hurley.png"} alt={"image-douglas-hurley"}></img>
                    </div>
                    <div className={styles.nameCrew}>Dr. Leo Redding</div>
                    <div className={styles.titleCrew}>Chief astrophysicist</div>
                    <p className={styles.descriptionCrew}>Our chief astrophysicist, Dr. Redding, is a renowned
                        scientist who
                        has contributed to major space discoveries. He ensures that every journey is as educational as
                        it is exhilarating.</p>
                </div>
                <div className={styles.itemCrew}>
                    <div className={styles.imageCrew}>
                        <img src={"crew/image-victor-glover.png"}
                             alt={"image-victor-glover"}></img>
                    </div>
                    <div className={styles.nameCrew}>Alex Santos</div>
                    <div className={styles.titleCrew}>Mission Specialist</div>
                    <p className={styles.descriptionCrew}>As a mission specialist, Alex’s job is to ensure that every
                        aspect
                        of the journey runs smoothly. With a background in both science and adventure tourism, Alex is
                        the perfect guide for our space travelers.</p>
                </div>
                <div className={styles.itemCrew}>
                    <div className={styles.imageCrew}>
                        <img src={"crew/image-mark-shuttleworth.png"} alt={"image-mark-shuttleworth"}></img>
                    </div>

                    <div className={styles.nameCrew}>Maya Patel</div>
                    <div className={styles.titleCrew}>Crew Member</div>
                    <p className={styles.descriptionCrew}>Maya brings a unique blend of technical skills and customer
                        service experience to the team. She’s always ready to assist with any needs and to make sure
                        every traveler has an unforgettable experience.</p>
                </div>
                <div className={styles.itemCrew}>
                    <div className={styles.imageCrew}>
                        <img src={"crew/image-anousheh-ansari.png"} alt={"image-anousheh-ansari"}></img>
                    </div>
                    <div className={styles.nameCrew}>Hana Lee</div>
                    <div className={styles.titleCrew}>Chief Engineer</div>
                    <p className={styles.descriptionCrew}>With her extensive background in aerospace engineering, Hana
                        Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her
                        innovation ensures that our travelers are always in safe hands.</p>
                </div>
            </div>
        </section>
    );
}