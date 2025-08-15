# AI-Powered Notes App

A simple yet powerful Notes application that lets you:
- Add notes with tags
- Search notes by title or tags (persistent search state via localStorage)
- Generate AI summaries for notes using GPT-3.5 via OpenRouter API
- Regenerate summaries with varied phrasing
- Copy summaries to clipboard with smooth visual feedback
- Delete notes with one click
- Fully responsive Bootstrap-based UI

## 🚀 Demo
Live site: [AI-Powered Notes App](https://ai-notes-app-modularized.netlify.app/)

## 📦 Features
- **Tag System** — Add multiple tags per note and view them as badges
- **Search with Persistence** — Search results remain after page reload
- **AI Summarization** — One-click summaries via GPT-3.5 API
- **Regenerate Summary** — Fresh variations with different structure & phrasing
- **Copy to Clipboard** — Quickly copy summaries with visual confirmation
- **LocalStorage Persistence** — Notes, tags, summaries, and search state are saved locally
- **Responsive Design** — Works smoothly on desktop and mobile

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS (Bootstrap 5), JavaScript (Vanilla)
- **AI API:** GPT-3.5 via OpenRouter
- **Storage:** Browser localStorage

## 📂 Project Structure
├── index.html
├── utils.js # Helper functions (escapeHtml, typewriter effect, etc.)
├── storage.js # LocalStorage getters/setters
├── notes.js # Rendering notes and UI actions
├── ai.js # AI summarization logic
└── main.js # App initialization and event listeners


## 🔑 API Key Setup
This app requires a free OpenRouter API key:
1. Go to [OpenRouter.ai](https://openrouter.ai/)
2. Sign up and get your API key
3. In `ai.js`, replace `YOUR_API_KEY` with your key:
```javascript
const API_KEY = "YOUR_API_KEY";



This project is licensed under the MIT License — see the LICENSE file for details
