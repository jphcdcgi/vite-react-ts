"use client";

interface Props {
  title: string;
  src: string;
  width: number;
  height: number;
}

export default function VideoPlayer({ title, src, width, height }: Props) {
  return (
    <div className="card">
      <h3>
        <span>{title}</span>
      </h3>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
