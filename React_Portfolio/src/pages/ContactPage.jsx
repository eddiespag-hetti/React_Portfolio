import '../index.css';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <h1>Contact Page</h1>
      <div className="container">
        <form action="action_page.php">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message.."
            style={{ height: '200px' }} // Pass style as an object
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
