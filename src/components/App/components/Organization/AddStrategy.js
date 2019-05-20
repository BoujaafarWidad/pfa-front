import React, { Component, Fragment } from "react";
import AddStrategyForm from "./components/AddStrategyForm";
import Sidebar from "./components/Sidebar";
import Header from "../Header";
import { connect } from "react-redux";

class AddStrategy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  componentWillMount() {
    document.title = "Workspace";
    this.setState({
      selected: this.props.organizations.find(
        ({ id }) => id === Number(this.props.match.params.idOrganization)
      )
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.selected && (
          <div className="row" id="strategy-add">
            <Sidebar selected={this.state.selected} update />
            <AddStrategyForm selected={this.state.selected} />
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ organizations }) => ({ organizations });

export default connect(mapStateToProps)(AddStrategy);
