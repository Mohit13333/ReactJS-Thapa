import React from "react";
import { Form } from "react-router-dom";
export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res.entries());
    console.log("Form Data Received:", data);
    return data;
  } catch (error) {
    console.error("Error processing form data:", error);
    throw new Error("Failed to process form data");
  }
};

const Contact = () => {
  return (
    <>
      <section className="min-h-screen text-white flex flex-col justify-between bg-gradient-to-b from-red-600 to-pink-500">
        <main className="flex-grow flex justify-center items-center py-16 px-6">
          <div className="w-full max-w-3xl">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700">
              <h1 className="text-3xl font-bold text-center mb-6 relative">
                Contact Us
                <span className="absolute left-1/2 bottom-[-10px] transform -translate-x-1/2 w-1/4 h-[3px] bg-white"></span>
              </h1>
              <Form method="POST" action="/contact" className="grid gap-6">
                <div>
                  <label
                    htmlFor="userName"
                    className="block font-semibold mb-2 text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Enter your username"
                    // value={contact.userName}
                    // onChange={handleInputChange}
                    required
                    autoComplete="off"
                    className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-semibold mb-2 text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    // value={contact.email}
                    // onChange={handleInputChange}
                    required
                    autoComplete="off"
                    className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2 text-white"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    // value={contact.message}
                    // onChange={handleInputChange}
                    required
                    className="w-full bg-gray-100 text-black border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-400 min-h-[150px]"
                  ></textarea>
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="submit"
                    className="w-full bg-red-700 text-white py-3 text-lg font-medium rounded-lg shadow-lg hover:bg-pink-600 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Contact;
