
import React, { useState, useCallback } from 'react';
import { UploadIcon } from './icons.tsx';

interface ImageUploaderProps {
  onImageUpload: (base64Image: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageUpload(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, [handleFileChange]);

  return (
    <div 
      className={`relative w-full h-full border-4 border-dashed rounded-2xl flex flex-col items-center justify-center text-center p-8 transition-colors duration-300 ${isDragging ? 'border-brand-accent bg-brand-accent/10' : 'border-gray-300'}`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <UploadIcon className="w-16 h-16 mb-4 text-gray-400" />
      <h2 className="text-xl font-semibold text-brand-primary">Drag & Drop your photo</h2>
      <p className="text-gray-500 mt-2">or</p>
      <label htmlFor="file-upload" className="mt-4 px-6 py-2 bg-brand-primary text-white rounded-full font-semibold cursor-pointer hover:bg-opacity-90 transition-colors">
        Browse Files
      </label>
      <input
        id="file-upload"
        type="file"
        className="hidden"
        accept="image/png, image/jpeg, image/webp"
        onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
      />
      <p className="text-xs text-gray-400 mt-6">Supports: PNG, JPG, WEBP</p>
    </div>
  );
};
