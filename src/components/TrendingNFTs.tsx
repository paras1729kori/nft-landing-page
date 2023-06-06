import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TrendingNFTCard from "./utils/TrendingNFTCard";
import { trendingNFTs } from "./utils/data";

const TrendingNFTs = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  return (
    <div className="max-w-sm mx-auto py-10 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <div className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-violet-600 ">
        Trending NFTs
      </div>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : 2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="swiper_container mt-5 w-10/12"
      >
        {trendingNFTs.map((nft) => {
          return (
            <SwiperSlide>
              <TrendingNFTCard
                key={nft.nftTitle}
                nftImgUrl={nft.nftImgUrl}
                nftTitle={nft.nftTitle}
                creatorImgUrl={nft.creatorImgUrl}
                creatorName={nft.creatorName}
                ethImg={nft.ethImgUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TrendingNFTs;
