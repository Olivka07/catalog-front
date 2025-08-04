import { Category, Product } from './types';

type Config = Omit<Product, 'title' | 'category' | 'id'>;

export function createNewProduct(
    title: string,
    category: Category,
    config?: Config
): Product;

export function createNewProduct(
    title: string,
    category: Category,
    config: Config = {}
): Product {
    const id = crypto.randomUUID();
    return { id, title, category, img: config.img ?? 'noPhoto', ...config };
}
