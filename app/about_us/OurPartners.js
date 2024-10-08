import styles from './page.module.css';

export const OurPartners = () => {
    return (
        <section>
            <p className={styles.textPartners}>We collaborate with some of the most respected names in the space and
                technology industries to make
                every journey extraordinary.</p>
            <div className={styles.containerPartners}>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/alphabet-logo.png"}
                         alt={"alphabet-logo"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/amazon_logo.png"}
                         alt={"amazon_logo"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/CBC_Logo_White.png"}
                         alt={"CBC_Logo_White"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/Microsoft-Logo-white.png"}
                         alt={"Microsoft-Logo-white"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/nyu-logo.png"}
                         alt={"nyu-logo"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/QueensLogo_white.png"}
                         alt={"QueensLogo_white"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/samsung-logo.png"}
                         alt={"samsung-logo"}></img>
                </div>
                <div className={styles.itemPartners}>
                    <img className={styles.imagePartners} src={"business_partners/sodexo-logo.png"}
                         alt={"sodexo-logo"}></img>
                </div>
            </div>
        </section>
    );
}