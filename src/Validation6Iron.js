import React, { Component } from "react";
//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
// You can obviously make this Component as stylish as you required
// Here, we go for a basic print out of the error message.
class Validation6Iron extends Component {
  render() {
    // Obtain the formErrors from props
    // Remember the App has this.state.formErrors which is a JSON
    // object holding error messages for us about the form
    const formErrorsLocal = this.props.formErrors6Iron;
    return (
      <div className="container-fluid">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.distance6Iron}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default Validation6Iron;
