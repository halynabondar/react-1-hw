import styles from './page.module.css';

const ourPartners = [
    {
        companyName: "Alphabet",
        logoUrl: "./business_partners/alphabet-logo.png",
    },
    {
        companyName: "Amazon",
        logoUrl: "./business_partners/amazon_logo.png",
    },
    {
        companyName: "CBC",
        logoUrl: "./business_partners/CBC_Logo_White.png",
    },
    {
        companyName: "Microsoft",
        logoUrl: "./business_partners/Microsoft-Logo-white.png",
    },
    {
        companyName: "NYU",
        logoUrl: "./business_partners/nyu-logo.png",
    },
    {
        companyName: "Queens",
        logoUrl: "./business_partners/QueensLogo_white.png",
    },
    {
        companyName: "Samsung",
        logoUrl: "./business_partners/samsung-logo.png",
    },
    {
        companyName: "Sodexo",
        logoUrl: "./business_partners/sodexo-logo.png",
    },
];

const OurPartners = () => {
    return (
        <section>
            <p className={styles.textPartners}>We collaborate with some of the most respected names in the space and
                technology industries to make
                every journey extraordinary.</p>
            <div className={styles.containerPartners}>
                {ourPartners.map(partner => (
                    <div className={styles.itemPartners}>
                        <img className={styles.imagePartners} src={partner.logoUrl}
                             alt={partner.companyName}></img>
                    </div>
                ))}
            < /div>
        </section>
    )};

export default OurPartners;