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
    // const resData = await response.json();
    // console.log(response);
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 z-10">
      <div className="z-10">
        <h5 className="text-xl font-bold text-lightest my-2 z-10">
          Let's Connect
        </h5>
        <p className="text-light mb-4 max-w-md z-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          similique incidunt nam consequuntur explicabo eum voluptatum,
          excepturi quaerat sint ea magnam! Harum, minus distinctio.
        </p>
        <div className="socials flex flex-row gap-2 z-10">
          <Link href="/">
            <Image src={GithubIcon} alt="Github Icon" className="z-10" />
          </Link>
          <Link href="/">
            <Image src={LinkedinIcon} className="z-10" alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
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
              className="bg-bg border border-dark placeholder-med text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johnsmith@email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              type="text"
              className="text-lightest block mb-3 text-sm font-medium z-10"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-bg border border-dark placeholder-med text-gray-100 text-sm z-10 rounded-lg block w-full p-2.5"
              placeholder="Reaching out!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-lightest block text-sm z-10 mb-3 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              className="bg-bg border border-dark placeholder-med text-gray-100 z-10 text-sm rounded-lg block w-full p-2.5"
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
            <p className="text-custom2z-10 text-sm mt-2 z-10">
              Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
