import { ComponentProps } from "react";

interface TextProps extends ComponentProps<"span"> {}

const Text = (props: TextProps) => {
  return <span {...props} />;
};

export default Text;
