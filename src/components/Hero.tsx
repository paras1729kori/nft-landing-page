import ape1 from "../assets/ape-1.gif";
import ape2 from "../assets/ape-2.gif";
import ape3 from "../assets/ape-3.gif";
import ape4 from "../assets/ape-4.gif";

const Hero = () => {
  return (
    <div className="max-w-xs flex flex-col gap-10 text-center mx-auto mt-10 md:max-w-xl lg:max-w-3xl lg:flex-row lg:text-left lg:items-center xl:max-w-6xl">
      <div className="lg:w-7/12">
        <div>
          <h1 className="text-3xl font-semibold md:text-5xl lg:6xl">
            Discover collect, & sell{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-600">
              Extraordinary
            </span>{" "}
            NFTs
          </h1>
          <p className="mt-10">
            The leading NFT Marketplace on EthereumHome to the next generation
            of digital creators. Discover the best NFT collections.
          </p>
        </div>
        <div className="flex justify-center gap-5 mt-10 font-semibold lg:justify-start">
          <div className="bg-blue-500 text-white px-6 py-1 rounded-full cursor-pointer">
            Explore
          </div>
          <div className="border border-white px-6 py-1 rounded-full cursor-pointer">
            Create
          </div>
        </div>
        <div className="font-semibold flex justify-between mt-10 lg:max-w-sm">
          <div className="flex flex-col lg:items-start">
            <h1 className="">200K+</h1>
            <small>Collections</small>
          </div>
          <div className="flex flex-col lg:items-start">
            <h1 className="">10K+</h1>
            <small>Artists</small>
          </div>
          <div className="flex flex-col lg:items-start">
            <h1 className="">423K+</h1>
            <small>Community</small>
          </div>
        </div>
      </div>
      <div className="flex lg:w-5/12">
        <div className="w-1/2">
          <img
            src={ape1}
            alt="Image 1"
            className="rounded-xl border-4 border-black"
          />
          <img
            src={ape3}
            alt="Image 2"
            className="rounded-xl border-4 border-black"
          />
        </div>
        <div className="w-1/2">
          <img
            src={ape4}
            alt="Image 3"
            className="rounded-xl border-4 border-black"
          />
          <img
            src={ape2}
            alt="Image 4"
            className="rounded-xl border-4 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
