// Contact.jsx
import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import Upload from '../Upload/Upload';

const Contact = () => {
  const [result, setResult] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [uploadUrl, setUploadUrl] = React.useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // Replace with your key

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
      setSelectedFile(null);
      setUploadUrl('');
    } else {
      console.error('Error', data);
      setResult(data.message);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Have a story to share, a project to discuss, or a question for us?
          We’d love to hear from you! Reach out to Yuvas Film Production for collaborations, casting, partnerships, or general inquiries. Let’s create something extraordinary together.</p>

        <ul>
          <li><img src={mail_icon} alt="" />yuvasfilmproduction@gmail.com</li>
          <li><img src={phone_icon} alt="" />+91 98231 90565</li>
          <li><img src={location_icon} alt="" />Yuvraj Apartment, Chandansar Rd, near Solanki School, Sai Nath Nagar, Virar East, Mumbai, Virar, Maharashtra 401305</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your phone number" required />

          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder="Enter your message"></textarea>

          <label>Upload Portfolio (PDF or ZIP)</label>
          <input type="file" accept=".pdf,.zip" onChange={handleFileChange} />

          {/* Hidden input to include uploaded file URL in Web3Forms */}
          <input type="hidden" name="portfolio_url" value={uploadUrl} />

          {selectedFile && (
            <Upload file={selectedFile} setUploadUrl={setUploadUrl} />
          )}

          <button type="submit">Submit Form</button>
          <p>{result}</p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
