import { BarChart } from "react-native-svg-charts";
const Chart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  return (
    <BarChart
      style={{
        height: 200,
      }}
      svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
      spacingInner={0.4}
      spacingOuter={0.1}
      gridMin={-100}
      gridMax={120}
      data={data}
      svg={{ fill: "#206df1" }}
      contentInset={{ top: 30, bottom: 30 }}
    ></BarChart>
  );
};

export default Chart;
