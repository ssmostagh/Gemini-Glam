import React, { useState } from 'react';
import { BRANDS } from '../constants.ts';
import type { MakeupSelection, MakeupOptions, Brand, Product } from '../types.ts';
import { ColorSwatch } from './ColorSwatch.tsx';
import { XCircleIcon } from './icons.tsx';

interface MakeupPaletteProps {
  onMakeupChange: (selection: MakeupSelection) => void;
  onClearCategory: (category: keyof MakeupOptions) => void;
  selectedOptions: MakeupOptions;
}

type Category = keyof MakeupOptions;

const CATEGORIES: { id: Category; name: string }[] = [
  { id: 'lipstick', name: 'Lipstick' },
  { id: 'eyeshadow', name: 'Eyeshadow' },
  { id: 'blush', name: 'Blush' },
];

export const MakeupPalette: React.FC<MakeupPaletteProps> = ({ onMakeupChange, onClearCategory, selectedOptions }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('lipstick');

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex border-b border-gray-200">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-1 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none ${
              activeCategory === cat.id
                ? 'border-b-2 border-brand-primary text-brand-primary'
                : 'text-gray-500 hover:text-brand-primary'
            }`}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="space-y-8 animate-fadeIn">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
          <h3 className="font-semibold text-lg text-gray-800">{CATEGORIES.find(c => c.id === activeCategory)?.name} Collection</h3>
          {selectedOptions[activeCategory] && (
            <button 
              onClick={() => onClearCategory(activeCategory)}
              className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors"
            >
              <XCircleIcon className="w-4 h-4" />
              Clear {CATEGORIES.find(c => c.id === activeCategory)?.name}
            </button>
          )}
        </div>

        {/* Iterate through all brands */}
        {BRANDS.map(brand => {
          const brandProducts = brand.products.filter(p => p.type === activeCategory);

          if (brandProducts.length === 0) return null;

          return (
            <div key={brand.id} className="space-y-4">
              <div className="flex items-baseline gap-2">
                <h4 className="font-serif text-xl font-bold text-brand-primary">{brand.name}</h4>
              </div>

              <div className="pl-4 border-l-2 border-gray-100 space-y-6">
                {brandProducts.map(product => (
                  <div key={product.id} className="space-y-2">
                    <h5 className="text-sm font-medium text-gray-600 uppercase tracking-wide">{product.name}</h5>
                    <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
                      {product.shades.map(shade => (
                        <ColorSwatch
                          key={shade.id}
                          color={shade}
                          isSelected={selectedOptions[activeCategory]?.hex === shade.hex}
                          onClick={() => onMakeupChange({ category: activeCategory, shade, product })}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
