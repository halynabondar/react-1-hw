"use client"

import {usePathname} from 'next/navigation';
import styles from './Footer.module.css';
import Link from 'next/link'
import SocialMediaItem from "@/components/ui/SocialMediaItem";

export const Footer = () => {
    const path = usePathname().split('?')[0];
    return (
        <footer className={path !== "/" ? styles.footer : styles.hidden}>
            <div className={styles.footerDescription}>
                <h3>Galactica</h3>
                <p>Explore the universe and beyond. Your journey to the stars starts here.</p>
                <p>&copy; 2024 Galactica. All rights reserved.</p>
            </div>
            <div className={styles.pages}>
                <h3>Pages</h3>
                <ul>
                    <li className={styles.listItem}><Link href={"/"}>Home</Link></li>
                    <li className={styles.listItem}><Link href="/about_us">About Us</Link></li>
                    <li className={styles.listItem}><Link href="/destination">Destination</Link></li>
                    <li className={styles.listItem}><Link href="/nasa_collaboration">NASA Collaboration</Link></li>
                </ul>
            </div>
            <div className={styles.footerLinks}>
                <h3>Follow us</h3>
                <ul className={styles.footerList}>
                    <SocialMediaItem url={"https://facebook.com"} title={"Facebook"}
                                     icon={"socialmedia/facebook_icon.png"}/>
                    <SocialMediaItem url={"https://linkedin.com"} title={"LinkedIn"}
                                     icon={"socialmedia/linkedin_icon.png"}/>
                    <SocialMediaItem url={"https://instagram.com"} title={"Instagram"}
                                     icon={"socialmedia/instagram_icon.png"}/>
                    <SocialMediaItem url={"https://tiktok.com"} title={"Tiktok"}
                                     icon={"socialmedia/tiktok_icon.png"}/>
                    <SocialMediaItem url={"https://google.com"} title={"On the streets at night"}
                                     icon={"socialmedia/google_icon.png"}/>
                </ul>
            </div>
        </footer>
    );
}