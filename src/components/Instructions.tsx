import InstructionCard from "./utils/InstructionCard";
import { instructions } from "./utils/data";

const Instructions = () => {
  return (
    <div className="max-w-sm mx-auto py-10 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <div className="font-bold text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-violet-600 ">
        Create and sell your NFTs
      </div>
      <div className="flex flex-col gap-10 mt-5 lg:flex-row">
        {instructions.map((ins) => {
          return (
            <InstructionCard
              key={ins.title}
              imgUrl={ins.imgUrl}
              title={ins.title}
              desc={ins.desc}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Instructions;
