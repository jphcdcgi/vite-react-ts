"use client";

export default function App() {
  return (
    <div className="wrapper">
      <header role="banner">
        <span>Legendary banner</span>
      </header>
      <main>
        <div className="hero">
          <h2>Hellow World!</h2>
        </div>
        <h2>Rapid Development with React and Vite</h2>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
      </main>
      <footer>
        <div>
          <h3>Credits</h3>
          <h4>Executive Producer</h4>
          <p>Aragorn, Son of Isildur</p>
        </div>
        <div>
          <h3>Developer Resources</h3>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React.dev
          </a>
        </div>
      </footer>
    </div>
  );
}
