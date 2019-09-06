import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'EunseonJang',
      phone: '010-2222-2222',
      id: 0,
    }
  }

  handleRemove = () => {
    // When the remove button is clicked, put id at onRemove and invoke
    const { info, onRemove } = this.props;
    onRemove(info.id);
    console.log(onRemove)
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    console.log(this.props)

    const {
      name, phone, id
    } = this.props.info;
    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleRemove}>삭제</button>
      </div>
    )
  }
}

export default PhoneInfo;