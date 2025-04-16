export type InputImage = {
  path: string;
  alt: string;
};

export type OutputImage = {
  src: string; // Vite-resolved path
  alt: string;
};

function loadImageObjects(imagesWithAlt: InputImage[]): OutputImage[] {
  const imageModules: Record<string, { default: string }> = import.meta.glob(
    "../assets/*.png",
    { eager: true }
  );
  return imagesWithAlt
    .map(({ path, alt }) => {
      const matchedEntry = Object.entries(imageModules).find(([key]) => {
        return key.endsWith(path);
      });

      if (!matchedEntry) return null;

      const [, mod] = matchedEntry;
      return {
        src: mod.default,
        alt,
      };
    })
    .filter((img): img is OutputImage => img !== null);
}

export default loadImageObjects;
