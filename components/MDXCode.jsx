import { useColorMode } from "@chakra-ui/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightowllight from "prism-react-renderer/themes/nightOwllight";
import nightowldark from "prism-react-renderer/themes/nightOwl";

const MDXCode = ({ children, className }) => {
  const { colorMode } = useColorMode();
  const language = className.replace(/language-/, "");
  return (
    <Highlight {...defaultProps} theme={colorMode === "dark" ? nightowldark : nightowllight} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className}>
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
