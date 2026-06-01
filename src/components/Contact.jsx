import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page page">
      <div className="contact-header">
        <p>// SEND A MESSAGE</p>
        <h1>WE'LL REPLY WITHIN 24H</h1>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <div>
            <label>YOUR NAME</label>
            <input type="text" placeholder="Ali Hourani" />
          </div>

          <div>
            <label>EMAIL ADDRESS</label>
            <input type="email" placeholder="you@example.com" />
          </div>
        </div>

        <label>TOPIC</label>
        <select>
          <option>Select a topic</option>
          <option>Workout Plan Help</option>
          <option>Nutrition Advice</option>
          <option>BMI / Calories Calculator</option>
          <option>Progress Tracking</option>
          <option>Other</option>
        </select>

        <label>PHONE NUMBER</label>
        <input type="text" placeholder="+961-XX-XXXXXX" />

        <label>MESSAGE</label>
        <textarea placeholder="Tell us about your fitness goal or question..." />

        <button type="button">Send Message →</button>
      </form>

      <div className="contact-info">
        <p><FaEnvelope /> info@fitforge.com</p>
        <p><FaPhone /> +92 300 1234567</p>
        <p><FaMapMarkerAlt /> Lebanon</p>
      </div>
    </section>
  );
}

export default Contact;