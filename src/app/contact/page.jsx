import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    // Yahaan par aap apna backend API call kar sakte hain
    console.log(formData);
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="max-w-lg mx-auto p-4 md:p-6 lg:p-8 mt-10 mb-10 bg-white rounded-lg shadow-md md:shadow-lg lg:shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      {success ? (
        <p className="text-lg text-green-600 mb-6">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 pl-10 text-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="block w-full p-2 pl-10 text-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg font-bold mb-2" htmlFor="message">Message:</label>
            <textarea
              id="message"
              className="block w-full p-2 pl-10 text-lg border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
