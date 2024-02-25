import React, { useState } from "react";

function BuyStock() {
  const [formData, setFormData] = useState({
    buyingPrice: "",
    companySymbol: "",
    stopLoss: "",
    target: "",
    dateOfSelling: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data to the console
    console.log(formData);

    // Make a POST request to the API
    fetch('http://localhost:5000/v2/user/buy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Data submitted successfully');

        // Reset form fields after successful submission
        setFormData({
          buyingPrice: "",
          companySymbol: "",
          stopLoss: "",
          target: "",
          dateOfSelling: ""
        });
      } else {
        console.error('Failed to submit data');
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <form className="modal-content" onSubmit={handleSubmit}>
      <div className="container">
        <h1>Stock Buying Details</h1>
        <label htmlFor="buyingPrice"><b>Buying Price</b></label>
        <input
          type="number"
          placeholder="Enter Buying Price"
          name="buyingPrice"
          value={formData.buyingPrice}
          onChange={handleChange}
          required
        />

        <label htmlFor="companySymbol"><b>Company Symbol</b></label>
        <input
          type="text"
          placeholder="Enter Company Symbol"
          name="companySymbol"
          value={formData.companySymbol}
          onChange={handleChange}
          required
        />

        <label htmlFor="stopLoss"><b>Stop Loss</b></label>
        <input
          type="number"
          placeholder="Enter Stop Loss"
          name="stopLoss"
          value={formData.stopLoss}
          onChange={handleChange}
          required
        />

        <label htmlFor="target"><b>Target</b></label>
        <input
          type="number"
          placeholder="Enter Target"
          name="target"
          value={formData.target}
          onChange={handleChange}
          required
        />

        <label htmlFor="dateOfSelling"><b>Date of Selling</b></label>
        <input
          type="date"
          name="dateOfSelling"
          value={formData.dateOfSelling}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default BuyStock;
