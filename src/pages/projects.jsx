import Page from "../components/page/page";
import digiImage from "../assets/images/digi-essentials.png"
import tBotImage from "../assets/images/tbot.png"
import storeImage from "../assets/images/phone-store.png"

const projects = [
	{ title:"digi-essentials.com",status:"completed",image: digiImage, link:"https://digi-essentials.com"},
	{ title:"Phone Store",status:"ongoing",image: storeImage, link:"https://phone-store-e67e.onrender.com/"},
	{ title:"OpenAI Telegram Bot",status:"completed",image: tBotImage, link:"https://t.me/praise_ikebot"},
];

export default function Projects(){
	return (
		<Page>
			<div className="mt-10 text-gray-300  relative overflow-hidden">
				<div className="flex flex-row flex-wrap gap-10 justify-center w-full h-full">
				{
					projects.map(({title,status,image,link },index) => (
						<a key={index} href={link} target="_blank">
							<div  className="w-[17rem] border border-[#000000aa]" >
								<img src={image} className="rounded-t" alt="digi essentials"/>
								<div class="bg-[#000000aa]">
									<p className="text-xs text-gray-200 px-2  w-fit rounded-lg pt-2 text-main">{title}</p>
									<div className="text-xs text-gray-200 px-2  w-fit rounded-lg py-1">{status}</div>
								</div>
							</div>
						</a>
					))
				}	
				</div>
			</div>
		</Page>
	);
}