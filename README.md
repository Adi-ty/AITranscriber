# AI Transcriber

AI Transcriber is a web application built with Next.js and Stitches that provides a simple Hindi transcription service. It leverages OpenAI API to get Hindi Transcription from YouTube videos.

## Features

-   Download audio from YouTube videos using yt-dlp.
-   Transcribe audio to text using the OpenAI Whisper 1 model.
-   Translate transcripts into Hindi using OpenAI API.
-   Easy-to-use API routes for downloading audio, transcription, and translation.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js installed.
-   An OpenAI API key (for transcription and translation).

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Adi-ty/AITranscriber.git
    cd AITranscriber
    ```

2. Install the dependencies:

    ```bash
    pnpm install
    ```

3. Run the Application

    ```bash
    pnpm run dev
    ```

    _Note: You need to add OPENAI_API_KEY into your environment, and the application will use it when neccessary._
