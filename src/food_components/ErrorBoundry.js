import React, { Component } from "react";


class ErrorBoundry extends Component {
   constructor(props) {
       super(props);
       this.state = {
           hasErrorBug: false
       }
   }

   componentDidCatch(errorOne, infoOne) {
    this.setState({ hasErrorBug: true })
 }

   render() {
       if (this.state.hasErrorBug) {
           return <h1>Sorry! It is in private mode...</h1>
       }
      return this.props.children
   }
}


export default ErrorBoundry;
