import Image from "next/image";
export default function EventImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  preload = false,
  parallax = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  preload?: boolean;
  parallax?: boolean;
}) {
  return (
    <div
      className={`event-image ${className}`}
      data-parallax={parallax ? "" : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
