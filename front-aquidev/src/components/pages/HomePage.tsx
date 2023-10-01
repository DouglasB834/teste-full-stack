import React from "react";
import { Header } from "../Header";
import { Banner } from "../Banner";
import Image from "next/image";
import { OurMenu } from "../OurMenu";
import { WeServe } from "../WeServe";
import { FeedBack } from "../FeedBack";
import { BannerFooter } from "../BannerFooter";
import { Footer } from "../Footer";
import rectangle from "../../../public/assets/rectangle.png";
const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="relative pt-[80px]">
        <Banner />
        <Image
          src={rectangle}
          alt="tangle"
          className="absolute bottom-[7rem] z-[-1] "
        />
        <Image
          src={rectangle}
          alt="tangle"
          className="absolute bottom-[4rem] z-[-1] "
        />
      </div>

      <main
        id="howItWorks"
        className="py-[5rem] bg-white flex flex-col gap-[2rem] "
      >
        <OurMenu />
        <WeServe />
        <FeedBack />
        <BannerFooter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
