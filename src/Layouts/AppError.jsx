import React, { Component } from 'react'

export default class AppError extends Component {
    constructor(props) {
        super(props);
        this.state = {error: ""};
      }
    
      componentDidCatch(error) {
        this.setState({error: `${error.name}: ${error.message}`});
      }
  render() {
    const {error} = this.state;
    if (error) {
        console.log("error acurd",error);
      return (
        <div>{error}</div>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
