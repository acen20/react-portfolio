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
      grid: {
        bottom: "30px",
        right: "10px",
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
    cm_options: generate_cm_options(5, 1, 0, 0),
  },
  //2nd project begins here
  {},
];

function generate_cm_options(tp, tn, fp, fn) {
  let acc = parseFloat(tp + tn) / parseFloat(tp + tn + fp + fn);
  acc = acc.toFixed(3);

  const x = [1, 0];
  // prettier-ignore
  const y = [
      0,1
  ];
  const cm = [tp, tn, fp, fn];
  const cm_max = Math.max.apply(null, cm);
  const cm_min = Math.min.apply(null, cm);
  console.log(cm_max);

  // prettier-ignore
  const data = [
    {
      name:'False Negative',
      value:[0,0,fn]
    },
    {
      name:'True Negative',
      value:[1,0,tn]
    },
    {
      name:'False Positive',
      value:[1,1,fp]
    },
    {
      name: 'True Positive',
      value:[0,1,tp]
    }
  ]
  let options = {
    animationDuration: 1000,
    title: {
      show: true,
      text: "CM Accuracy: " + acc,
      padding: 0,
      top: 0,
      textAlign: "auto",
      left: "45px",
      textStyle: {
        color: "whitesmoke",
      },
    },
    tooltip: {
      position: "top",
      formatter: function (params) {
        return params.name + ": " + params.data.value[2];
      },
      trigger: "item",
    },
    grid: {
      top: "20px",
      left: "15px",
      right: "0",
      bottom: "20px",
      show: false,
    },
    xAxis: {
      type: "category",
      data: x,
      splitArea: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: "category",
      data: y,
      splitArea: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    visualMap: {
      type: "continuous",
      min: cm_min,
      max: cm_max,
      show: false,
      color: ["darkblue", "whitesmoke"],
    },
    series: [
      {
        type: "heatmap",
        data: data,
        label: {
          show: true,
        },
        coordinateSystem: "cartesian2d",
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return options;
}
