import React from "react";
import { getFunName } from "../helpers.js";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    // Prevents the from from submitting and refreshing the page
    event.preventDefault();
    // Fetch the text from the input
    const storeName = this.myInput.current.value;
    // Change the page
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;
