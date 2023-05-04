import Page from "../components/page/page";
import digiImage from "../assets/images/digi-essentials.png"
import betaImage from "../assets/images/beta.digi-essentials.png"
import storeImage from "../assets/images/phone-store.png"

const projects = [

	{ title:"digi-essentials.com",status:"completed",image: digiImage, link:"https://digi-essentials.com"},
	{ title:"digi-essentials.com",status:"ongoing",image: betaImage, link:"https://beta.digi-essentials.com"},
	{ title:"Phone Store",status:"ongoing",image: storeImage, link:"#"}

];

export default function Projects(){
	return (
		<Page>
			<div className="mt-10 text-gray-300  relative overflow-hidden">
				<div className="flex flex-row flex-wrap gap-10 justify-center w-full h-full">
				{
					projects.map(({title,status,image,link },index) => (
						<a key={index} href={link}>
							<div  className="w-[17rem] border border-[#000000aa]" >
								<img src={image} className="rounded-t" alt="digi essentials"/>
								<div class="bg-[#000000aa]">
									<p className="text-xs text-gray-200 px-2  w-fit rounded-lg py-1">{status}</p>
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