import skills from '../constants/skills';
import Page from "../components/page/page";
import './styles.css';
function SkillSet({set}){
	return (
		<div className="pr-20 py-2">
			<ul>
				{
					set.map(({name,icon,text},index) => (
						<li key={index} className="flex flex-col justify-betweeen space-y-3 py-1 pb-5">
							<h3 className="text-gray-300 flex flex-row items-center w-[200px]">
								{icon} {name}
							</h3>
							<p className="w-full border border-[#44444466] p-3 text-gray-300 text-xs rounded">
								{text}
							</p>
						</li>
					))
				}
			</ul>
		</div>
	);
}

export default function Skills(){
	return (
		<Page>
			<div id="skills-panel" className="py-10 overflow-y-scroll mt-5 h-full flex flex-col justify-between">
				<div className="flex items-center flex-row  h-[20rem] justify-between">
					<div className=" w-full h-full">
						<h1 className="text-main font-bold">Backend</h1>
						<SkillSet set={skills.backend}/>
					</div>
					<div className=" w-full h-full">
						<h1 className="text-main font-bold">Frontend</h1>
						<SkillSet set={skills.frontend}/>
					</div>
				</div>
			</div>
		</Page>
	);
}
