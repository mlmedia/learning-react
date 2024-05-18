import React from 'react';

const Contact = () => {
	return (
		<div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
			<h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
			<form action="/" method="post" encType="multipart/form-data">
				<div className="grid md:grid-cols-2 gap-4 w-full py-2">
					<div className="flex flex-col">
						<label for="name" className="text-sm uppercase py-2">Name</label>
						<input type="text" name="name" className="border-2 rounded-lg p-3 flex border-gray-300" />
					</div>
					<div className="flex flex-col">
						<label for="phone" className="text-sm uppercase py-2">Phone</label>
						<input type="text" name="phone" className="border-2 rounded-lg p-3 flex border-gray-300" />
					</div>
				</div>
				<div className="flex flex-col py-2">
					<label for="email" className="text-sm uppercase py-2">Email</label>
					<input type="email" name="email" className="border-2 rounded-lg p-3 flex border-gray-300" />
				</div>
				<div className="flex flex-col py-2">
					<label for="subject" className="text-sm uppercase py-2">Subject</label>
					<input type="text" name="subject" className="border-2 rounded-lg p-3 flex border-gray-300" />
				</div>
				<div className="flex flex-col py-2">
					<label for="message" className="text-sm uppercase py-2">Message</label>
					<textarea rows="10" name="message" className="border-2 rounded-lg p-3 flex border-gray-300"></textarea>
				</div>
				<button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">Send Message</button>
			</form>
		</div>
	);
};

export default Contact;