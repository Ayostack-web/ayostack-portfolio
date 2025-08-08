// app/components/Contact.jsx

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>📬Contact Me</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div id="form-message"></div>
    </section>
  )
}
