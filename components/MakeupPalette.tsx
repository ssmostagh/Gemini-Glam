
import React, { useState } from 'react';
import { LIPSTICK_COLORS, EYESHADOW_COLORS, BLUSH_COLORS } from '../constants.ts';
import type { MakeupSelection, MakeupOptions, Color } from '../types.ts';
import { ColorSwatch } from './ColorSwatch.tsx';
import { XCircleIcon } from './icons.tsx';

interface MakeupPaletteProps {
  onMakeupChange: (selection: MakeupSelection) => void;
  onClearCategory: (category: keyof MakeupOptions) => void;
  selectedOptions: MakeupOptions;
}

type Category = keyof MakeupOptions;

const CATEGORIES: { id: Category; name: string; colors: Color[] }[] = [
  { id: 'lipstick', name: 'Lipstick', colors: LIPSTICK_COLORS },
  { id: 'eyeshadow', name: 'Eyeshadow', colors: EYESHADOW_COLORS },
  { id: 'blush', name: 'Blush', colors: BLUSH_COLORS },
];

export const MakeupPalette: React.FC<MakeupPaletteProps> = ({ onMakeupChange, onClearCategory, selectedOptions }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('lipstick');

  return (
    <div className="space-y-6">
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

      <div>
        {CATEGORIES.map(cat => (
          <div key={cat.id} className={activeCategory === cat.id ? 'block' : 'hidden'}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg text-gray-800">{cat.name} Shades</h3>
                {selectedOptions[cat.id] && (
                    <button 
                        onClick={() => onClearCategory(cat.id)}
                        className="text-xs text-gray-500 hover:text-red-600 flex items-center gap-1 transition-colors"
                        aria-label={`Clear ${cat.name} selection`}
                    >
                        <XCircleIcon className="w-4 h-4" />
                        Clear
                    </button>
                )}
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-3">
              {cat.colors.map(color => (
                <ColorSwatch
                  key={color.name}
                  color={color}
                  isSelected={selectedOptions[cat.id]?.hex === color.hex}
                  onClick={() => onMakeupChange({ category: cat.id, color })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
