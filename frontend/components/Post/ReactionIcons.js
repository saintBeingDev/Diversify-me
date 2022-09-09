import { useState } from "react";


const ReactionIcons = ({_id, likes, love, party, claps}) => {

  const [likeState, setLikes] = useState(likes);
  const [loveState, setLoveState] = useState(love)
  const [partyState, setPartyState] = useState(party)
  const [clapsState, setClapsState] = useState(claps)


  const addLike = async () => {
    const { likes: newLikes } = await fetch('/api/likes', {
      method: 'POST',
      body: JSON.stringify({ _id }),
    }).then((response) => response.json());

    setLikes(newLikes);
  }
  const addLove = async () => {
    const { love: newLove } = await fetch('/api/love', {
      method: 'POST',
      body: JSON.stringify({ _id }),
    }).then((response) => response.json());

    setLoveState(newLove);
  }
  const addParty = async () => {
    const { party: newParties } = await fetch('/api/party', {
      method: 'POST',
      body: JSON.stringify({ _id }),
    }).then((response) => response.json());

    setPartyState(newParties);
  }
  const addClaps = async () => {
    const { claps: newClaps } = await fetch('/api/claps', {
      method: 'POST',
      body: JSON.stringify({ _id }),
    }).then((response) => response.json());

    setClapsState(newClaps);
  }

  const reactionData = [
    {icon:'👍', reactionCount: likeState, label:'Like', onClickEvent: addLike},
    {icon:'❤️', reactionCount: loveState, label:'Love', onClickEvent: addLove},
    {icon:'🎉', reactionCount: partyState, label:'Party', onClickEvent: addParty},
    {icon:'👏', reactionCount: clapsState, label:'Claps', onClickEvent: addClaps},
]

  return (
    <>
      <div className="grid grid-cols-4 w-full sticky gap-6 items-center md:w-2/3 md:mx-auto md:my-16">
        <h3 className="col-span-4 text-center text-xl">Article Reaction</h3>
        {
            reactionData.map(react=>(
                <div key={react.label} onClick={react.onClickEvent} className="dark:bg-reactionIconBgDark  md:col-span-2 sm:col-span-1 bg-reactionIconBg w-full h-full text-4xl flex flex-col justify-center items-center py-4 rounded-md hover:cursor-pointer hover:ring-2 hover:ring-offset-2 hover:ring-slate-800 transition-all ease-in">
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
