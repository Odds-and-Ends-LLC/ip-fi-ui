// packages
import { useState, useEffect, useCallback } from "react";
import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, ChevronLeft, ChevronRight } from "@mui/icons-material";
import useEmblaCarousel from "embla-carousel-react";

// styles
import styles from "./Carousel.module.css";

export default function Carousel({
  emblaOptions,
  slides = [],
  showArrows = false,
  showDots = false,
  slideWidth = "auto",
  loading = true,
  loader,
  header,
  containerMarginRight,
}) {
  const theme = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...emblaOptions,
    // containScroll: slides?.length < 2 ? false : "trimSnaps",
    // align: slides?.length < 2 ? "center" : "start",
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
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
    <Stack className={styles.carousel} sx={{ padding: { tablet: showArrows && "0 56px" } }}>
      {header && <Stack className={styles.carouselHeader}>{header(buttonPrev, buttonNext)}</Stack>}
      <Box ref={emblaRef} className={styles.carouselViewport} sx={{ px: { tablet: "100px", mobile: "24px" } }}>
        <Box className={styles.carouselContainer} sx={{ marginRight: containerMarginRight }}>
          {loading ? (
            <Box
              className={styles.carouselSlide}
              sx={{
                flexBasis: "100%",
              }}
            >
              {loader}
            </Box>
          ) : (
            slides.map((slide, index) => (
              <Box
                className={styles.carouselSlide}
                key={index}
                sx={{
                  flexBasis: slideWidth,
                }}
              >
                {slide}
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Box sx={{ display: { mobile: "none", tablet: showArrows ? "flex" : "none" } }}>
        <Stack className={styles.carouselButtonContainer} sx={{ left: 0 }}>
          <IconButton
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className={styles.carouselButton}
          >
            <ArrowBack color="white" />
          </IconButton>
        </Stack>
        <Stack className={styles.carouselButtonContainer} sx={{ right: 0 }}>
          <IconButton
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className={styles.carouselButton}
            sx={{ right: 0 }}
          >
            <ArrowForward color="white" />
          </IconButton>
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
                  background:
                    index === selectedIndex
                      ? theme.palette.background.green
                      : theme.palette.background.gray,
                },
              }}
            />
          ))}
        </Box>
      )}
    </Stack>
  );
}
