import React from 'react';
import style from './style.scss';

class Nameplate extends React.Component {
  render() {
    let {name, instrument} = this.props;

    return (
      <div className="member">
        <div className={"instrument " + instrument}>
        </div>
        <div className="name">
          {name}
        </div>
      </div>
    );
  }
}

export default Nameplate;