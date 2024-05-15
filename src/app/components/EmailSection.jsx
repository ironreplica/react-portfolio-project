"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/email";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    // console.log(response);
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-custom2 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-lightest my-2">Let's Connect</h5>
        <p className="text-light mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          similique incidunt nam consequuntur explicabo eum voluptatum,
          excepturi quaerat sint ea magnam! Harum, minus distinctio.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-lightest block mb-3 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-bg border border-dark placeholder-light text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johnsmith@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="text-lightest block mb-3 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required //! Make placeholder a little darker
              className="bg-bg border border-dark placeholder-light text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Reaching out!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-lightest block text-sm mb-3 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              className="bg-bg border border-dark placeholder-light text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-custom1 hover:bg-custom2 transition-all duration-700 text-lightest font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-custom2 text-sm mt-2">
              Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
