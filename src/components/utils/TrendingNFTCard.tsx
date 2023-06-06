type TrendingNFTCardProps = {
  nftImgUrl: string;
  nftTitle: string;
  creatorImgUrl: string;
  creatorName: string;
  ethImg: string;
};

const TrendingNFTCard = ({
  nftImgUrl,
  nftTitle,
  creatorImgUrl,
  creatorName,
  ethImg,
}: TrendingNFTCardProps) => {
  return (
    <div className="flex flex-col gap-3 p-2 rounded-lg bg-gradient-to-bl from-teal-400 to-violet-600">
      <img src={nftImgUrl} alt={nftTitle} className="rounded-2xl" />
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img
            src={creatorImgUrl}
            alt="creator.png"
            className="w-16 h-16 rounded-xl"
          />
          <div>
            <h1 className="font-semibold">{nftTitle}</h1>
            <small>{creatorName}</small>
          </div>
        </div>
        <img
          src={ethImg}
          alt="eth.png"
          className="w-12 h-12 bg-white rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default TrendingNFTCard;
