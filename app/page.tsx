import Banner from "./components/hero-banner/hero-banner";
import HeadlineText from "./components/headline-text/headline-text";
import ImageGridCard from "./components/image-grid-card/image-grid-card";

import intro from "./data/homepageIntro.json";
import gardenServices from "./data/gardenServices.json";
import carouselHeadline from "./data/carouselHeadline.json";
import WaveContainer from "./components/wave-container/wave-container";
import ThreeCardCarousel from "./components/three-card-carousel/three-card-carousel";

export default function Home() {
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
        <ThreeCardCarousel/>
      </WaveContainer>
    </main>
  );
}