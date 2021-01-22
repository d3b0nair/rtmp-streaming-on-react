import React from "react";
import StreamPlayer from "./video-player/StreamPlayer";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import Loader from "./UI/Loader";

class StreamShow extends React.Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <Loader />;
    }
    const { title, description } = this.props.stream;
    return (
      <div className="ui container purple segment">
        <StreamPlayer stream={this.props.stream} id={this.props.match.params.id}/>
        <div className="ui secondary segment">
          <h1>{title}</h1>
          <h5>{description}</h5>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream })(StreamShow);
