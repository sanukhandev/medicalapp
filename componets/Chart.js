import CustomBar from "./CustomBar";

const Chart = () => {
  const data = [
    { label: "Jan", value: 500 },
    { label: "Feb", value: 312 },
    { label: "Mar", value: 424 },
    { label: "Apr", value: 745 },
    { label: "May", value: 89 },
    { label: "Jun", value: 434 },
    { label: "Jul", value: 650 },
    { label: "Aug", value: 980 },
    { label: "Sep", value: 123 },
    { label: "Oct", value: 186 },
    { label: "Nov", value: 689 },
    { label: "Dec", value: 643 },
  ];

  return <CustomBar data={data} />;
};

export default Chart;
