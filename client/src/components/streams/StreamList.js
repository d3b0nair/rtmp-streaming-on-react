import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";
import StreamPlayer from "./video-player/StreamPlayer";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin(userId, id) {
    if (userId === this.props.currentUserId) {
      return (
        <div className="ui buttons">
          <Link to={`/streams/edit/${id}`} className="ui  button primary">
            Edit
          </Link>
          <div className="or"></div>

          <Link to={`/streams/delete/${id}`} className="ui  button negative">
            Delete
          </Link>
        </div>
      );
    }
  }
  renderList() {
    return this.props.streams.map(
      ({ id, title, description, userId, userName, userImg }) => {
        return (
          <div key={id} className="ui centered card">
            <div className="image">
              <StreamPlayer stream={{ id }} id={id} preview={true} />
            </div>
            <div className="content">
              <Link className="header" to={`/streams/${id}`}>
                {title}
              </Link>
              <div className="description">
                <p>{description}</p>
              </div>
            </div>
            {this.renderAdmin(userId, id)}

            <div className="ui bottom right attached circular image basic label">
              <img
                alt="Creator"
                className="ui right spaced avatar image"
                src={userImg}
              />
              {userName}
            </div>
          </div>
        );
      }
    );
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link
          to="/streams/new"
          className="ui right floated button primary"
          style={{ margin: "3% 0 0 5%" }}
        >
          Create Stream
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="ui container">
        <h2>All streams</h2>
        <div className="ui three stackable cards">{this.renderList()}</div>
        {window.innerWidth < 800 ? this.renderCreate() : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
