import React, { useEffect } from "react";
import "./ML.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import * as echarts from "echarts";
import SectionHeading from "./SectionHeading";
import { ml_projects } from "./data.js";

// initialize the echarts instance

function ML() {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("ml-graph"));
    myChart.setOption(ml_projects[0].graph_options);

    var cm_map = echarts.init(document.getElementById("cm-container"));
    cm_map.setOption(ml_projects[0].cm_options);

    window.onresize = () => {
      myChart.resize();
      cm_map.resize();
    };
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
                      <GitHubIcon className="project-link-icon mr-1" />
                      <div className="d-inline-block">Github</div>
                    </a>
                    <a
                      href="https://colab.research.google.com/drive/1UPhu0kIQYwl9rAQ5MyybCHG02kB3JYIE?usp=sharing"
                      className="p-2 bg-dark text-white shadow-lg ml-1 rounded"
                      target="_blank"
                    >
                      <MenuBookIcon className="project-link-icon mr-1" />
                      <div className="d-inline-block">Colab</div>
                    </a>
                  </div>
                </div>
                <div className="ml-project-graph col-lg-8 col-12 p-0">
                  <div className="m-0 pt-4 text-white" id="ml-graph"></div>
                </div>
                <div className="ml-cm-map col-lg-4 col-12">
                  <div id="cm-container" className=""></div>
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
