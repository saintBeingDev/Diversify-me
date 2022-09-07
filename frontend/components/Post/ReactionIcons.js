import { useState } from "react";
const reactionData = [
    {icon:'👍', reactionCount:2, label:'Like'},
    {icon:'❤️', reactionCount:7, label:'Love'},
    {icon:'🎉', reactionCount:3, label:'Party'},
    {icon:'👏', reactionCount:5, label:'Claps'},
]

const ReactionIcons = () => {
  const [like, setLike] = useState(2)
  const [love, setLove] = useState(7)
  const [party, setParty] = useState(3)
  const [claps, setClaps] = useState(5)

  return (
    <>
      <div className="grid grid-cols-4 w-full sticky gap-6 items-center md:w-2/3 md:mx-auto md:my-16">
        <h3 className="col-span-4 text-center text-xl">Article Reaction</h3>
        {
            reactionData.map(react=>(
                <div key={react.label} className="dark:bg-reactionIconBgDark  md:col-span-2 sm:col-span-1 bg-reactionIconBg w-full h-full text-4xl flex flex-col justify-center items-center py-4 rounded-md hover:cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-slate-800 transition-all ease-in">
                    <p className="">{react.icon}</p>
                    <h3 className="text-2xl font-semibold dark:text-lightColor text-reactionText">{react.reactionCount}</h3>
                    <h6 className="text-sm text-reactionText dark:text-lightColor">{react.label}</h6>
                </div>
            ))
        }
      </div>
    </>
  );
};

export default ReactionIcons;
