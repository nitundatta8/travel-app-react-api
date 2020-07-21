import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from './actions';

class TravelControl extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(makeApiCall());
  // }

  render() {

    return (
      <React.Fragment>

      </React.Fragment>
    );

  }
};

const mapStateToProps = state => {
  return {
    // headlines: state.headlines,
    // isLoading: state.isLoading,
    // error: state.error
  }
}

export default connect(mapStateToProps)(TravelControl);
