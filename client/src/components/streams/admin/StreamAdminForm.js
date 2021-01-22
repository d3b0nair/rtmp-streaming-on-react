import React from "react";
import history from "../../../history";
import ErrorMsg from "../UI/ErrorMsg";
import Loader from "../UI/Loader";

class StreamAdminForm extends React.Component {
  permissionCheck() {
    if (!this.props.stream && !this.props.currentUserId) {
      return <Loader />;
    } else if (this.props.stream.userId === this.props.currentUserId) {
      return <React.Fragment>{this.props.ifHasAccess}</React.Fragment>;
    } else {
      return (
        <div className="ui container">
          <ErrorMsg
            title={this.props.errorTitle}
            msg={this.props.errorMsg}
            onDissmiss={() => history.push("/")}
          />
        </div>
      );
    }
  }
  render() {
    return <React.Fragment>{this.permissionCheck()}</React.Fragment>;
  }
}

export default StreamAdminForm;
