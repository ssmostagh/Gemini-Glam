# Gemini Glam - Virtual Makeup Try-On

> [!IMPORTANT]
> **DEMO ONLY**: This application is provided for demonstration purposes only and is not intended for production use. It showcases the capabilities of Generative AI for virtual try-on experiences.

Gemini Glam is an AI-powered virtual makeup try-on application built with **React**, **Vite**, and **Google's Gemini 2.5 Flash** model. It allows users to upload a photo and realisticly apply lipstick, eyeshadow, and blush shades while preserving natural facial features and lighting.

## Features

-   **AI-Powered Precision**: Uses Gemini 2.5 Flash Image Preview for high-fidelity makeup application.
-   **Adaptive Color Matching**: Intelligent prompting ensures hex-accurate colors that blend naturally with skin tone and lighting.
-   **Structure Preservation**: Strict constraints maintain the subject's original eye shape and facial geometry.
-   **Cosmetic-Grade Palettes**: Curated selection of realistic lipstick, eyeshadow, and blush shades.
-   **Smart Blending**:
    -   *Lipstick*: Precise color application.
    -   *Eyeshadow*: Adaptive opacity (sheer for dark colors, visible for pastels) to avoid heavy "paint-like" looks.
    -   *Blush*: Natural, diffuse application on the apples of the cheeks.

## Tech Stack

-   **Frontend**: React (TypeScript), Vite
-   **Styling**: Tailwind CSS, Lucide React (Icons)
-   **AI Model**: Google Gemini 2.5 Flash (`gemini-2.5-flash-image-preview`) via `@google/genai` SDK
-   **State Management**: React Hooks

## Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/ssmostagh/Gemini-Glam.git
    cd gemini-glam
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your Gemini API key (from [Google AI Studio](https://aistudio.google.com/)).
    ```env
    VITE_API_KEY=your_api_key_here
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

5.  **Open the app**:
    Navigate to `http://localhost:5173` in your browser.

## Usage

1.  **Upload a Photo**: Drag & drop or upload a clear portrait photo.
2.  **Select Makeup**: Click on the circular swatches for Lipstick, Eyeshadow, or Blush.
3.  **Apply**: The AI will process the image and apply the selected makeup in real-time.
4.  **Experiment**: Mix and match different shades to find your perfect look.

## License

This project is for demonstration purposes only.
