import React, { useState } from 'react';
import './Chat.css';
import { MdClose, MdChat } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Chat = () => {
  const [showModel, setShowModel] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closePopup = () => {
    setShowModel(false);
  };

  const openPopup = () => {
    setShowModel(true);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowModel(false);
    toast.success('Thank you! We will contact you shortly.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
  };

  return (
    <div className="bubble">
      {!showModel && (
        <div className="chat-icon" onClick={openPopup}>
          <MdChat />
        </div>
      )}

      <div className="chat-popup" id="myForm" style={{ display: showModel ? 'block' : 'none' }}>
        <div className="close-icon" onClick={closePopup}>
          <MdClose />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <h1>Hi, please enter your details and we will contact you soon</h1>

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <textarea type="text" placeholder="Enter your name" name="name" required />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <textarea type="email" placeholder="Enter your email" name="email" required />

          <label htmlFor="mobile">
            <b>Mobile Number</b>
          </label>
          <textarea type="text" placeholder="Enter your mobile number" name="mobile" required />

          <button type="submit" className="btn">
            Send
          </button>

          
        </form>
      </div>

      <ToastContainer autoClose={3000} />
    </div>
    
  );
};

export default Chat;
