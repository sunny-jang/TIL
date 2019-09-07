import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'EunseonJang',
      phone: '010-2222-2222',
      id: 0,
    }
  }

  state = {
    // 우리는 수정 버튼을 눌렀을 때 editing 값을 true로 설정해줄 것입니다.
    // 이 값이 true 일 때에는, 기존에 텍스트 형태로 보여주던 값들을
    // input 형태로 보여주게 됩니다.
    editing: false,
    //input 의 값은 유동적이겠지요? input 값을 담기 위해서 각 필드를 위한 값도
    //설정합니다.
    name: '',
    phone: '',
  }

  handleRemove = () => {
    // When the remove button is clicked, put id at onRemove and invoke
    const { info, onRemove } = this.props;
    onRemove(info.id);
    console.log(onRemove)
  }

  //editing 값을 반전시키는 함수입니다.
  // true -> false, false -> true
  handleToggleEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    })

    console.log(this.state.editing)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { info, onUpdate } = this.props;
    if(!prevState.editing && this.state.editing) {
      //editing 값이 false -> true로 전환 될 때
      //info의 값을 state 에 넣어준다.
      this.setState({
        name: info.name,
        phone: info.phone
      })
    }

    if(prevState.editing && !this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!this.state.editing
      && !nextState.editing
      && nextProps.info === this.props.info) {
        return false;
      }

      return true;
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    }
    
    console.log(this.props.info.id);

    if(this.state.editing) {
      return(
        <div style={style}>
          <div>
            <input
            value={this.state.name}
            name="name"
            placeholder="이름"
            onChange={this.handleChange}
            />
          </div>
          <div>
            <input
            value={this.state.phone}
            name="phone"
            placeholder="전화번호"
            onChange={this.handleChange}
            />
          </div>
          <button onClick={this.handleToggleEdit}>submit</button>
          <button onClick={this.handleRemove}>delete</button>
        </div>
      ) 
    }

    const {
      name, phone, id
    } = this.props.info;


    return (
      <div style={style}>
        <div><b>{name}</b></div>
        <div>{phone}</div>
        <button onClick={this.handleToggleEdit}>edit</button>
        <button onClick={this.handleRemove}>delete</button>
      </div>
    )
  }
}

export default PhoneInfo;