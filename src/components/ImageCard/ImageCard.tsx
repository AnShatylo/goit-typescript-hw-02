import css from './ImageCard.module.css';
import { FC } from 'react';
import { ImageCardProps } from '../App/App.types';


const ImageCard: FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className={css.imageCard}>
      <img src={src} alt={alt} className={css.image} />
    </div>
  );
}


export default ImageCard;