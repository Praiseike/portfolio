import developer from '../assets/images/sally.png';
import Page from "../components/page/page";

export default function Landing(){
	return (
		<Page>
			<div className="text-gray-300 h-full">
				<div className="flex flex-row justify-between">
					<div className="w-1/2 pt-28">
						<h1 className="text-3xl font-bold">Hello!, I'm Ibangha <span className="text-main">Ike</span>.<br/> <span className="gradient-text">A FullStack Web Developer</span></h1>
						<p className="text-sm font-light text-gray-400 mt-5 w-[70%]">
							I craft responsive websites and robust web applications using innovative technology to bring your web ideas to reality and deliver seamless user experiences	
						</p>
						<div className="flex flex-row my-4">
							<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">React</h2>
							<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">NodeJS/Express</h2>
							<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">PHP/Laravel</h2>
						</div>
						<button className="py-1 px-4 mt-5 bg-main">See Portfolio →</button>
					</div>

					<div className="">
						<img src={developer} className="w-full" alt="developer illustration"/>
					</div>
				</div>
			</div>
		</Page>
	);
}