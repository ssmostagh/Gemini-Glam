
export interface Color {
  name: string;
  hex: string;
}

export type Finish = 'matte' | 'shimmer' | 'satin' | 'gloss' | 'sheer' | 'metallic' | 'holographic';

export interface Shade extends Color {
  id: string;
  finish?: Finish;
}

export interface Product {
  id: string;
  name: string;
  type: 'lipstick' | 'blush' | 'eyeshadow';
  description?: string;
  shades: Shade[];
}

export interface Brand {
  id: string;
  name: string;
  description?: string;
  products: Product[];
}

export interface MakeupOptions {
  lipstick: Shade | null;
  eyeshadow: Shade | null;
  blush: Shade | null;
}

export interface MakeupSelection {
  category: keyof MakeupOptions;
  shade: Shade;
  product?: Product;
}
