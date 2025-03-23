import React from 'react';

function ContactSection() {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                <p className="text-lg text-white-700 mb-12">Have a question or want to work together? Reach out to us!</p>
                
                <form action="#" method="POST" className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-left text-sm font-semibold text-gray-700">Full Name</label>
                        <input type="text" id="name" name="name" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-left text-sm font-semibold text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-left text-sm font-semibold text-gray-700">Message</label>
                        <textarea id="message" name="message" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Send Message</button>
                </form>
            </div>

            
        </section>

        
    );
    
}

export default ContactSection;
