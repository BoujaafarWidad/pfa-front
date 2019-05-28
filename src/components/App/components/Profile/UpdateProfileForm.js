import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class UpdateProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      nom: this.props.user.nom,
      email: this.props.user.email,
      tel: this.props.user.tel,
      birthday: this.props.user.birthday,
      redirect: false
    };
  }

  _handleFormSubmit = event => {
    event.preventDefault();
    const profile = {
      id: this.state.id,
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
      birthday: this.state.birthday
    };
  };
  render() {
    return (
      <Fragment>
        <div className="col-10 pt-0 main-panel" id="main">
          <div className="row pt-5 pr-3 mt-5">
            <div className="col-4" />
            <div className="col-4">
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="john.doe@gmail.com"
                    value={this.state.email}
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    type="Date"
                    id="birthday"
                    className="form-control"
                    placeholder="jj/mm/aaaa"
                    value={this.state.birthday}
                    onChange={event =>
                      this.setState({ birthday: event.target.value })
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
      </Fragment>
    );
  }
}
const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(UpdateProfileForm);
