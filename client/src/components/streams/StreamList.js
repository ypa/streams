import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // Pull out as array from object for easier to map over
  // when rendering inside the component.
  // We had put state as object with ids as keys so that
  // it's easier for reducers to create new state object.
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);

