import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./UI/StreamForm";
import history from "../../history";
import ErrorMsg from "./UI/ErrorMsg";
import Loader from "./UI/Loader";


class StreamCreate extends React.Component {
  onSubmit = async (formValues) => {
    this.props.createStream(formValues);
  };
  renderForm() {
    if (this.props.isSignedIn === null) {
      return <Loader />;
    } else if (this.props.isSignedIn) {
      return (
        <React.Fragment>
          <h3>Create a Stream</h3>
          <StreamForm onSubmit={this.onSubmit} />
        </React.Fragment>
      );
    } else {
      return (
        <ErrorMsg
          title="Please Sign-in to start streaming"
          msg="To stream on this demo React App you will need to sign in with
        Google."
          onDissmiss={() => history.push("/")}
        />
      );
    }
  }
  render() {
    return <div className="ui container">{this.renderForm()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { createStream })(StreamCreate);
