import { FC } from "react";

import DashboardImage from "./DashboardImage";
import { ImageList } from "./DashboardImageList";

import useImageCarousel from '../../utils/custom-hooks/ImageCarouselHook'

const DashboardMain: FC<{}> = () => {
  const { scrollElem, scrollByIndex, activeIndex } = useImageCarousel({ numberOfItems: ImageList.length });

  return (
    <section className="relative w-screen h-screen bg-gray-50">
      {/* Images */}
      <div className="flex overflow-hidden md:h-full" ref={scrollElem}>
        {ImageList.map((image, index) => (
          <DashboardImage key={index} image={image} />
        ))}
        {/* indicators */}
        <figcaption className="fixed w-screen flex items-center justify-center bottom-8">
          {ImageList.map((_, index) => {
            let componentClassName =
              "rounded-full w-1 h-1 border-4 z-10 mx-2 cursor-pointer shadow-lg border-gray-400";
            if (activeIndex === index) {
              componentClassName += "shadow-2xl border-gray-200";
            }
            return (
              <div
                key={index}
                className={componentClassName}
                onClick={() => scrollByIndex(index)}
              >
                &nbsp;
              </div>
            );
          })}
        </figcaption>
      </div>
    </section>
  );
};

export default DashboardMain;
