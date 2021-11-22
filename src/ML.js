import React, { useEffect } from "react";
import "./ML.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import * as echarts from "echarts";

// initialize the echarts instance

function ML() {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("ml-graph"));
    // Draw the chart
    myChart.setOption({
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
          data: [
            0.529411792755127,
            0.47058823704719543,
            0.5588235259056091,
            0.6764705777168274,
            0.6764705777168274,
            0.6176470518112183,
            0.7058823704719543,
            0.7058823704719543,
            0.7058823704719543,
            0.9117646813392639,
            0.9117646813392639,
            0.9117646813392639,
            0.9117646813392639,
            0.9117646813392639,
            0.9411764740943909,
            0.9117646813392639,
            0.9117646813392639,
            0.9117646813392639,
            0.9411764740943909,
            0.9411764740943909,
            0.9411764740943909,
            0.9117646813392639,
            0.9117646813392639,
            0.9117646813392639,
            0.9411764740943909,
            0.9411764740943909,
            0.9411764740943909,
            0.9411764740943909,
            0.9411764740943909,
            0.9411764740943909,
          ],
          type: "line",
          color: "seagreen",
          lineStyle: {
            width: "3",
          },
          symbolSize: "3",
          symbol: "circle",
          z: 2,
        },
        {
          name: "Training Accuracy",
          data: [
            0.49242424964904785,
            0.5681818127632141,
            0.7045454382896423,
            0.560606062412262,
            0.6363636255264282,
            0.7803030014038086,
            0.6439393758773804,
            0.75,
            0.7878788113594055,
            0.8409090638160706,
            0.8787878751754761,
            0.8787878751754761,
            0.9015151262283325,
            0.8939393758773804,
            0.9469696879386902,
            0.9469696879386902,
            0.9696969985961914,
            0.939393937587738,
            0.9772727489471436,
            0.9696969985961914,
            0.9848484992980957,
            0.9848484992980957,
            0.939393937587738,
            0.9469696879386902,
            0.9924242496490479,
            0.9924242496490479,
            1.0,
            1.0,
            1.0,
            0.9924242496490479,
          ],
          type: "scatter",
          symbolSize: "6",
          color: "lightgreen",
        },
      ],
    });
  });
  return (
    <div className="ml-container bg-dark text-white">
      <div class="row">
        <div className="ml-sidebar col-3 pt-5">
          <div className="ml-sidebar-controls p-0">
            <div className="p-0 w-85 ml-auto py-2 selected">
              <a href="javascript:load-ml()" class="ml-project-link">
                Low Flying Objects
              </a>
            </div>
            <div className="p-0 w-85 ml-auto py-2 mt-3">
              <a href="javascript:load-ml()" class="ml-project-link">
                Data Reconstruction
              </a>
            </div>
            <div className="p-0 w-85 ml-auto py-2 mt-3">
              <a href="javascript:load-ml()" class="ml-project-link">
                MFCC Feature Extraction
              </a>
            </div>
            <div className="p-0 w-85 ml-auto py-2 mt-3">
              <a href="javascript:load-ml()" class="ml-project-link">
                ML Ensembles on Medical Conditions
              </a>
            </div>
            <div className="p-0 w-85 ml-auto py-2 mt-3">
              <a href="javascript:load-ml()" class="ml-project-link">
                Dimensionality Reduction
              </a>
            </div>
          </div>
        </div>

        <div className="col-9 ml-project-container p-5">
          <div className="bg-darkf h-100 d-flex flex-column justify-content-between align-items-end">
            <h3 className="ml-project-header pb-2 mr-5">Low Flying Objects</h3>
            <div className="ml-project-details container">
              <div className="row">
                <div className="ml-auto ml-project-desc d-flex flex-column justify-content-beteen p-3 col-4">
                  <p class="pb-4">
                    Feature extraction of sound signals along with complete CNN
                    model fitting and evaluations. The color list of palette. If
                    no color is set in series, the colors would be adopted
                    sequentially and circularly from this list as the colors of
                    series.
                  </p>
                  <div>
                    <a
                      href="https://github.com/acen20/CNN-Tensorflow-Keras-for-sound-classification"
                      className="p-2 bg-success text-white shadow-lg rounded"
                      target="_blank"
                    >
                      <GitHubIcon className="mr-2" />
                      <div className="d-inline-block">Github</div>
                    </a>
                  </div>
                </div>
                <div className="ml-project-graph col-8">
                  <div class="m-0 pt-4 text-white" id="ml-graph"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ML;