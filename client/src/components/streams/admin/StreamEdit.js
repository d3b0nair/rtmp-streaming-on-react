import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../../actions";
import StreamForm from "../UI/StreamForm";
import StreamAdminForm from "../admin/StreamAdminForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderStreamForm() {
    return (
      <div className="ui container">
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    return (
      <StreamAdminForm
        stream={this.props.stream}
        currentUserId={this.props.currentUserId}
        ifHasAccess={this.renderStreamForm()}
        errorTitle="Access denied"
        errorMsg="You don't have an premission to edit this stream."
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
