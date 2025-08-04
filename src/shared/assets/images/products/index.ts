import Bun from './bun.jpg';
import NoPhoto from './no_photo.png';

export const ProductImage = {
    bun: Bun,
    noPhoto: NoPhoto
} as const;

export type ProductImageKey = keyof typeof ProductImage;
