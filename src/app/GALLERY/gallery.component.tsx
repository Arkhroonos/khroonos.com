import { useState } from 'react';
import styles from './gallery.component.module.scss';

interface GalleryProps {
  images: string[];
  projectName: string;
}

export function GalleryComponent({ images, projectName }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => setSelectedImage(src);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className={styles['gallery-wrapper']}>
      <div className={styles['gallery']}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${projectName} image ${index + 1}`}
            className={styles['gallery-image']}
            onClick={() => openImage(image)}
          />
        ))}
      </div>

      {/* Lightbox overlay */}
      {selectedImage && (
        <div className={styles['overlay']} onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Selected"
            className={styles['overlay-image']}
            onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique sur l'image
          />
          <button className={styles['close-button']} onClick={closeImage}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
