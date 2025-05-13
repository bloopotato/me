"use client";
import React, { useState } from "react";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "@/components/Popup";
import Links from "./Links";
import Scramble from "@/components/Scramble";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setResult("Sending...");

    const formData = new FormData(form);
    formData.append("access_key", "e4d6de7a-169c-48dd-83b0-0c8914fe7ba6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setSuccess(true);
      setResult("Message sent successfully!");
      form.reset();
    } else {
      setSuccess(false);
      setResult("Something went wrong. Please try again.");
    }
    setShowPopup(true);
  };

  return (
    <div>
      <div
        id="contact"
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-[50px] py-[40px]"
      >
        <form className="flex flex-col gap-[10px]" onSubmit={onSubmit}>
          <h1 className="text-title text-[36px] font-bold">
            <Scramble input="Get In Touch" />
          </h1>
          <div className="flex flex-col text-[20px] font-bold gap-[5px]">
            <label>Name</label>
            <input
              className="text-colour2 text-[16px] font-normal border-[2px] border-colour2
            rounded-[10px] p-[10px] focus:outline-[3px] focus:outline-colour2 focus:outline-offset-[-3px]"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col text-[20px] font-bold gap-[5px]">
            <label>Email</label>
            <input
              className="text-colour2 text-[16px] font-normal border-[2px] border-colour2
            rounded-[10px] p-[10px] focus:outline-[3px] focus:outline-colour2 focus:outline-offset-[-3px]"
              type="text"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col text-[20px] font-bold gap-[5px]">
            <label>Message</label>
            <textarea
              className="text-colour2 text-[16px] font-normal border-[2px] border-colour2
            rounded-[10px] p-[10px] focus:outline-[3px] focus:outline-colour2 focus:outline-offset-[-3px] resize-y min-h-[100px]"
              name="message"
              id=""
              required
            ></textarea>
          </div>
          <button
            className="animate-btn w-full cursor-pointer text-[18px] font-semibold text-colour2 bg-background rounded-full p-[10px] border-[3px] border-colour2 mt-[10px]"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-title text-[36px] font-bold">
            <Scramble input="Contact Details" />
          </h1>
          <ul className="flex flex-col text-[20px] gap-[20px]">
            <li>
              <a
                href="mailto:yuhuineo@gmail.com"
                className="flex items-center gap-[20px]"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-[24px]" />
                yuhuineo@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-[20px]">
              <FontAwesomeIcon icon={faLocationDot} className="w-[24px]" />
              Singapore
            </li>
          </ul>
        </div>
        {/* Popup message */}
        {showPopup && (
          <Popup
            message={result}
            success={success}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
      <Links />
    </div>
  );
};

export default Contact;
