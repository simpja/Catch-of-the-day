import { object } from "prop-types";
import React from "react";
import AddFishForm from "./AddFishForm.js";
import EditFishForm from "./EditFishForm.js";

class Inventory extends React.Component {
  addEditFishForm = (key) => {
    return (
      <EditFishForm
        key={key}
        fishKey={key}
        fish={this.props.fishes[key]}
        updateFish={this.props.updateFish}
      />
    );
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.addEditFishForm)}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes!
        </button>
      </div>
    );
  }
}

export default Inventory;
