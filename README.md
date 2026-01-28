# React Flow – Draggable Slides Canvas

This project demonstrates a simple draggable slide canvas built using **React** and **React Flow**.
Slides are represented as draggable nodes that can be freely positioned on the canvas.

---

## Features

- Slides implemented as **React Flow nodes**
- Drag-and-drop positioning inside a canvas
- Slide selection with visual highlight
- Clean, minimal, and intuitive UI
- Custom node component for slide content

---

## Tech Stack

- React
- React Flow
- Vite (for fast development)

---

## Project Structure

src/
 ├─ components/
 │   └─ SlideNode.jsx
 ├─ App.jsx
 ├─ main.jsx
 ├─ index.css

---

## How to Run the Project

### Prerequisites
- Node.js (v16 or above)
- npm

### Steps

1. Clone the repository
   ```bash
   git clone https://github.com/Santhosh-The-Developerr/reactflow-draggable-slides.git
   ```

2. Navigate to the project folder
   ```bash
   cd reactflow-slides
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open the browser and visit
   ```
   http://localhost:5173
   ```

---

## Implementation Overview

- Each slide is a **custom React Flow node**
- `useNodesState` is used to manage node state and dragging behavior
- Selection state is handled automatically by React Flow
- Custom styling is applied based on node selection

---

## Reference

React Flow official tutorial:
https://reactflow.dev/learn/tutorials/slide-shows-with-react-flow

---

## Assignment Requirements Covered

- Draggable slides using React Flow
- Free positioning of slides
- Slide selection with visual distinction
- Clean and readable UI
- Simple and clear React component structure
