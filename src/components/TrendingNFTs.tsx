import eth from "../assets/eth.png";
import ape1 from "../assets/ape-1.gif";
import ape2 from "../assets/ape-2.gif";
import ape3 from "../assets/ape-3.gif";
import ape4 from "../assets/ape-4.gif";
import creator1 from "../assets/creator1.png";
import creator2 from "../assets/creator2.png";
import creator3 from "../assets/creator3.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

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
    <div className="max-w-sm mx-auto py-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
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
        <SwiperSlide>
          <div className="flex flex-col gap-3 p-2 rounded-lg bg-gradient-to-bl from-teal-400 to-violet-600">
            <img src={ape1} alt="ape1.png" className="rounded-2xl" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img
                  src={creator1}
                  alt="creator.png"
                  className="w-16 h-16 rounded-xl"
                />
                <div>
                  <h1 className="font-semibold">Bored Ape Moods</h1>
                  <small>creator name</small>
                </div>
              </div>
              <img
                src={eth}
                alt="eth.png"
                className="w-12 h-12 bg-white rounded-full p-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 p-2 rounded-lg bg-gradient-to-bl from-teal-400 to-violet-600">
            <img src={ape2} alt="ape2.png" className="rounded-2xl" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img
                  src={creator2}
                  alt="creator.png"
                  className="w-16 h-16 rounded-xl"
                />
                <div>
                  <h1 className="font-semibold">Bored Ape Moods</h1>
                  <small>creator name</small>
                </div>
              </div>
              <img
                src={eth}
                alt="eth.png"
                className="w-12 h-12 bg-white rounded-full p-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 p-2 rounded-lg bg-gradient-to-bl from-teal-400 to-violet-600">
            <img src={ape3} alt="ape3.png" className="rounded-2xl" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img
                  src={creator3}
                  alt="creator.png"
                  className="w-16 h-16 rounded-xl"
                />
                <div>
                  <h1 className="font-semibold">Bored Ape Moods</h1>
                  <small>creator name</small>
                </div>
              </div>
              <img
                src={eth}
                alt="eth.png"
                className="w-12 h-12 bg-white rounded-full p-2"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-3 p-2 rounded-lg bg-gradient-to-bl from-teal-400 to-violet-600">
            <img src={ape4} alt="ape4.png" className="rounded-2xl" />
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <img
                  src={creator1}
                  alt="creator.png"
                  className="w-16 h-16 rounded-xl"
                />
                <div>
                  <h1 className="font-semibold">Bored Ape Moods</h1>
                  <small>creator name</small>
                </div>
              </div>
              <img
                src={eth}
                alt="eth.png"
                className="w-12 h-12 bg-white rounded-full p-2"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrendingNFTs;
