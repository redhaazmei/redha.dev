import { useColorMode } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightowldark from "prism-react-renderer/themes/nightOwl";

const MDXCode = ({ children, className }) => {
  const { colorMode } = useColorMode();
  const language = className.replace(/language-/, "");
  return (
    <Highlight {...defaultProps} theme={nightowldark} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ overflowX: "auto", whiteSpace: "nowrap", paddingTop: "2em", paddingLeft: "1em" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default MDXCode;
