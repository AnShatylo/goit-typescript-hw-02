export interface Photo {
    id: number;
    urls: {
        small: string;
        full: string;
    }
    alt_description?: string;
}

export interface Photos {
  photos: Photo[];
  totalPages: number;
}

export interface ImageCardProps {
    src: string;
    alt: undefined | string;
}

export interface SearchBarProps {
    onSearch: (arg: string) => void;
}

export interface LoadMoreBtnProps {
    loadMore: () => void;
}

export interface ImageModalProps {
    image: Photo;
    isOpen: boolean;
    closeModal: () => void;
}
  
export interface ImageGalleryProps {
    items: Photo[];
    modalOpen: (image: Photo) => void;
  }