import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image, TargetImage } from "../../types";

type ImageGalleryProps = {
  images: Image[];
  onTarget: ({ src, alt }: TargetImage) => void;
};

export default function ImageGallery({
  images,
  onTarget,
}: ImageGalleryProps): JSX.Element {
  const targetImage = (e: React.MouseEvent<HTMLUListElement>) => {
    const targetElement = e.target as HTMLImageElement;
    if (targetElement.tagName !== "IMG") {
      return;
    }

    onTarget({
      src: targetElement.dataset.modal || "",
      alt: targetElement.alt || "",
    });
  };

  return (
    <ul className={css.list} onClick={targetImage}>
      {images.map(({ urls, alt_description, id }) => {
        const { small, regular } = urls;
        return (
          <li key={id}>
            <ImageCard
              small={small}
              regular={regular}
              altDescription={alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}
