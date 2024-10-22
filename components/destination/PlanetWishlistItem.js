import React from 'react';
import styles from "@/components/destination/destination.module.css";

const PlanetWishlistItem = ({name, onRemove, thumbnail}) => {
    const onRemoveConfirmed = () => {
        if (confirm(`Are you sure you want to remove ${name.toUpperCase()} from your wishlist?`)) {
            onRemove();
        }
    };

    return (
        <div className={styles.wishlistItem}>
            <img className={styles.wishlistItemThumbnail} src={thumbnail} alt={name}/>
            <b>{name.toUpperCase()}</b>
            <button onClick={onRemoveConfirmed}>Remove</button>
        </div>
    );
}

export default PlanetWishlistItem;