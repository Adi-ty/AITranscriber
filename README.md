# AI Transcriber

AI Transcriber is a web application built with Next.js and Stitches that provides a simple Hindi transcription service. It leverages powerful AI and tools to transcribe audio from YouTube videos, generate transcripts, and translate them into Hindi.

## Features

-   Download audio from YouTube videos using yt-dlp.
-   Transcribe audio to text using the OpenAI Whisper 1 model.
-   Translate transcripts into Hindi using OpenAI API.
-   Easy-to-use API routes for downloading audio, transcription, and translation.
-   Secure API key management using environment variables.

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

## Usage

### API Routes

-   `/api/audio?videoId={videoId}`: Downloads audio from a YouTube video.
-   `/api/transcript?videoId={videoId}`: Generates a transcript from the audio.
-   `/api/translate`: Translates the transcript into Hindi.

### Example Usage

# Download audio from a YouTube video

`curl -v 'http://localhost:3000/api/audio?videoId={videoId}'`

# Generate a transcript

`curl -v POST 'http://localhost:3000/api/transcript?videoId={videoId}'`

# Translate transcript to Hindi

`curl -v -X POST 'http://localhost:3000/api/translate' -H 'Content-Type: text/plain; charset=utf-8' --data-binary @tmp/test.srt`
