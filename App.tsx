
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { ImageUploader } from './components/ImageUploader.tsx';
import { MakeupPalette } from './components/MakeupPalette.tsx';
import { applyMakeup } from './hooks/useGeminiMakeup.ts';
import type { MakeupOptions, MakeupSelection } from './types.ts';
import { LoadingIcon, SparklesIcon, ArrowUturnLeftIcon } from './components/icons.tsx';

const App: React.FC = () => {
  const [makeupOptions, setMakeupOptions] = useState<MakeupOptions>({
    lipstick: null,
    eyeshadow: null,
    blush: null,
  });
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitialMount = useRef(true);

  const getLuminance = (hex: string) => {
    const r = parseInt(hex.substring(1, 3), 16) / 255;
    const g = parseInt(hex.substring(3, 5), 16) / 255;
    const b = parseInt(hex.substring(5, 7), 16) / 255;
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const generatePrompt = useCallback((): string => {
    const parts: string[] = [];
    if (makeupOptions.lipstick) {
      parts.push(`apply ${makeupOptions.lipstick.name} lipstick (hex color: ${makeupOptions.lipstick.hex})`);
    }
    if (makeupOptions.eyeshadow) {
      const luminance = getLuminance(makeupOptions.eyeshadow.hex);
      const isDark = luminance < 0.5; // Threshold for dark colors

      if (isDark) {
        parts.push(`apply a VERY sheer, highly transparent wash of ${makeupOptions.eyeshadow.name} eyeshadow (hex: ${makeupOptions.eyeshadow.hex}) on the mobile eyelid. It must be faint and subtle, avoiding high contrast`);
      } else {
        parts.push(`apply a soft, evenly blended ${makeupOptions.eyeshadow.name} eyeshadow on the mobile eyelid (hex: ${makeupOptions.eyeshadow.hex}). The color should be clearly visible but remain natural`);
      }
    }
    if (makeupOptions.blush) {
      parts.push(`apply ${makeupOptions.blush.name} blush (hex: ${makeupOptions.blush.hex}) to the apples of the cheeks, blending upwards towards the temples. The finish should be soft, diffuse, and mimic a natural flush`);
    }

    if (parts.length === 0) {
      return "A photorealistic portrait of a person. Subtly enhance the facial features, smooth the skin, and brighten the eyes for a natural look.";
    }

    return `A photorealistic portrait of a person. ${parts.join(' and ')}. The makeup should look natural and realistic, with the color faithfully representing the provided hex code under the photo's lighting conditions. CRITICAL: Do NOT alter the subject's facial features, eye shape, or eye openness. Apply the makeup strictly on top of the existing features without changing their geometry or expression.`;
  }, [makeupOptions]);

  const handleImageUpload = (base64Image: string) => {
    setOriginalImage(base64Image);
    setProcessedImage(null);
    setError(null);
    setMakeupOptions({ lipstick: null, eyeshadow: null, blush: null });
  };

  const handleApplyMakeup = useCallback(async () => {
    console.log('handleApplyMakeup called', { originalImage: !!originalImage, makeupOptions });
    if (!originalImage) {
      console.log('No original image, skipping API call');
      return;
    }

    const isAnyMakeupSelected = Object.values(makeupOptions).some(o => o !== null);

    if (!isAnyMakeupSelected) {
      console.log('No makeup selected, clearing processed image');
      setProcessedImage(null); // Revert to original image by clearing processed one
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const prompt = generatePrompt();
      console.log('Generating content with prompt:', prompt);
      const result = await applyMakeup(originalImage, prompt);
      console.log('API Result received:', !!result);
      if (result) {
        setProcessedImage(result);
      } else {
        setError('The AI could not process this image. Please try another one.');
        setProcessedImage(null); // Revert to original on failure
      }
    } catch (e) {
      console.error('Error in handleApplyMakeup:', e);
      const errorMessage = e instanceof Error ? e.message : 'Failed to apply makeup. Please try again.';
      setError(errorMessage);
      setProcessedImage(null); // Revert to original on error
    } finally {
      setIsLoading(false);
    }
  }, [originalImage, makeupOptions, generatePrompt]);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log('Initial mount, skipping effect');
      isInitialMount.current = false;
      return;
    }

    console.log('Effect triggered by makeupOptions or originalImage change');
    // Debounce the API call to avoid rapid-fire requests if user clicks colors quickly
    const handler = setTimeout(() => {
      if (originalImage) {
        handleApplyMakeup();
      } else {
        console.log('Effect: No original image, skipping debounce call');
      }
    }, 500); // 500ms debounce

    return () => {
      clearTimeout(handler);
    };
  }, [makeupOptions, originalImage, handleApplyMakeup]);

  const handleMakeupChange = (selection: MakeupSelection) => {
    console.log('handleMakeupChange:', selection);
    setMakeupOptions(prev => ({ ...prev, [selection.category]: selection.color }));
  };

  const handleClearCategory = (category: keyof MakeupOptions) => {
    setMakeupOptions(prev => ({ ...prev, [category]: null }));
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
    setMakeupOptions({ lipstick: null, eyeshadow: null, blush: null });
    isInitialMount.current = true;
  };

  const displayImage = processedImage || originalImage;

  return (
    <div className="min-h-screen bg-brand-secondary text-brand-primary flex flex-col lg:flex-row">
      <main className="flex-1 flex flex-col items-center justify-center p-4 lg:p-8 relative">
        <div className="w-full max-w-3xl mx-auto aspect-[3/4] relative rounded-2xl shadow-2xl bg-white overflow-hidden flex items-center justify-center">
          {!originalImage ? (
            <ImageUploader onImageUpload={handleImageUpload} />
          ) : (
            <>
              <img
                src={displayImage!}
                alt={processedImage ? "Virtual Makeup Applied" : "Original Upload"}
                className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
                aria-live="polite"
              />
              {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 animate-shimmer">
                  <div className="text-center text-white">
                    <LoadingIcon className="w-12 h-12 mx-auto" />
                    <p className="mt-2 font-semibold">Applying makeup...</p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        {error && <div className="absolute bottom-4 bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg animate-fadeIn">{error}</div>}
        {originalImage && (
          <button
            onClick={handleReset}
            className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm text-brand-primary px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all text-sm font-medium z-10 flex items-center gap-2"
            aria-label="Upload another image"
          >
            <ArrowUturnLeftIcon className="w-4 h-4" />
            Try Another Image
          </button>
        )}
      </main>
      <aside className="w-full lg:w-96 bg-white p-6 lg:p-8 shadow-lg lg:shadow-none lg:min-h-screen overflow-y-auto flex flex-col">
        <header className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-brand-primary">Gemini Glam</h1>
          <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
            <SparklesIcon className="w-4 h-4 text-brand-accent" />
            AI-Powered Virtual Try-On
          </p>
        </header>
        <div className="flex-grow">
          <MakeupPalette
            onMakeupChange={handleMakeupChange}
            onClearCategory={handleClearCategory}
            selectedOptions={makeupOptions}
          />
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 px-4">
            {originalImage ? 'Select a shade to see the magic happen!' : 'Upload an image to get started.'}
          </p>
        </div>
      </aside>
    </div>
  );
};

export default App;
