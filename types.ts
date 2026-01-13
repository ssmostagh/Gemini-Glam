
export interface Color {
  name: string;
  hex: string;
}

export interface MakeupOptions {
  lipstick: Color | null;
  eyeshadow: Color | null;
  blush: Color | null;
}

export interface MakeupSelection {
  category: keyof MakeupOptions;
  color: Color;
}
