import React from "react";
import "./ML.css";
import GitHubIcon from "@material-ui/icons/GitHub";

function ML() {
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
                <div className="ml-auto ml-project-desc d-flex flex-column justify-content-between p-3 col-6">
                  <p class="pb-4">
                    Feature extraction of sound signals along with complete CNN
                    model fitting and evaluations. Картина «У омута» является
                    одним из трёх самых больших по размеру произведений
                    художника — наряду с полотнами «Над вечным покоем» (1894) и
                    «Озеро» (1899—1900). Вместе с двумя другими
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
                <div className="ml-project-graph col-6">dsadsad</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ML;
