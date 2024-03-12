import React, { Component } from 'react';
import './Preloader.css'; // Import your preloader styles

class Preloader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // Simulate a delay to demonstrate loading
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    return this.state.loading ? (
      <div className="preloader">
        {/* Add your preloader animation here */}
        <p>Loading...</p>
      </div>
    ) : (
      <div className="content">
        {/* Your website content goes here */}
      </div>
    );
  }
}

export default Preloader;
