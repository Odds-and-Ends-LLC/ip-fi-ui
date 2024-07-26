// packages
import { useState, useEffect, useCallback, ReactNode } from "react";
import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import useEmblaCarousel, { EmblaCarouselType, EmblaOptionsType } from "embla-carousel-react";

// styles
import styles from "./Carousel.module.css";

interface CarouselHeaderButton {
  onClick: () => void;
  disabled: boolean;
};

export default function Carousel({
  slides = [],
  showArrows = false,
  showDots = false,
  slideGap = "24px",
  header,
  headerMarginBottom = "40px",
  emblaOptions,
} : {
  slides?: any[];
  showArrows?: boolean;
  showDots?: boolean;
  slideGap?: string;
  header?: (prev: CarouselHeaderButton, next: CarouselHeaderButton) => ReactNode;
  headerMarginBottom?: string | object;
  emblaOptions?: EmblaOptionsType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    breakpoints: {
      '(max-width: 767px)': { slidesToScroll: 1 },
      '(min-width: 768px) and (max-width: 1199px)': { slidesToScroll: 2 },
      '(min-width: 1200px) and (max-width: 1439px)': { slidesToScroll: 3 },
      '(min-width: 1512px)': { slidesToScroll: 4 },
    },
    ...emblaOptions,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index : number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi : EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi : EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  const buttonPrev = { onClick: scrollPrev, disabled: prevBtnDisabled };
  const buttonNext = { onClick: scrollNext, disabled: nextBtnDisabled };

  return (
    <Stack className={styles.carousel}>
      {header &&
        <Stack className={styles.carouselHeader} sx={{ mb: headerMarginBottom, px: { mobile: "24px", tablet: 0 } }}>
          {header(buttonPrev, buttonNext)}
        </Stack>
      }
      <Box
        ref={emblaRef}
        className={styles.carouselViewport}
        sx={{ overflow: { mobile: "unset", tablet: "hidden" } }}
      >
        <Stack className={styles.carouselContainer} sx={{ ml: { tablet: `-${slideGap}` } }}>
          {slides.map((slide, index) => (
            <Box
              key={index}
              className={styles.carouselSlide}
              sx={{
                flex: {
                  desktop: "0 0 calc(100% / 4)",
                  laptop: "0 0 calc(100% / 3)",
                  tablet: "0 0 calc(100% / 2)",
                  mobile: "0 0 calc(100% / 1.5)",
                },
                pl: slideGap,
                "&:last-child": {
                  mr: {
                    mobile: slideGap,
                    tablet: 0,
                  }
                }
              }}
            >
              {slide}
            </Box>
          ))}
        </Stack>
      </Box>
      <Box sx={{ display: { mobile: "none", tablet: showArrows ? "flex" : "none" } }}>
        <Stack className={styles.carouselButtonContainer} sx={{ left: 0 }}>
          <Button
            variant="clearWhite"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className={styles.carouselButton}
          >
            {/* <ArrowBack color="" /> */}
          </Button>
        </Stack>
        <Stack className={styles.carouselButtonContainer} sx={{ right: 0 }}>
          <Button
            variant="clearWhite"
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className={styles.carouselButton}
            sx={{ right: 0 }}
          >
            {/* <ArrowForward color="white" /> */}
          </Button>
        </Stack>
      </Box>
      {showDots && (
        <Box
          className={styles.carouselDots}
          sx={{ display: { mobile: "flex", tablet: showArrows ? "none" : "flex" } }}
        >
          {scrollSnaps.map((_, index) => (
            <Box
              key={index}
              onClick={() => scrollTo(index)}
              className={styles.carouselDot}
              sx={{
                "&:after": {
                  background: index === selectedIndex ? "background.greenOverlay" : "background.grayOverlay"
                },
              }}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
}
