import React, { Component } from "react";
import "./assets/css/index.css";

class Main extends Component {
  render() {
    return (
      <div className="col-9 p-3" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <h4 className="text-color-primary">Organization</h4>
          </div>
          <div className="col-6 text-right">
            <button className="btn primary-btn">
              <i className="fas fa-user-plus mr-3" />
              Invite
            </button>
          </div>
        </div>
        <div className="pt-5 pr-3">
          <div className="card-columns">
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
            <div className="card strategy">
              <div className="card-body">
                <h5 className="card-title text-color-primary">Strategy</h5>
                <hr />
                <p className="card-text text-color-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas tincidunt, neque.
                </p>
                <button className="btn primary-btn">
                  <i className="fas fa-sign-in-alt mr-2" />
                  Enter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;