"use client";

import VideoPlaylist from "./components/VideoPlaylist";

export default function App() {
  return (
    <div className="app">
      <header role="banner">
        <span>Legendary banner</span>
      </header>
      <main>
        <h2>Featured Playlist</h2>
        <VideoPlaylist />
      </main>
      <footer>
        <div className="links">
          <h3>Credits</h3>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/channel/UCYHaIph93Dk_mGmozCCXdrg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salt-N-Pepa
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCpRUSBcRWUQZIj3_jWF19Dg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beastie Boys
              </a>
            </li>
          </ul>
        </div>
        <div className="links">
          <h4>Resources</h4>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            React.dev
          </a>
        </div>
      </footer>
    </div>
  );
}
