import React, { Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
  render(){
    const { stateItem } = this.props;
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info" 
                onClick = { () => stateItem('all') } >All</button>
        <button type="button"
                className="btn btn-outline-secondary" 
                onClick = { () => stateItem('active') } >Active</button>
        <button type="button"
                className="btn btn-outline-secondary" 
                onClick = { ()=>stateItem('done') } >Done</button>
      </div>
    );
  };
};

