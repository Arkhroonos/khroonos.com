import { useState } from 'react';
import styles from './gallery.component.module.scss';

interface GalleryProps {
  images: string[];
  projectName: string;
}

export function GalleryComponent({ images, projectName }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]); // par défaut, 1ère image
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => setIsFullscreen(true);
  const closeFullscreen = () => setIsFullscreen(false);

  return (
    <div className={styles['gallery-wrapper']}>
      <div className={styles['main-image-wrapper']}>
        <img
          src={selectedImage}
          alt={`${projectName} main`}
          className={styles['main-image']}
          onClick={openFullscreen}
        />
      </div>

      <div className={styles['thumbnails']}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${projectName} thumbnail ${index + 1}`}
            className={`${styles['thumbnail']} ${selectedImage === image ? styles['active'] : ''}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {isFullscreen && (
        <div className={styles['overlay']} onClick={closeFullscreen}>
          <img
            src={selectedImage}
            alt="Fullscreen"
            className={styles['overlay-image']}
            onClick={(e) => e.stopPropagation()} // évite la fermeture en cliquant sur l'image
          />
          <button className={styles['close-button']} onClick={closeFullscreen}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryComponent;
