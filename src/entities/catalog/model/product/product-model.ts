import { createStore } from 'effector';
import { products } from '../product/constants';

export const $products = createStore(products);
