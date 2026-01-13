
import React from 'react';

export const LoadingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      svg { animation: spin 1s linear infinite; }
    `}</style>
  </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 2.25a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 18a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V21a.75.75 0 0 1 .75-.75ZM5.02 5.02a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0Zm12.92 12.92a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 1 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0ZM2.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm18 0a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H21a.75.75 0 0 1-.75-.75ZM5.02 17.92a.75.75 0 0 1 1.06 0l.01.01a.75.75 0 1 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06Zm12.92-12.92a.75.75 0 0 1 1.06 0l.01.01a.75.75 0 0 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06Z"></path>
    </svg>
);

export const XCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
    </svg>
);

export const ArrowUturnLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
    </svg>
);
