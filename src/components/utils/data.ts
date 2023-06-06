import eth from "../../assets/eth.png";
import ape1 from "../../assets/ape-1.gif";
import ape2 from "../../assets/ape-2.gif";
import ape3 from "../../assets/ape-3.gif";
import ape4 from "../../assets/ape-4.gif";
import creator1 from "../../assets/creator1.png";
import creator2 from "../../assets/creator2.png";
import creator3 from "../../assets/creator3.gif";

const trendingNFTs: {
  nftImgUrl: string;
  nftTitle: string;
  creatorImgUrl: string;
  creatorName: string;
  ethImgUrl: string;
}[] = [
  {
    nftImgUrl: ape1,
    nftTitle: "Bored Ape Chill 1",
    creatorImgUrl: creator1,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape2,
    nftTitle: "Bored Ape Mood 1",
    creatorImgUrl: creator2,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape3,
    nftTitle: "Bored Ape Babushka 1",
    creatorImgUrl: creator3,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape4,
    nftTitle: "Bored Ape Pirate 1",
    creatorImgUrl: creator1,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape1,
    nftTitle: "Bored Ape Chill 1",
    creatorImgUrl: creator1,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape2,
    nftTitle: "Bored Ape Mood 1",
    creatorImgUrl: creator2,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape3,
    nftTitle: "Bored Ape Babushka 1",
    creatorImgUrl: creator3,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape4,
    nftTitle: "Bored Ape Pirate 1",
    creatorImgUrl: creator1,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
  {
    nftImgUrl: ape1,
    nftTitle: "Bored Ape Chill 1",
    creatorImgUrl: creator1,
    creatorName: "Creator Name",
    ethImgUrl: eth,
  },
];

const instructions: {
  imgUrl: string;
  title: string;
  desc: string;
}[] = [
  {
    imgUrl: creator1,
    title: "Set up your wallet",
    desc: "Once you've set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right courner. Learn about the wallets we support.",
  },
  {
    imgUrl: creator2,
    title: "Upload & Create Collection",
    desc: "Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    imgUrl: creator3,
    title: "List them for sale",
    desc: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them.",
  },
];

export { trendingNFTs, instructions };
