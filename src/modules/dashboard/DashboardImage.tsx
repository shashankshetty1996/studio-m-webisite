import { FC } from "react";

import { Image } from "./DashboardImageList";

interface Props {
  image: Image;
}

const DashboardImage: FC<Props> = (props) => {
  const { webp, jpg, name, place } = props.image;
  const alt = `${name}, ${place}`;

  return (
    <div className="relative flex flex-col items-center justify-center md:block h-screen w-screen flex-shrink-0">
      <picture>
        <source srcSet={webp} type="image/webp" />
        <source srcSet={jpg} type="image/jpeg" />
        <img src={jpg} alt={alt} />
      </picture>
      <div className="w-full md:absolute flex flex-col justify-center md:block md:bottom-4 md:left-2 py-1 px-4 md:w-72 bg-white rounded-md shadow-md text-center md:text-left">
        <h1>{name}</h1>
        <h3 className="text-gray-400 text-sm">{place}</h3>
      </div>
    </div>
  );
};

export default DashboardImage;
