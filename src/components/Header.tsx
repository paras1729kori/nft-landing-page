const Header = () => {
  return (
    <div className="max-w-xs flex mx-auto justify-between md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <div className="font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-violet-600">
        developedbypk
      </div>
      <div>
        <a
          href="https://github.com/paras1729kori/nft-landing-page"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;
