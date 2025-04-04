import { useState } from "react";
import { toast } from "react-toastify";
import "./GetInTouch.css";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState({
    fullName: false,
    email: false,
    company: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormValid({ ...isFormValid, [e.target.name]: e.target.value ? false : true });
  };

  const validateForm = () => {
    const errors = {
      fullName: !formData.fullName.trim(),
      email: !formData.email.trim(),
      company: !formData.company.trim(),
      message: !formData.message.trim(),
    };
    setIsFormValid(errors);
    return !Object.values(errors).some((field) => field);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://blackof-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(`Hi ${formData.fullName}, Thanks for reaching out!`);
        setFormData({ fullName: "", email: "", company: "", message: "" });
      } else {
        const errorData = await response.json();
        toast.error(errorData.errors?.[0]?.msg || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="get-in-touch-container" id="contact-us">
      <div className="get-in-touch-wrapper">
        <div className="get-in-touch-left">
          <h2 className="get-in-touch-title">Get In Touch</h2>
          <div className="get-in-touch-bar"></div>
          <p className="text-xl">For general inquiries</p>
          <p className="text-lg">Address: 110, 16th Road, Chembur, Mumbai - 400071</p>
          <p className="text-lg">
            Phone: <a href="tel:+912225208822" className="underline">+91 22 25208822</a>
          </p>
          <p className="text-lg">
            Email: <a href="mailto:info@supremegroup.co.in" className="underline">info@supremegroup.co.in</a>
          </p>
        </div>

        <div className="lg:w-1/2">
          <form onSubmit={submitForm} className="get-in-touch-form">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="get-in-touch-input"
            />
            {isFormValid.fullName && <span className="get-in-touch-error">Please enter Full Name</span>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="get-in-touch-input"
            />
            {isFormValid.email && <span className="get-in-touch-error">Please enter a valid email</span>}

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
              className="get-in-touch-input"
            />
            {isFormValid.company && <span className="get-in-touch-error">Please enter Company name</span>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="get-in-touch-textarea"
            ></textarea>
            {isFormValid.message && <span className="get-in-touch-error">Please enter a message</span>}

            <button type="submit" className="get-in-touch-button">
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
