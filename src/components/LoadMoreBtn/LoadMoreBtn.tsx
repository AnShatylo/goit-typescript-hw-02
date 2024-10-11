import css from './LoadMoreBtn.module.css';
import { FC } from 'react';
import { LoadMoreBtnProps } from '../App/App.types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMore }) => {
  return (
    <button className={css.loadMoreBtn} onClick={loadMore}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;