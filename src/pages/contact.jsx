import Page from "../components/page/page";
import contacts from "../constants/contacts";

export default function Contact(){
	return (
		<Page>
			<div className="py-10 mt-10">
				<div className="flex sm:md:flex-row flex-col  justify-center sm:md:justify-between">
					<div className="w-full ">
						<h1 className="py-3 text-xl text-gray-300">Send me a message </h1>
						<form className="flex flex-col w-80 text-xs  text-[#ffffff88]">
							<input type="text" className="focus:outline-none focus:border-main px-2 py-2 mb-4 rounded bg-transparent border border-[#ffffff22]" name="name" placeholder="your name"/>
							<input type="email" className="focus:outline-none focus:border-main px-2 py-2 mb-4 rounded bg-transparent border border-[#ffffff22]" name="email" placeholder="your email"/>
							<textarea name="message" placeholder="message" className="focus:outline-none focus:border-main px-2 py-2 mb-4 rounded bg-transparent border border-[#ffffff22]" cols="30" rows="7"></textarea>
						<button className="px-4 py-1.5 rounded text-md text-white bg-main">send</button>
						</form>
					</div>
					<div className="w-full">
						<h1 className="py-3 text-xl text-gray-300">Get in touch</h1>
						<ul>
						{	contacts.map(({icon,value},index) => (
								<li key={index} className="text-gray-300 text-sm py-2 flex flex-row items-center space-x-3">
									<span className="text-xl text-main">{icon}</span> <div>{value}</div>
								</li>
							))
						}
						</ul>
					</div>
				</div>
			</div>
		</Page>
	);
}