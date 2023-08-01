import developer from '../assets/images/sally.png';
import Page from "../components/page/page";
import { NavLink } from 'react-router-dom';
import { BiDownload } from 'react-icons/bi';

export default function Landing(){

	const handleDownload = (e) => {
		e.preventDefault();
		fetch('resume.pdf').then(response => {
			response.blob().then(blob => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'Ibangha Ike.pdf';
				alink.click();
			})
		})
	}
	
	return (
		<Page>
			<div className="text-gray-300 h-full	">
				<div className="flex sm:md:flex-row flex-col items-center mt-28 lg:mt-0 justify-between h-full">
					<div className="sm:md:w-1/2 flex items-center">
						<div className="">
							<h1 className="text-3xl font-bold">Hello!, I'm Ibangha <span className="text-main">Ike</span>.<br/> <span className="gradient-text">A FullStack Web Developer</span></h1>
							<p className="text-sm font-light text-gray-400 mt-5 md:w-[70%]">
								I create responsive websites and robust web applications using innovative technology to bring your web ideas to reality and deliver seamless user experiences	
							</p>
							<div className="flex flex-row my-4">
								<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">React</h2>
								<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">NodeJS/Express</h2>
								<h2 className="px-2 py-1 text-xs bg-[#515151aa] rounded w-fit mr-2">PHP/Laravel</h2>
							</div>
							<div className="flex items-center space-x-2">
								<NavLink className="rounded py-1 px-4 mt-5 bg-main" to="/projects">
									See Projects →
								</NavLink>
								<NavLink className="rounded flex items-center py-1 px-4 mt-5 bg-main" onClick={handleDownload}>
									<BiDownload/> <span className="ml-2">resumé</span>
								</NavLink>
							</div>
						</div>
					</div>
					<div className="hidden lg:block md:block">
						<img src={developer} className="w-full" alt="developer illustration"/>
					</div>
				</div>
			</div>
		</Page>
	);
}