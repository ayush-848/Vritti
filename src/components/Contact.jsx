import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCommentDots } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "33c62f1e-2d6b-41be-a759-fc33769c3ad5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="max-w-[90%] mx-auto my-20 flex flex-col font-montserrat" id='contact'>
            <h2 className="text-[#000f38] font-bold text-4xl text-center mb-10">Contact Us</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-[48%] text-[#676767] mb-10 md:mb-0">
                    <h3 className="text-[#000f38] font-medium text-2xl flex items-center mb-4">
                        Send us a message <FaRegCommentDots className="w-8 ml-2" />
                    </h3>
                    <p className="mb-12 text-lg max-w-[450px] leading-relaxed">
                        Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                    </p>
                    <ul>
                        <li className="flex items-center mb-4 text-lg">
                            <FaEnvelope className="w-5 mr-3" />
                            vrittiacademy.io@gmail.com
                        </li>
                        <li className="flex items-center mb-4 text-lg">
                            <FaPhone className="w-5 mr-3" />
                            +1 123-456-7890
                        </li>
                        <li className="flex items-center mb-4 text-lg">
                            <FaMapMarkerAlt className="w-5 mr-3" />
                            Near Kali Bari, Bel Tali , A.D Nagar ,Agartala
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-[48%]">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label className="block text-lg mb-1">Your Name</label>
                            <input type="text" name="name" placeholder='Enter your name' required
                                   className="w-full bg-[#ebecfe] p-3 border-0 outline-none text-lg" />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">Phone number</label>
                            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required
                                   className="w-full bg-[#ebecfe] p-3 border-0 outline-none text-lg" />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">Email</label>
                            <input type="email" name="email" placeholder='Enter your Email' required
                                   className="w-full bg-[#ebecfe] p-3 border-0 outline-none text-lg" />
                        </div>
                        <div>
                            <label className="block text-lg mb-1">Write your messages here</label>
                            <textarea name="message" rows="6" placeholder='Enter your message' required
                                      className="w-full bg-[#ebecfe] p-3 border-0 outline-none text-lg resize-none h-[180px]"></textarea>
                        </div>
                        <button className="bg-[#000f38] text-white px-6 py-3 flex items-center text-lg hover:bg-[#001064] transition-colors duration-300 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type='submit'>
                            Submit now <MdSend className="ml-2 w-5" />
                        </button>
                    </form>
                    <span className="block mt-5 text-xl text-center text-[#000f38]">{result}</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;
