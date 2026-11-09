import manifest from "./image-manifest.json";
const galleryOpening = [
  "home-2",
  "wedding-0369",
  "reception-0144",
  "reception-0153",
  "reception-0317",
  "reception-0147",
  "wedding-0375",
  "reception-0331",
  "wedding-0466",
  "reception-0318",
  "reception-0155",
  "wedding-0368",
  "reception-0314",
  "wedding-0374",
  "reception-0333",
  "reception-0145",
  "home-1",
  "reception-0158",
];
const opening = galleryOpening.map((slug) =>
  manifest.find((photo) => photo.src === `/images/${slug}.webp`)!,
);
const remaining = manifest.filter((photo) => !opening.includes(photo));
// Alternate the remaining angles, so adjacent source filenames do not become adjacent tiles.
const interleaved = remaining
  .flatMap((photo, index) => (index % 2 === 0 ? [photo] : []))
  .concat(remaining.filter((_, index) => index % 2 !== 0));
export const photos = [...opening, ...interleaved].map((photo) => ({
  ...photo,
  category: photo.file.startsWith("Wedding") ? "Ceremony" : "Reception",
  label: photo.file.startsWith("Wedding")
    ? "Ceremony florals & details"
    : "Reception design & details",
}));
export const featured = [
  {
    src: "/images/home-2.webp",
    label: "A floral-filled reception",
    alt: "Blush and ivory floral arches framing a gold reception sofa",
  },
  {
    src: "/images/wedding-0379.webp",
    label: "An entrance to remember",
    alt: "White floral arrangements lining a candlelit church aisle",
  },
  {
    src: "/images/reception-0326.webp",
    label: "Beauty in every detail",
    alt: "Pink and cream floral centerpiece on an elegantly set guest table",
  },
  {
    src: "/images/reception-0154.webp",
    label: "A sweeter celebration",
    alt: "Tiered wedding cake decorated with cascading white roses",
  },
  {
    src: "/images/wedding-0371.webp",
    label: "A place to say I do",
    alt: "White floral wedding arch against a warm wood backdrop",
  },
  {
    src: "/images/reception-0142.webp",
    label: "An evening in bloom",
    alt: "Candlelit reception tables with gold chairs and pink floral centerpieces",
  },
];
