import React, { Component } from "react";
import "./assets/css/index.css";
import shortId from "shortid";

class Overview extends Component {
  _renderSWOTItem = item => <li key={shortId.generate()}>{item}</li>;

  render() {
    return (
      <div className="col-10 p-3 main-panel" id="main">
        <div className="row pr-3" id="main-bar">
          <div className="col-6 text-left">
            <span className="text-color-secondary">
              Strategy / {this.props.selected.nom} /{" "}
            </span>
            <span className="text-color-primary">Overview</span>
          </div>
        </div>
        <div className="pt-5 pr-3 pl-3">
          <div className="row">
            <div className="col-3 text-color-primary">Name</div>
            <div className="col-9 text-color-secondary">
              {this.props.selected.nom}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Strategist</div>
            <div className="col-9 text-color-secondary">
              {this.props.selected.stratege.nom}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Description</div>
            <div className="col-9 text-color-secondary">
              {this.props.selected.desc}
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">Period</div>
            <div className="col-9 text-color-secondary">
              <table>
                <tbody>
                  <tr>
                    <td>From</td>
                    <td className="text-color-primary pl-5">
                      {this.props.selected.dateDebut}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-left">To</td>
                    <td className="text-color-primary pl-5">
                      {this.props.selected.dateFin}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-3 text-color-primary">SWOT</div>
            <div id="swot" className="col-9 text-color-primary">
              <div className="row" id="swot-matrix">
                <div className="col">
                  <div className="swot-header swot-header-s">S</div>
                  <div className="swot-body swot-body-s">
                    <ul>
                      {this.props.selected.swot.sItems.map(
                        this._renderSWOTItem
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-w">W</div>
                  <div className="swot-body swot-body-w">
                    <ul>
                      {this.props.selected.swot.wItems.map(
                        this._renderSWOTItem
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-o">O</div>
                  <div className="swot-body swot-body-o">
                    <ul>
                      {this.props.selected.swot.oItems.map(
                        this._renderSWOTItem
                      )}
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="swot-header swot-header-t">T</div>
                  <div className="swot-body swot-body-t">
                    <ul>
                      {this.props.selected.swot.tItems.map(
                        this._renderSWOTItem
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
