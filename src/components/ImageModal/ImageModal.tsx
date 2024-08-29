import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

type TargetImage = {
  src: string;
  alt: string;
};

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  imgInfo: TargetImage;
};

export default function ImageModal({
  isOpen,
  onRequestClose,
  imgInfo,
}: ImageModalProps): JSX.Element {
  const { src, alt } = imgInfo;
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={alt}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          width: "auto",
          height: "auto",
          maxWidth: "90vw",
          maxHeight: "90vh",
          border: "none",
        },
      }}
    >
      <img
        onClick={onRequestClose}
        src={src}
        alt={alt}
        style={{
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </Modal>
  );
}
