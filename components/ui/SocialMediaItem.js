import Link from "next/link";
import styles from "@/components/ui/SocialMediaItem.module.css";

export default function SocialMediaItem({url, title, icon}) {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <img src={icon} alt="logo"/>
            </div>
            <Link href={url}>{title}</Link>
        </div>
    )
}