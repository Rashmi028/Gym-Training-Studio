import './index.css'

function Contact(){

    return(
        <>

<section id="contact" class="contact flex">
{/* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991561741!3d32.206399320166405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1602078001331!5m2!1sen!2sin"
  class="flex-50"
  frameborder="0"
  style="border: 0"
  allowfullscreen=""
  aria-hidden="false"
  tabindex="0"
></iframe> */}
<div class="flex-50 form-container">
  <form action="">
    <fieldset>
      <div class="flex justify-between">
        <input
          class="form-control flex-48"
          name="name"
          type="text"
          placeholder="Your Name*"
          required
        />
        <input
          class="form-control flex-48"
          name="email"
          type="email"
          placeholder="Your Email*"
          required
        />
      </div>
      <input
        name="subject"
        class="form-control"
        type="text"
        placeholder="Subject"
      />
      <textarea
        class="form-control"
        rows="6"
        name="message"
        placeholder="Message"
      ></textarea>
      <input class="btn" type="submit" value="Send Message" />
    </fieldset>
  </form>
</div>
</section>
</>
)}

export default Contact