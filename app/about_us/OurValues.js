import styles from './page.module.css';

const values = [
    {
        "number": "1",
        "valueTitle": "Exploration",
        "valueDescription": "We are driven by a deep-seated desire to explore the unknown. We believe that the pursuit of discovery is at the heart of human nature, and we are committed to pushing the boundaries of what is possible."
    },
    {
        "number": "2",
        "valueTitle": "Innovation",
        "valueDescription": "At Galactica, we prioritize cutting-edge technology and innovation. We are constantly evolving our spacecraft, safety protocols, and services to ensure that our travelers experience the most advanced and secure space journeys available."
    },
    {
        "number": "3",
        "valueTitle": "Sustainability",
        "valueDescription": "We are committed to making space exploration sustainable for future generations. Our space missions are designed to minimize environmental impact, both on Earth and in space, and to foster a spirit of responsibility towards our universe."
    },
    {
        "number": "4",
        "valueTitle": "Community",
        "valueDescription": "We believe in the power of collective exploration. Our journeys are not just about reaching new destinations; they are about building a community of space enthusiasts who share a passion for the stars."
    }
];

const OurValues = () => {
    return (
        <div className={styles.containerValues}>
            {values.map((value, index) => (
                <div className={styles.itemValues} key={index}>
                    <div className={styles.numberValues}>{value.number}</div>
                    <div>
                        <h3>{value.valueTitle}</h3>
                        <p className={styles.textValues}>{value.valueDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurValues;