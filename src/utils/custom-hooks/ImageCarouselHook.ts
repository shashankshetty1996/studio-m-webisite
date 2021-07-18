import { useState, useRef, useEffect } from 'react';

interface useImageCarouselRequest {
  numberOfItems: number;
  screenWidth?: number;
  duration?: number;
}

interface useImageCarouselResponse {
  activeIndex: number;
  scrollElem: React.RefObject<HTMLDivElement>;
  scrollByIndex: (index: number) => void;
}

type interval = NodeJS.Timeout | undefined;
const defaultDuration = 5000;
const windowWidth = window.innerWidth;
const useImageCarousel = (config: useImageCarouselRequest): useImageCarouselResponse => {
  const { numberOfItems, screenWidth = windowWidth, duration = defaultDuration } = config;

  const [index, setIndex] = useState<number>(0);

  const scrollElem = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<interval>();

  const _createCarouselInterval = () => {
    intervalRef.current = setTimeout(() => {
      setIndex((oldIndex) => {
        const updatedIndex = (oldIndex + 1) % numberOfItems;
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
    const shiftBy = index * screenWidth - (scrollElem.current?.scrollLeft ?? 0);
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

export default useImageCarousel;