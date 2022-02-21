import { Path } from "react-native-svg-charts";

export const Shadow = (props) => {
  const { line } = props || {};
  return (
    <Path
      key={"shadow"}
      y={2}
      x={1}
      d={line}
      fill={"none"}
      strokeWidth={4}
      stroke={"rgba(134, 65, 244, 0.2)"}
    />
  );
};
