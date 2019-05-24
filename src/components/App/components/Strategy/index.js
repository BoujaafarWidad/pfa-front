import React, { Component, Fragment } from "react";
import Sidebar from "./components/Sidebar/index";
import Overview from "./components/Overview/index";
import Header from "../Header/index";
import "./assets/css/index.css";
import axios from "axios";
import Spinner from "../Spinner";

class Strategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentWillMount() {
    axios
      .get(
        `http://localhost:8080/strategies/${this.props.match.params.idStrategy}`
      )
      .then(
        res => {
          this.setState({ selected: this._formatSWOT(res.data) });
        },
        () => (document.title = `Workspace - ${this.state.selected.nom}`)
      )
      .catch(e => console.log(e));
  }

  _formatSWOT = strategy => {
    strategy.swot.sItems = this._getItems(
      strategy.swot.s ? strategy.swot.s : ""
    );
    strategy.swot.wItems = this._getItems(
      strategy.swot.w ? strategy.swot.w : ""
    );
    strategy.swot.oItems = this._getItems(
      strategy.swot.o ? strategy.swot.o : ""
    );
    strategy.swot.tItems = this._getItems(
      strategy.swot.t ? strategy.swot.t : ""
    );
    return strategy;
  };

  _getItems = text => this._removeEmpty(text.split("___special#separator___"));

  _removeEmpty = arr => arr.filter(e => e);

  render() {
    return (
      <Fragment>
        <Header />
        {(this.state.selected && (
          <div className="row" id="strategy">
            <Sidebar
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
            />
            <Overview
              selected={this.state.selected}
              idSelectedOrganization={this.props.match.params.idOrganization}
            />
          </div>
        )) || <Spinner />}
      </Fragment>
    );
  }
}

export default Strategy;
