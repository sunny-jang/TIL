import React, { Component } from 'react';

const Problematic = () => {
  throw (new Error(`It's a bug!!!`));
  return (
    <div>

    </div>
  );
}

class Counter extends Component {
  state = {
    number: 0
  }

  static defaultProps = {
    onIncrement: () => console.warn(`onIncrement is not defined`),
    object: {},
    array: [1],
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log(`componentWillMount (deprecated)`);
  }

  componentDidMount() {
    console.log(`componentDidMount`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //5의 배수라면 리렌더링 하지 않음
    console.log(`shouldComponentUpdate`);
    if(nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`componentWillUpdate`);
  }

  componentDidUpdate(preProps, preState) {
    console.log(`componentDidUpdate`);
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    })
  }

  handleDecrease = () => {
    this.setState(
      ({ number }) => ({
        number: number - 1
      })
    )
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true
    })
  }

  render() {
    if (this.state.error) return (<h1>It's Error!</h1>);
    if (!this.props.object || !this.props.array || this.props.array.length === 0) return null;
     // object 나 array 를 사용하는 코드
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        { this.state.number === 4 && <Problematic />}
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
 }



export default Counter;