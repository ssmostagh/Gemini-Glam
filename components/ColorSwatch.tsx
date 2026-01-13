
import React from 'react';
import type { Color } from '../types.ts';

interface ColorSwatchProps {
  color: Color;
  isSelected: boolean;
  onClick: () => void;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, isSelected, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full aspect-square rounded-full transition-transform duration-200 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary ${
        isSelected ? 'ring-2 ring-offset-2 ring-brand-primary' : 'ring-1 ring-gray-300'
      }`}
      style={{ backgroundColor: color.hex }}
      aria-label={`Select ${color.name}`}
      aria-pressed={isSelected}
    >
      <span className="sr-only">{color.name}</span>
    </button>
  );
};
