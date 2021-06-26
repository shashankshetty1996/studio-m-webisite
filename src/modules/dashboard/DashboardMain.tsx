import { FC, useState, useEffect, useRef } from "react";

import DashboardImage from "./DashboardImage";
import { ImageList } from "./DashboardImageList";

interface useImageCarouselResponse {
  activeIndex: number;
  scrollElem: React.RefObject<HTMLDivElement>;
  scrollByIndex: (index: number) => void;
}

type interval = NodeJS.Timeout | undefined;
const duration = 5000;
const windowWidth = window.innerWidth;
const useImageCarousel = (): useImageCarouselResponse => {
  const [index, setIndex] = useState<number>(0);

  const scrollElem = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<interval>();

  const _createCarouselInterval = () => {
    intervalRef.current = setTimeout(() => {
      setIndex((oldIndex) => {
        const updatedIndex = (oldIndex + 1) % ImageList.length;
        return updatedIndex;
      });
    }, duration);
  };

  const _clearCarouselInterval = (interval: interval) => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const _smoothLeftShiftBy = (shiftBy: number) => {
    scrollElem.current?.scrollBy({
      left: shiftBy,
      behavior: "smooth",
    });
  };

  const scrollByIndex = (index: number) => {
    _clearCarouselInterval(intervalRef.current);
    setIndex(index);
  };

  useEffect(() => {
    const interval = intervalRef.current;
    const shiftBy = index * windowWidth - (scrollElem.current?.scrollLeft ?? 0);
    _smoothLeftShiftBy(shiftBy);
    _createCarouselInterval();

    return () => {
      _clearCarouselInterval(interval);
    };
  }, [index]);

  return {
    activeIndex: index,
    scrollElem,
    scrollByIndex,
  };
};

const DashboardMain: FC<{}> = () => {
  const { scrollElem, scrollByIndex, activeIndex } = useImageCarousel();

  return (
    <section className="relative">
      {/* Images */}
      <div className="flex overflow-hidden" ref={scrollElem}>
        {ImageList.map((image, index) => (
          <DashboardImage key={index} image={image} />
        ))}
        {/* indicators */}
        <figcaption className="fixed w-screen flex items-center justify-center bottom-8">
          {ImageList.map((_, index) => {
            let componentClassName =
              "rounded-full w-1 h-1 border-8 z-10 mx-1 cursor-pointer shadow-lg border-gray-400";
            if (activeIndex === index) {
              componentClassName += "shadow-2xl border-gray-50";
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
