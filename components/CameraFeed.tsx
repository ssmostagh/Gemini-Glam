
import React, { useRef, useEffect, useCallback } from 'react';

interface CameraFeedProps {
  onCameraReady: () => void;
  onFrame?: (base64Image: string) => void;
  isProcessing: boolean;
}

export const CameraFeed: React.FC<CameraFeedProps> = ({ onCameraReady, onFrame, isProcessing }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRequestRef = useRef<number>();

  const captureFrame = useCallback(() => {
    if (videoRef.current && canvasRef.current && onFrame && !isProcessing) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        // Set canvas dimensions to match video to avoid distortion
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        // Flip the context horizontally to mirror the image
        context.translate(canvas.width, 0);
        context.scale(-1, 1);
        
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Reset the transform to avoid affecting other canvas operations
        context.setTransform(1, 0, 0, 1, 0, 0);

        const base64Image = canvas.toDataURL('image/jpeg', 0.8);
        onFrame(base64Image);
      }
    }
  }, [onFrame, isProcessing]);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user',
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            onCameraReady();
          };
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);
        alert("Could not access the camera. Please check permissions and try again.");
      }
    }
    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onCameraReady]);

  useEffect(() => {
    const loop = () => {
      captureFrame();
      frameRequestRef.current = requestAnimationFrame(loop);
    };

    if (onFrame) {
      frameRequestRef.current = requestAnimationFrame(loop);
    }

    return () => {
      if (frameRequestRef.current) {
        cancelAnimationFrame(frameRequestRef.current);
      }
    };
  }, [captureFrame, onFrame]);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover transform scale-x-[-1]"
        aria-label="Live camera feed of your face"
      ></video>
      <canvas ref={canvasRef} className="hidden" aria-hidden="true"></canvas>
    </>
  );
};
