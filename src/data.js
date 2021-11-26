import { lfo } from "./epochs.js";

export const ml_projects = [
  {
    id: 0,
    name: "Low Flying Objects",
    desc: `Feature extraction of sound signals along with complete CNN
  model fitting and evaluations. The color list of palette. If
  no color is set in series, the colors would be adopted
  sequentially and circularly from this list as the colors of
  series.`,
    img: "images/ML-Drones.jpg",
    github:
      "https://github.com/acen20/CNN-Tensorflow-Keras-for-sound-classification",
    colab:
      "https://colab.research.google.com/drive/1UPhu0kIQYwl9rAQ5MyybCHG02kB3JYIE?usp=sharing",
    graph_options: {
      animationDuration: 2000,
      textStyle: {
        color: "#fff",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        data: ["Training Accuracy", "Validation Accuracy"],
        textStyle: {
          color: "#fff",
        },
      },
      xAxis: {
        type: "category",
        scale: true,
        splitNumber: 5,
        show: false,
      },
      yAxis: {
        min: 0.5,
        max: 1,
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: "Validation Accuracy",
          data: lfo?.val,
          type: "line",
          color: "#00ffff",
          lineStyle: {
            width: "2",
          },
          symbolSize: "3",
          symbol: "circle",
          z: 2,
          step: "",
        },

        {
          name: "Training Accuracy",
          data: lfo.acc,
          type: "scatter",
          symbolSize: "8",
          color: "crimson",
        },
      ],
    },
  },
  //2nd project begins here
  {},
];
