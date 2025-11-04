"use client";

export default function VideoPlaylist() {
  return (
    <section className="plist-grid">
      <div className="card">
        <h3>
          <span>Salt-N-Pepa - Push It (Official Music Video)</span>
        </h3>
        <iframe
          width="1373"
          height="781"
          src="https://www.youtube.com/embed/vCadcBR95oU?list=RDvCadcBR95oU"
          title="Salt-N-Pepa - Push It (Official Music Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card">
        <h3>
          <span>
            Beastie Boys - (You Gotta) Fight For Your Right (To Party) (Official
            Music Video)
          </span>
        </h3>
        <iframe
          width="1621"
          height="904"
          src="https://www.youtube.com/embed/eBShN8qT4lk?list=RDvCadcBR95oU"
          title="Beastie Boys - (You Gotta) Fight For Your Right (To Party) (Official Music Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
