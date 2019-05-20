import React, { Component, Fragment } from "react";
import "./assets/css/index.css";
import { updateOrganization } from "../../../../../../redux/actions/organizationActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class UpdateOrganizationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nom: "",
      desc: "",
      adr: "",
      tel: "",
      owner: this.props.user,
      redirect: false,
      selected: null
    };
  }

  componentWillMount() {
    const organization = this.props.organizations.find(
      ({ id }) => id === this.props.selected
    );
    this.setState({ selected: organization }, () => {
      this.setState({
        id: organization.id,
        nom: organization.nom,
        desc: organization.desc,
        adr: organization.adr,
        tel: organization.tel
      });
    });
  }

  _handleFormSubmit = event => {
    event.preventDefault();
    this.props.updateOrganization(this.state);
    this.setState({ redirect: true });
  };

  _handleRedirect = () => {
    if (this.state.redirect && this.state.selected) {
      return <Redirect to={`/app/organizations/${this.state.selected.id}`} />;
    }
  };

  render() {
    return (
      <Fragment>
        {this._handleRedirect()}
        {this.state.selected && (
          <div className="col-9 pt-3" id="main">
            <div className="pr-3 row" id="main-bar">
              <div className="col">
                <span className="text-color-secondary">
                  Workspace / {this.state.selected.nom} /{" "}
                </span>
                <span className="text-color-primary">Update organization</span>
              </div>
            </div>
            <div className="row pt-5 pr-3 mt-5">
              <div className="col-3" />
              <div className="col-6">
                <form
                  id="organization-update-form"
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
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user, organizations }) => ({ user, organizations });

export default connect(
  mapStateToProps,
  {
    updateOrganization
  }
)(UpdateOrganizationForm);
