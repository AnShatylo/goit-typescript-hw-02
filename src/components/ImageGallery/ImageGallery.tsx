import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { FC } from 'react';
import { ImageGalleryProps } from '../App/App.types';

 const ImageGallery: FC<ImageGalleryProps> = ({items, modalOpen}) => {
  return (
    <ul className={css.galleryList}>
      {items.map(item => (
        <li key={item.id} onClick={() => modalOpen(item)}>
          <ImageCard src={item.urls.small} alt={item.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;