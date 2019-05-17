import React, { Component } from "react";
import "./assets/css/index.css";

class Overview extends Component {
  render() {
    return (
      <div className="col-9 p-3" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <span className="text-color-secondary">
              Organization / Strategy /{" "}
            </span>
            <span className="text-color-primary">Overview</span>
          </div>
        </div>
        <div className="pt-5 pr-3 pl-3">
          <div className="row">
            <div className="col-3 text-color-primary">Strategist</div>
            <div className="col-9 text-color-secondary">Jane Doe</div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">SWOT</div>
            <div id="swot" className="col-9 text-color-primary">
              <div className="row">
                <div className="col">
                  <div className="swot-header swot-header-s">S</div>
                  <div className="swot-body swot-body-s">Lorem Ipsum</div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-w">W</div>
                  <div className="swot-body swot-body-w">Lorem Ipsum</div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-o">O</div>
                  <div className="swot-body swot-body-o">Lorem Ipsum</div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-t">T</div>
                  <div className="swot-body swot-body-t">Lorem Ipsum</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Analyzis Grid</div>
            <div className="col-9 text-color-secondary">Grid</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
