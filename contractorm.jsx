import React, { useState } from 'react';

const ContractForm = () => {
  // Defining state for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contractDetails: '',
    city: '',
    gender: ''
  });

  // Handler to update state when form inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted! You can check the data in the display below.');
  };

  return (
    <div>
      <h2>Contract Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="contractDetails">Contract Details:</label>
          <textarea
            id="contractDetails"
            name="contractDetails"
            value={formData.contractDetails}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Ishwardi">Ishwardi</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>

        <div>
          <label>Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleInputChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleInputChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleInputChange}
          />
          <label htmlFor="other">Other</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      <h3>Updated Contract Data:</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Contract Details:</strong> {formData.contractDetails}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
    </div>
  );
};

export default ContractForm;
