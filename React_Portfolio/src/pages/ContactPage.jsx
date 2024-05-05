

import  { useState } from 'react';
import '../index.css';

const ContactPage = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Check if any of the input fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Do something with the form data, e.g., send it to a server
    console.log(formData);
  
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  

  return (
    <section className="contact-page">
      <h1>Contact Page</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleInputChange}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message.."
            style={{ height: '200px' }}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
