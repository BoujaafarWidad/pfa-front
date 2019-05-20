import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { connect } from "react-redux";
import { newOrganization } from "../../../../../../redux/actions/organizationActions";
import { Redirect } from "react-router-dom";
import shortId from "shortid";

class AddOrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nom: "",
      desc: "",
      adr: "",
      tel: "",
      owner: this.props.user,
      redirect: false
    };
  }

  _handleFormSubmit = event => {
    event.preventDefault();
    const id = shortId.generate();
    this.props.newOrganization({
      ...this.state,
      id
    });
    this.setState({ redirect: true, id });
  };

  _handleRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/app/organizations/${this.state.id}`} />;
    }
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        <div className="col-9 pt-3" id="main">
          <div className="pr-3 row" id="main-bar">
            <div className="col">
              <span className="text-color-secondary">Workspace / </span>
              <span className="text-color-primary">New organization</span>
            </div>
          </div>
          <div className="row pt-5 pr-3 mt-5">
            <div className="col-3" />
            <div className="col-6">
              <form
                id="organization-add-form"
                onSubmit={this._handleFormSubmit}
              >
                <div className="form-group">
                  <label htmlFor="nom" className="text-color-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="nom"
                    className="form-control"
                    placeholder="Akatsuki"
                    value={this.state.nom}
                    onChange={event =>
                      this.setState({ nom: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="text-color-primary">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-control"
                    placeholder="+1-541-754-3010"
                    value={this.state.tel}
                    onChange={event =>
                      this.setState({ tel: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address" className="text-color-primary">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="445 Mount Eden Road, Mount Eden, Auckland."
                    value={this.state.adr}
                    onChange={event =>
                      this.setState({ adr: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    rows="3"
                    placeholder="A group of shinobi that existed outside the usual system of hidden villages."
                    value={this.state.desc}
                    onChange={event =>
                      this.setState({ desc: event.target.value })
                    }
                  />
                </div>
                <button type="submit" className="btn primary-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(
  mapStateToProps,
  {
    newOrganization
  }
)(AddOrganizationForm);
