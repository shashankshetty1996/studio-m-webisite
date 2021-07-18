import { FC } from "react";

interface Props {
  webp: string;
  jpg: string;
  alt: string;
  containerClassName?: string;
  className?: string;
}

const Image: FC<Props> = (props) => {
  const { webp, jpg, alt, containerClassName, className } = props;
  return (
    <picture className={containerClassName}>
      <source className={className} srcSet={webp} type="image/webp" />
      <source className={className} srcSet={jpg} type="image/jpeg" />
      <img className={className} src={jpg} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Image;
