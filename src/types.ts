export type Image = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
};

export type TargetImage = {
  src: string;
  alt: string;
};
