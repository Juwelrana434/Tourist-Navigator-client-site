import { useState } from "react";
// import { FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactEmail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_g4vy0sj", // Replace with your EmailJS service ID
        "template_s85qtbr", // Replace with your EmailJS template ID
        e.target,
        "ozR5Qbwk1h8GoqcfV" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Success:", response);
          setStatusMessage("Your message has been sent successfully!");
          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error:", error);
          setStatusMessage("Failed to send the message. Please try again later.");
          setIsSuccess(false);
        }
      );
  };

  return (
    <div className=" mt-16 max-w-4xl mx-auto px-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>

      <div className="bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 btn btn-accent text-white rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <p
            className={`mt-4 text-center ${
              isSuccess ? "text-green-500" : "text-red-500"
            }`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactEmail;
