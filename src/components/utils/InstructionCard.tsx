type InstructionCardProps = {
  imgUrl: string;
  title: string;
  desc: string;
};

const InstructionCard = ({ imgUrl, title, desc }: InstructionCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-center text-center mx-auto">
      <img
        src={imgUrl}
        alt={title}
        className="w-20 h-20 rounded-full mx-auto"
      />
      <h1 className="text-lg font-semibold">Set up your wallet</h1>
      <p className="max-w-sm text-sm px-5">{desc}</p>
    </div>
  );
};

export default InstructionCard;
