import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    // Update that fish
    // 1. Take a copy of the current fish
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    // And pass it to the updateFish method of the App component passed down through props
    this.props.updateFish(this.props.fishKey, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit" key={this.props.fish.name}>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
      </div>
    );
  }
}

export default EditFishForm;
