import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./UI/Modal";
import history from "../../history";
import { fetchStream } from "../../actions";
import Loader from "./UI/Loader";
import CopyField from "./UI/CopyField";

class StreamConfirmation extends React.Component {
  renderContent() {
    return (
      <div className="ui container">
        <h4>To proceed streaming over OBS use the following settings:</h4>
        <CopyField value={"rtmp://3.139.239.234/live"} label={"Server"} />
        <CopyField value={this.props.stream.id} label={"Streamkey"} />
      </div>
    );
  }
  renderActions() {
    return (
      <React.Fragment>
        <Link to="/" className="ui button">
          Dismiss
        </Link>
        <Link
          to={`/streams/${this.props.stream.id}`}
          className="ui primary button"
        >
          Open my stream
        </Link>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.stream) {
      return <Loader />;
    }
    return (
      <Modal
        title="Streaming Details"
        msg={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamConfirmation);
