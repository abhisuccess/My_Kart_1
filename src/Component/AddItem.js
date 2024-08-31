import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price } = this.state;
    if (name && price) {
      this.props.addItem(name, parseFloat(price)); // Pass name and price to addItem
      this.setState({ name: '', price: '' }); // Clear the inputs after submission
    } else {
      alert('Please enter both name and price');
    }
  };

  render() {
    return (
      <form className="d-flex align-items-center" onSubmit={this.handleSubmit}>
        <div className="mb-3 me-2">
          <label htmlFor="nameInput" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter product name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
        <div className="mb-3 me-2">
          <label htmlFor="priceInput" className="form-label"></label>
          <input
            type="number"
            className="form-control"
            id="priceInput"
            placeholder="Enter price"
            value={this.state.price}
            onChange={this.handlePriceChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 ml-4">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
