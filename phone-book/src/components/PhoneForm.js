import React, { Component } from 'react';

class PhoneForm extends Component {
  state = {
    name: '',
    phone: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
     // prevent to reload
     e.preventDefault();
    // transfer the value by onCreate
    this.props.onCreate(this.state);
    // initialise state
    this.setState({
      name: '',
      phone: '',
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />

        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <button type="submit">등록</button>
        <div>{this.state.name} {this.state.phone}</div>
      </form>
    )
  }
}

export default PhoneForm;