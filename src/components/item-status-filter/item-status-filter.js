import React, { Component} from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component{
  render(){
    const { stateItem } = this.props;
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info">All</button>
        <button type="button"
                className="btn btn-outline-secondary" 
                onClick = { () => stateItem(false) }>Active</button>
        <button type="button"
                className="btn btn-outline-secondary" 
                onClick = { ()=>stateItem(true) }>Done</button>
      </div>
    );
  };
};

