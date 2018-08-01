
/**
 * Routeservers List component
 */


import React from 'react'
import { connect } from 'react-redux'

import{ Link } from 'react-router-dom'

import { loadRouteservers } from 'components/routeservers/actions'

// Components
import Status from './status'


class RouteserversList extends React.Component {

  componentDidMount() {
    this.props.dispatch(
      loadRouteservers()
    );
  }

  render() {
    let routeservers = this.props.routeservers.map((rs) =>
      <li key={rs.id}>
       <Link to={`/routeservers/${rs.id}`}>
        <span className="routeserver-id">{rs.name}</span>
        <Status routeserverId={rs.id} />
       </Link>
      </li>
    );

    return (
      <div className="routeservers-list">
        <h2>route servers</h2>
        <ul> 
          {routeservers}
        </ul>
      </div>
    );
  }
}


export default connect(
  (state) => {
    return {
      routeservers: state.routeservers.all
    };
  }
)(RouteserversList);


