import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism"; // changed esm -> cjs
import { xonokai,okaidia,base16AteliersulphurpoolLight ,materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism"; // changed esm -> cjs
import CopyBtn from "./CopyBtn"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const CodeBlock = ({language, code}) => {
    const {systemTheme, theme} = useTheme()
    const [codeTheme, setcodeTheme] = useState(systemTheme)
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])

    useEffect(() => {
        theme ==='dark' ? setcodeTheme(okaidia) : setcodeTheme(materialLight);
    }, [theme])
    
    if(!mounted)return null;

  return (
    <div className="relative md:mx-3">
      <CopyBtn code={code} />

      <SyntaxHighlighter
        // In this example, `props` is the value of a `code` field
        language={language}
        className="rounded-md relative lg:text-lg"
        customStyle={{paddingTop:"30px"}}
        style={codeTheme}
        CodeTag={language}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
