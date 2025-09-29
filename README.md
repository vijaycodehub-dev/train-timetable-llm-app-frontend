

<div align="center">
	<h1>Mumbai Local Train Inquiry (Frontend)</h1>
	<p><b>A modern React app to ask questions about Mumbai local train timings, powered by an LLM backend.</b></p>
</div>

>A modern React app for asking questions about Mumbai local train timings, with a clean UI and easy integration to an LLM-powered backend.

## Features

- Ask natural language questions about Mumbai local train timings
- Clean, responsive UI with header and footer
- Instant answers powered by a backend API (LLM or custom logic)

## Demo

![App Screenshot](public/logo192.png)

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm (comes with Node.js)
- Backend API running at `http://localhost:8000/ask-train-time` (see below)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vijaycodehub-dev/train-timetable-llm-app-frontend.git
cd train-timetable-llm-app-frontend
npm install
```

### Running the App

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Usage

1. Enter your question about Mumbai local train timings in the input box (e.g., "When is the next train from Dadar to Thane?").
2. Click **Ask**. The app will query the backend and display the answer.

## Backend API

This frontend expects a backend API endpoint at `POST http://localhost:8000/ask-train-time` that accepts:

```json
{ "question": "<your question>" }
```
and returns:
```json
{ "answer": "<answer string>" }
```

You can use any backend (Python FastAPI, Flask, Node.js, etc.) that implements this contract. For LLM integration, connect your backend to an LLM or database as needed.

## Project Structure

- `src/TrainTimeApp.jsx` — Main React component
- `public/` — Static assets and HTML
- `package.json` — Project dependencies and scripts


