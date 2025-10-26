import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {


const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b6ab2f48-db45-4e26-987f-8ffd1abab1b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through our contact form or use the details below to get in touch. 
                We value your feedback, questions, and style suggestions as we continue to bring you the 
                best in fashion and comfort through our clothing collections.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@chicart.in</li>
                <li><img src={phone_icon} alt="" />+91 98765 43210</li>
                <li><img src={location_icon} alt="" />Manufactured @Mumbai</li>
            </ul>

        </div> 
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Email</label>
                <input type="mail" name='mail'placeholder='Enter your E-mail' required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btm dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
            
        </div> 
    </div>
  )
}

export default Contact