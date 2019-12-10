import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

const PhotoCard = ({ id, webformat, largeImage, tags }) => {
  const showLargeImage = e => {
    // console.dir(e.currentTarget.id);
  };
  return (
    <li
      id={id}
      className={styles.ImageGalleryItem}
      key={id}
      onClick={showLargeImage}
    >
      <img
        src={webformat}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default PhotoCard;
