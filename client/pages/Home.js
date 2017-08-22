import React from 'react';
import { connect } from 'react-redux';

function Home() {
  return (
    <div>
      Route Component: Home2
    </div>
  );
}

function mapStateToProps() {
  return {};
}

//export default connect(mapStateToProps)(Home);
export default Home;
