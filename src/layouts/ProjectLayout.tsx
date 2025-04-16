import ImageCarousel from "../components/ImageCarousel";
import loadImageObjects, { type InputImage } from "../utils/loadImages";
import { ReactNode } from "react";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  images: InputImage[];
  children: ReactNode;
}

function ProjectLayout({
  title,
  subtitle,
  images,
  children,
}: ProjectLayoutProps) {
  const importedImages = loadImageObjects(images);

  return (
    <>
      <section className="project-details-page">
        <div className="project-header-page">
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>
        <h3>Overview</h3>
        <div className="carousel-wrapper">
          <ImageCarousel images={importedImages}></ImageCarousel>
        </div>
        {children}
      </section>
    </>
  );
}

export default ProjectLayout;
