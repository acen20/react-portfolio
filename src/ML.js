import React, { useEffect } from "react";
import "./ML.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import * as echarts from "echarts";
import SectionHeading from "./SectionHeading";

// initialize the echarts instance

function ML() {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("ml-graph"));
    window.onresize = () => {
      myChart.resize();
    };
    // Draw the chart
    myChart.setOption({
      animationDuration: 4000,
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
            0.7647058963775635,
            0.6470588445663452,
            0.5882353186607361,
            0.7058823704719543,
            0.6470588445663452,
            0.7352941036224365,
            0.7352941036224365,
            0.7352941036224365,
            0.7647058963775635,
            0.7058823704719543,
            0.7647058963775635,
            0.7647058963775635,
            0.8823529481887817,
            0.8823529481887817,
            0.9117646813392639,
            0.8823529481887817,
            0.8529411554336548,
            0.8529411554336548,
            0.9117646813392639,
            0.8235294222831726,
            0.9411764740943909,
            0.9411764740943909,
            0.9117646813392639,
            0.9411764740943909,
            0.8823529481887817,
            0.9117646813392639,
            0.9411764740943909,
            0.970588207244873,
            0.9117646813392639,
            0.9411764740943909,
          ],
          type: "line",
          color: "#00ffff",
          lineStyle: {
            width: "2",
          },
          symbolSize: "3",
          symbol: "circle",
          z: 2,
          step: "start",
        },

        {
          name: "Training Accuracy",
          data: [
            0.4545454680919647,
            0.5833333134651184,
            0.5909090638160706,
            0.6212121248245239,
            0.6515151262283325,
            0.689393937587738,
            0.7272727489471436,
            0.6363636255264282,
            0.7348484992980957,
            0.7878788113594055,
            0.7878788113594055,
            0.7803030014038086,
            0.75,
            0.8030303120613098,
            0.8484848737716675,
            0.8257575631141663,
            0.7803030014038086,
            0.7272727489471436,
            0.8030303120613098,
            0.810606062412262,
            0.8484848737716675,
            0.8484848737716675,
            0.8560606241226196,
            0.8863636255264282,
            0.8712121248245239,
            0.8939393758773804,
            0.8636363744735718,
            0.9015151262283325,
            0.8484848737716675,
            0.8712121248245239,
          ],
          type: "scatter",
          symbolSize: "8",
          color: "#00ffff",
        },
      ],
    });
  });
  return (
    <div className="ml-container container-fluid position-relative bg-dark text-white">
      <div class="row">
        <div className="ml-sidebar position-sticky sticky-top col-lg-3 col-12">
          <h2 className="p-2 text-light">Machine Learning</h2>
          <div className="ml-sidebar-controls p-0 d-lg-block pt-lg-5 px-lg-0 px-3">
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

        <div className="col-lg-9 col-12 ml-project-container p-lg-5 px-md-1 px-0 py-0">
          <div className=" d-flex flex-column justify-content-lg-between justify-content-around align-items-end">
            <h3 className="ml-project-header pb-2 mr-5">Low Flying Objects</h3>
            <div className="ml-project-details container">
              <div className="row">
                <div className="ml-auto ml-project-desc d-flex flex-column justify-content-beteen p-3 col-lg-4 col-12">
                  <p class="pb-4 ">
                    Feature extraction of sound signals along with complete CNN
                    model fitting and evaluations. The color list of palette. If
                    no color is set in series, the colors would be adopted
                    sequentially and circularly from this list as the colors of
                    series.
                  </p>
                  <div>
                    <a
                      href="https://github.com/acen20/CNN-Tensorflow-Keras-for-sound-classification"
                      className="p-2 bg-dark text-white shadow-lg rounded"
                      target="_blank"
                    >
                      <GitHubIcon className="project-link-icon mr-2" />
                      <div className="d-inline-block">Github</div>
                    </a>
                    <a
                      href="https://colab.research.google.com/drive/1UPhu0kIQYwl9rAQ5MyybCHG02kB3JYIE?usp=sharing"
                      className="p-2 bg-dark text-white shadow-lg ml-2 rounded"
                      target="_blank"
                    >
                      <MenuBookIcon className="project-link-icon mr-2" />
                      <div className="d-inline-block">Notebook</div>
                    </a>
                  </div>
                </div>
                <div className="ml-project-graph col-lg-8 col-12 p-0">
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
