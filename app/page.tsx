import Banner from "./components/hero-banner/hero-banner";
import HeadlineText from "./components/headline-text/headline-text";
import ImageGridCard from "./components/image-grid-card/image-grid-card";

import intro from "./data/homepageIntro.json";
import gardenServices from "./data/gardenServices.json";

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
    </main>
  );
}