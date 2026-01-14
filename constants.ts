import { Brand } from './types';

export const BRANDS: Brand[] = [
  {
    id: 'luxe-beauty',
    name: 'LuxeBeauty',
    description: 'High-end, classic elegance with satin finishes.',
    products: [
      // Lipstick
      {
        id: 'velvet-matte-lip',
        brandId: 'luxe-beauty',
        name: 'Velvet Matte Lipstick',
        type: 'lipstick',
        shades: [
          { id: 'classic-red', name: 'Classic Red', hex: '#BE0000', finish: 'matte' },
          { id: 'deep-rose', name: 'Deep Rose', hex: '#C25E6A', finish: 'matte' },
          { id: 'soft-mauve', name: 'Soft Mauve', hex: '#B87B8D', finish: 'matte' },
          { id: 'rich-bordeaux', name: 'Rich Bordeaux', hex: '#800020', finish: 'matte' },
        ]
      },
      {
        id: 'rich-satin-lip',
        brandId: 'luxe-beauty',
        name: 'Rich Satin Lipstick',
        type: 'lipstick',
        shades: [
          { id: 'nude-beige', name: 'Nude Beige', hex: '#D1A392', finish: 'satin' },
          { id: 'coral-pink', name: 'Coral Pink', hex: '#F88379', finish: 'satin' },
          { id: 'spiced-berry', name: 'Spiced Berry', hex: '#901230', finish: 'satin' },
        ]
      },

      // Blush
      {
        id: 'satin-glow-blush',
        brandId: 'luxe-beauty',
        name: 'Satin Glow Blush',
        type: 'blush',
        shades: [
          { id: 'petal-pink', name: 'Petal Pink', hex: '#E8A3B6', finish: 'satin' },
          { id: 'coral-mist', name: 'Coral Mist', hex: '#FF8A80', finish: 'satin' },
          { id: 'luminous-peach', name: 'Luminous Peach', hex: '#FFCBA4', finish: 'satin' },
        ]
      },
      {
        id: 'cashmere-matte-blush',
        brandId: 'luxe-beauty',
        name: 'Cashmere Matte Blush',
        type: 'blush',
        shades: [
          { id: 'dusty-rose', name: 'Dusty Rose', hex: '#DCAE96', finish: 'matte' },
          { id: 'soft-apricot', name: 'Soft Apricot', hex: '#FBCEB1', finish: 'matte' },
        ]
      },

      // Eyeshadow
      {
        id: 'silk-shadow',
        brandId: 'luxe-beauty',
        name: 'Silk Eyeshadow Quad',
        type: 'eyeshadow',
        shades: [
          { id: 'champagne', name: 'Champagne', hex: '#FAD6A5', finish: 'shimmer' },
          { id: 'bronze-age', name: 'Bronze Age', hex: '#CD7F32', finish: 'shimmer' },
          { id: 'soft-gold', name: 'Soft Gold', hex: '#C5B358', finish: 'shimmer' },
        ]
      },
      {
        id: 'matte-essentials-eye',
        brandId: 'luxe-beauty',
        name: 'Matte Essentials Eye',
        type: 'eyeshadow',
        shades: [
          { id: 'taupe', name: 'Taupe', hex: '#483C32', finish: 'matte' },
          { id: 'espresso', name: 'Espresso', hex: '#3B2F2F', finish: 'matte' },
          { id: 'slate', name: 'Slate', hex: '#708090', finish: 'matte' },
        ]
      }
    ] as any
  },
  {
    id: 'urban-edge',
    name: 'UrbanEdge',
    description: 'Bold colors and high-impact finishes for the modern trendsetter.',
    products: [
      // Lipstick
      {
        id: 'vinyl-gloss',
        brandId: 'urban-edge',
        name: 'Vinyl Gloss',
        type: 'lipstick',
        shades: [
          { id: 'electric-cherry', name: 'Electric Cherry', hex: '#D70040', finish: 'gloss' },
          { id: 'midnight-plum', name: 'Midnight Plum', hex: '#682D46', finish: 'gloss' },
          { id: 'neon-coral', name: 'Neon Coral', hex: '#FF4F00', finish: 'gloss' },
          { id: 'hot-pink', name: 'Hot Pink', hex: '#FF69B4', finish: 'gloss' },
        ]
      },
      {
        id: 'cyber-matte-lip',
        brandId: 'urban-edge',
        name: 'Cyber Matte Liquid Lip',
        type: 'lipstick',
        shades: [
          { id: 'vamp-black', name: 'Vamp Black', hex: '#0F0F0F', finish: 'matte' },
          { id: 'deep-violet', name: 'Deep Violet', hex: '#4B0082', finish: 'matte' },
          { id: 'burnt-sienna', name: 'Burnt Sienna', hex: '#E97451', finish: 'matte' },
        ]
      },

      // Eyeshadow
      {
        id: 'power-pigment-eye',
        brandId: 'urban-edge',
        name: 'Power Pigment Eye',
        type: 'eyeshadow',
        shades: [
          { id: 'cobalt-blue', name: 'Cobalt Blue', hex: '#0047AB', finish: 'matte' },
          { id: 'charcoal-smoke', name: 'Charcoal Smoke', hex: '#36454F', finish: 'matte' },
          { id: 'electric-lime', name: 'Electric Lime', hex: '#CCFF00', finish: 'matte' },
        ]
      },
      {
        id: 'holographic-eye',
        brandId: 'urban-edge',
        name: 'Holographic Eye Topper',
        type: 'eyeshadow',
        shades: [
          { id: 'starlight-silver', name: 'Starlight Silver', hex: '#C0C0C0', finish: 'metallic' },
          { id: 'galaxy-purple', name: 'Galaxy Purple', hex: '#663399', finish: 'metallic' },
          { id: 'emerald-city', name: 'Emerald City', hex: '#50C878', finish: 'metallic' },
        ]
      },

      // Blush
      {
        id: 'sculpt-blush',
        brandId: 'urban-edge',
        name: 'Sculpt & Define Blush',
        type: 'blush',
        shades: [
          { id: 'berry-crush', name: 'Berry Crush', hex: '#8B0000', finish: 'matte' },
          { id: 'burnt-orange', name: 'Burnt Orange', hex: '#CC5500', finish: 'matte' },
        ]
      },
      {
        id: 'neon-flush-blush',
        brandId: 'urban-edge',
        name: 'Neon Flush Blush',
        type: 'blush',
        shades: [
          { id: 'shocking-pink', name: 'Shocking Pink', hex: '#FC0FC0', finish: 'sheer' },
          { id: 'electric-violet', name: 'Electric Violet', hex: '#8F00FF', finish: 'sheer' },
        ]
      }
    ] as any
  },
  {
    id: 'natural-glow',
    name: 'NaturalGlow',
    description: 'Clean beauty focusing on enhancing your natural features.',
    products: [
      // Lipstick
      {
        id: 'sheer-tint-lip',
        brandId: 'natural-glow',
        name: 'Sheer Lip Tint',
        type: 'lipstick',
        shades: [
          { id: 'barely-there', name: 'Barely There', hex: '#F4C2C2', finish: 'sheer' },
          { id: 'honey-nude', name: 'Honey Nude', hex: '#C68E17', finish: 'sheer' },
          { id: 'rosy-tint', name: 'Rosy Tint', hex: '#E29CD2', finish: 'sheer' },
        ]
      },
      {
        id: 'lip-oil',
        brandId: 'natural-glow',
        name: 'Hydrating Lip Oil',
        type: 'lipstick',
        shades: [
          { id: 'clear-gloss', name: 'Clear Glow', hex: '#F0F0F0', finish: 'gloss' },
          { id: 'peach-oil', name: 'Peach Oil', hex: '#FFE5B4', finish: 'gloss' },
        ]
      },

      // Blush
      {
        id: 'dewy-cheek',
        brandId: 'natural-glow',
        name: 'Dewy Cheek Stain',
        type: 'blush',
        shades: [
          { id: 'rosy-flush', name: 'Rosy Flush', hex: '#E4717A', finish: 'sheer' },
          { id: 'sun-kissed', name: 'Sun Kissed', hex: '#E3BC9A', finish: 'sheer' },
        ]
      },
      {
        id: 'sun-kissed-flush',
        brandId: 'natural-glow',
        name: 'Sun-Kissed Flush',
        type: 'blush',
        shades: [
          { id: 'warm-sand', name: 'Warm Sand', hex: '#C2B280', finish: 'matte' },
          { id: 'terracotta', name: 'Terracotta', hex: '#E2725B', finish: 'matte' },
        ]
      },

      // Eyeshadow
      {
        id: 'earth-tones-eye',
        brandId: 'natural-glow',
        name: 'Earth Tones Eye',
        type: 'eyeshadow',
        shades: [
          { id: 'moss-green', name: 'Moss Green', hex: '#8A9A5B', finish: 'satin' },
          { id: 'clay-red', name: 'Clay Red', hex: '#A0522D', finish: 'satin' },
          { id: 'stone-grey', name: 'Stone Grey', hex: '#929292', finish: 'satin' },
        ]
      },
      {
        id: 'cream-shadow-stick',
        brandId: 'natural-glow',
        name: 'Cream Shadow Stick',
        type: 'eyeshadow',
        shades: [
          { id: 'pearl-white', name: 'Pearl White', hex: '#FDEEF4', finish: 'shimmer' },
          { id: 'soft-copper', name: 'Soft Copper', hex: '#DA8A67', finish: 'shimmer' },
        ]
      }
    ] as any
  }
];

export const INITIAL_MAKEUP_OPTIONS = {
  lipstick: null,
  eyeshadow: null,
  blush: null,
};
