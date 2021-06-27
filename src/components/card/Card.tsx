import { FC } from "react";

interface Props {
  image: string;
  alt: string;
  containerClassName?: string;
  className?: string;
}

const Card: FC<Props> = (props) => {
  const { image, alt, children, containerClassName, className } = props;

  const componentClassName = `rounded-md ${containerClassName}`;
  const imageClassName = `rounded-full ${className}`;

  return (
    <div className={componentClassName}>
      <img className={imageClassName} src={image} alt={alt} />
      {children}
    </div>
  );
};

export default Card;
