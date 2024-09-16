import Banner from "./components/hero-banner/hero-banner";
import HeadlineText from "./components/headline-text/headline-text";
import ImageGridCard from "./components/image-grid-card/image-grid-card";

import { EmblaOptionsType } from 'embla-carousel'

import intro from "./data/homepageIntro.json";
import gardenServices from "./data/gardenServices.json";
import carouselHeadline from "./data/carouselHeadline.json";
import faqAccordion from "./data/faqAccordion.json";

import WaveContainer from "./components/wave-container/wave-container";
import FocusedCarousel from "./components/focused-carousel/focused-carousel";
import Accordion from "./components/accordion/accordion";

export default function Home() {
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const faqTitle =faqAccordion[0].title[0]
  const faqItems = faqAccordion[0].accordionItems
  
  return (
    <main className="ozgs-home">
      <Banner/>
      <HeadlineText
        subTitle={intro.subTitle}
        title={intro.title}
        text={intro.text}
      />
      <ImageGridCard data={gardenServices}/>
      <WaveContainer>
        <HeadlineText
          subTitle={carouselHeadline.subTitle}
          title={carouselHeadline.title}
          text={""}
        />
        <FocusedCarousel 
          slides={SLIDES} 
          options={{loop: true}} 
        />
      </WaveContainer>
      <HeadlineText
          subTitle={faqTitle.subTitle}
          title={faqTitle.title}
          text={""}
        />
      <Accordion items={faqItems} />
    </main>
  );
}