import React from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import history from "../../../history";

class LoadingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ loading: false }), 10000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  loadingUI() {
    return (
      <React.Fragment>
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Loading</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
      </React.Fragment>
    );
  }
  errorMsg() {
    return (
      <Modal
        title="Can't load the resource."
        msg="Try again later."
        actions={
          <React.Fragment>
            <button
              onClick={() => window.location.reload()}
              className="ui button  primary"
            >
              Reload
            </button>
            <Link to="/" className="ui button primary">
              Home
            </Link>
          </React.Fragment>
        }
        onDismiss={() => history.push("/")}
      />
    );
  }
  setLoading() {
    if (this.state.loading === true) {
      return this.loadingUI();
    } else if (this.state.loading === false) {
      return this.errorMsg();
    }
    return null;
  }

  render() {
    return <React.Fragment>{this.setLoading()}</React.Fragment>;
  }
}
export default LoadingText;
