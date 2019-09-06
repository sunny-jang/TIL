import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove:() => console.log('onRemove not defined'),
    onUpdate:() => console.log('onUpdate not defiend')
  }
  render() {
   const { data, onRemove, onUpdate } = this.props;
   console.log(this.props)
   const list = data.map(
     //(info, index) => (<PhoneInfo key={index} info={info} />)
     info => (<PhoneInfo
      key={info.id} 
      info={info} 
      onRemove={onRemove}
      onUpdate={onUpdate}
      />)
   );
    return (
      <div>
        {list}
      </div>
    )
  }
}

export default PhoneInfoList;