# Stop the Clock

A fun and challenging React game where you test your sense of time! Try to stop the timer as close as possible to the target time for each challenge. Built with React and Vite.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Gameplay](#gameplay)
- [Project Structure](#project-structure)
- [Styling](#styling)
- [License](#license)

---

## Features

- Multiple timer challenges with increasing difficulty.
- Enter your player name for a personalized experience.
- Real-time feedback and scoring based on your timing accuracy.
- Modern, responsive UI with smooth animations.
- Built using React 19 and Vite for fast development and hot reloading.

---

## Demo

![Stop the Clock Screenshot](public/vite.svg)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd 01-starting-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Available Scripts

In the project directory, you can run:

- **Start the development server:**

  ```bash
  npm run dev
  ```

  Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

- **Build for production:**

  ```bash
  npm run build
  ```

- **Preview the production build:**

  ```bash
  npm run preview
  ```

- **Lint the code:**

  ```bash
  npm run lint
  ```

---

## Gameplay

1. **Set Your Name:**  
   Enter your name in the input field at the top and click "Set Name" for a personalized greeting.

2. **Choose a Challenge:**  
   There are four timer challenges:
   - Easy (1 second)
   - Not Easy (5 seconds)
   - Getting Tough (10 seconds)
   - Pros Only (15 seconds)

3. **Start the Timer:**  
   Click "Start Challenge" to begin the countdown. Try to estimate when the target time has passed.

4. **Stop the Timer:**  
   Click "Stop Challenge" as close as possible to the target time.  
   - If you stop too late, you lose the challenge.
   - Your score is based on how close you are to the target time.

5. **View Results:**  
   A modal will show your score, the target time, and how much time was left when you stopped.

6. **Try Again:**  
   Close the modal to reset and try again!

---

## Project Structure

```
01-starting-project/
  ├── index.html
  ├── package.json
  ├── public/
  │   └── vite.svg
  ├── src/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── index.css
  │   ├── assets/
  │   │   └── react.svg
  │   └── components/
  │       ├── Player.jsx
  │       ├── TimerChallenge.jsx
  │       └── ResultModal.jsx
  └── vite.config.js
```

- **App.jsx:** Main app component, renders player input and all timer challenges.
- **Player.jsx:** Handles player name input and greeting.
- **TimerChallenge.jsx:** Core game logic for each timer challenge.
- **ResultModal.jsx:** Displays results and score using a React portal.
- **index.css:** Custom styles for a modern, responsive look.

---

## Styling

- Uses Google Fonts: Quicksand and Handjet.
- Responsive layout with flexbox.
- Animated feedback for active timers and result modals.
- Custom color palette for a vibrant, game-like feel.

---

## License

This project is for educational and demonstration purposes.

---

**Enjoy playing "Stop the Clock" and challenge your sense of time!**

--- 