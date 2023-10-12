import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Import the 3D module
import highcharts3d from "highcharts/highcharts-3d";
highcharts3d(Highcharts);

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "Trains per Month",
  },
  xAxis: {
    categories: ["Jan", "Feb", "March"],
  },
  yAxis: {
    title: {
      text: "Trains per Month",
    },
  },
  series: [
    {
      name: "London",
      data: [10, 20, 30], // Values for the first bar
    },
    {
      name: "Glasgow",
      data: [15, 25, 35], // Values for the second bar
    },
    {
      name: "Inverness",
      data: [5, 15, 25], // Values for the third bar
    },
    {
      name: "Dundee",
      data: [10, 10, 15], // Values for the third bar
    },
  ],
};

function ThreeDBarChart() {
  return (
    <div style={{ border: "2px solid #575aab", marginLeft: "20px" }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        style={{ width: "90%" }}
      />
    </div>
  );
}

export default ThreeDBarChart;
