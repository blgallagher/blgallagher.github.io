import React, { Component } from "react";
//  Validation Component has a very simple job.
// Simply print an error message, if we get one.
class Validation1Iron extends Component {
  render() {
    // Obtain the formErrors from props
    // and return the error it contains.
    const formErrorsLocal = this.props.formErrors1Iron;
    return (
      <div className="container-fluid">
        <div className="alert alert-warning">
          <strong>{formErrorsLocal.distance1Iron}</strong>
        </div>
      </div>
    ); // end of return
  } // end of render()
} // end of Validation class
export default Validation1Iron;
