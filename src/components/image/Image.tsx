import { FC } from "react";

interface Props {
  webp: string;
  jpg: string;
  alt: string;
}

const Image: FC<Props> = (props) => {
  const { webp, jpg, alt } = props;
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={jpg} type="image/jpeg" />
      <img src={jpg} alt={alt} />
    </picture>
  );
};

export default Image;
