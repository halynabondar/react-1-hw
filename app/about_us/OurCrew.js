import styles from './page.module.css';

export const OurCrew = () => {
    return (
        <section>
            <p className={styles.text_crew}>Our crew is the heart and soul of Galactica. We are a diverse team of
                seasoned space explorers,
                engineers, and visionaries who are united by a common goal: to make space travel accessible and exciting
                for all.</p>
            <div className={styles.container_crew}>
                <div className={styles.item_crew}>
                    <div className={styles.image_crew}>
                        <img src={"crew/image-anousheh-ansari.png"} alt={"anousheh-ansari"}></img>
                    </div>
                    <div className={styles.name_crew}>Captain Sarah Vega</div>
                    <div className={styles.title_crew}>Astronaut</div>
                    <p className={styles.description_crew}>A former NASA astronaut with over 15 years of experience,
                        Captain
                        Vega leads our missions with unparalleled expertise and a passion for space exploration.</p>
                </div>
                <div className={styles.item_crew}>
                    <div className={styles.image_crew}>
                        <img src={"crew/image-douglas-hurley.png"} alt={"image-douglas-hurley"}></img>
                    </div>
                    <div className={styles.name_crew}>Dr. Leo Redding</div>
                    <div className={styles.title_crew}>Chief astrophysicist</div>
                    <p className={styles.description_crew}>Our chief astrophysicist, Dr. Redding, is a renowned
                        scientist who
                        has contributed to major space discoveries. He ensures that every journey is as educational as
                        it is exhilarating.</p>
                </div>
                <div className={styles.item_crew}>
                    <div className={styles.image_crew}>
                        <img src={"crew/image-victor-glover.png"}
                             alt={"image-victor-glover"}></img>
                    </div>
                    <div className={styles.name_crew}>Alex Santos</div>
                    <div className={styles.title_crew}>Mission Specialist</div>
                    <p className={styles.description_crew}>As a mission specialist, Alex’s job is to ensure that every
                        aspect
                        of the journey runs smoothly. With a background in both science and adventure tourism, Alex is
                        the perfect guide for our space travelers.</p>
                </div>
                <div className={styles.item_crew}>
                    <div className={styles.image_crew}>
                        <img src={"crew/image-mark-shuttleworth.png"} alt={"image-mark-shuttleworth"}></img>
                    </div>

                    <div className={styles.name_crew}>Maya Patel</div>
                    <div className={styles.title_crew}>Crew Member</div>
                    <p className={styles.description_crew}>Maya brings a unique blend of technical skills and customer
                        service experience to the team. She’s always ready to assist with any needs and to make sure
                        every traveler has an unforgettable experience.</p>
                </div>
                <div className={styles.item_crew}>
                    <div className={styles.image_crew}>
                        <img src={"crew/image-anousheh-ansari.png"} alt={"image-anousheh-ansari"}></img>
                    </div>
                    <div className={styles.name_crew}>Hana Lee</div>
                    <div className={styles.title_crew}>Chief Engineer</div>
                    <p className={styles.description_crew}>With her extensive background in aerospace engineering, Hana
                        Lee is responsible for the state-of-the-art technology that powers our spacecraft. Her
                        innovation ensures that our travelers are always in safe hands.</p>
                </div>

            </div>
        </section>
    );
}