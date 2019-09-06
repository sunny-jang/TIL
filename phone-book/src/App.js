import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import './App.css';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id=2
  state = {
    information: [
      {
        id: 0,
        name: 'EunseonJang',
        phone: '010-0000-0000',
      },
      {
        id: 1,
        name: 'HanjuMoon',
        phone: '010-0000-0001',
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id == !id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data} // make a new object and overwrite the data which we got.
        : info // maintain previous value.
      )
    })
  }

  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList
         data={this.state.information}
         onRemove={this.handleRemove}
         onUpdate={this.handleUpdate}
         />
      </div>
    );
  }
}

export default App;
