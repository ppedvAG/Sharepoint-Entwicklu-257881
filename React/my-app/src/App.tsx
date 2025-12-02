import React, { useState, useEffect } from 'react';
import { ToDoList } from './ToDoList';
import { Blog, BlogPost } from './Blog';
import logo from './logo.svg';
import './App.css';

export default function App() {
  // --- HOOK: useState ---
  // Wir Starten mit 3 Aufgaben
  // Daten für TodoList
  const [tasks, setTasks] = useState<string[]>([
    "React lernen",
    "Kaffe trinken",
    "TypeScript lernen"
  ]);

  // Daten für den Blog 
  const myPosts: BlogPost[] = [
    { id: 1, title: "Hallo Welt", content: "Das ist mein erster Blog Post" },
    { id: 2, title: "Reakt Hooks", content: "useState ist super mächtig" }
  ]

  // --- HOOK: useEffect ---
  // Führe den Code aus, JEDES mal wenn sich 'tasks' ändert
  useEffect(() => {
    console.log("Die ToDo-Liste hat sich geändert! Neue Länge: ", tasks.length);
  }, [tasks]) // [tasks] ist das Dependency Array

  // Funktion für den Button-Klick
  const changeList = () => {
    const newTasks = ["Schlafen", "Essen", "Code üben"];
    setTasks(newTasks); // Dies löst ein Re-Render aus und somit auch den useEffect
  }

  return (
    <div style={{ padding: '20px' }}>

      {/* --- Bereich: ToDo Liste --- */}
      {/* "Meine Aufgaben" werden als "children" übergeben */}
      <ToDoList items={tasks}>
        Meine Aufgaben
      </ToDoList>

      <button onClick={changeList} style={{ marginTop: '10px' }}>
        Liste ändern
      </button>

      <hr style={{ margin: '40px 0' }} />

      {/* --- Bereich: Blog --- */}

      <Blog posts={myPosts} />
    </div>
  );
}

