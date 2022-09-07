import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { AiOutlineCopy } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

export default function CopyBtn({code}) {
    const [copyOk, setCopyOk] = React.useState(false);

    const icon = copyOk ?<TiTick className="text-green-500 text-lg md:text-xl hover:rotate-12"/> : <AiOutlineCopy className="text-black dark:text-white text-md sm:text-xl" />;

    React.useEffect(() => {
        setTimeout(() => {
            setCopyOk(false);
        }, 3000);
      }, [copyOk]);
    return (
            <CopyToClipboard
              text={code}
              onCopy={() => setCopyOk(true)}
              className="absolute top-3 right-3 hover:cursor-pointer hover:scale-125 transition-all ease-in z-10"
            >
              <button>{icon}</button>
            </CopyToClipboard>
    )
}