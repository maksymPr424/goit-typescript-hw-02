import css from "./ImageCard.module.css";

type ImageCardProps = {
  small: string;
  regular: string;
  altDescription: string;
};

export default function ImageCard({
  small,
  regular,
  altDescription,
}: ImageCardProps): JSX.Element {
  return (
    <div className={css.imageBorder}>
      <img
        className={css.image}
        src={small}
        data-modal={regular}
        alt={altDescription}
      />
    </div>
  );
}
