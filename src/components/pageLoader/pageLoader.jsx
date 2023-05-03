import spinner from '../../assets/images/spinner.gif';

export default function PageLoader(){

	return (
		<div className="relative h-full w-full flex items-center justify-center mt-52">
				<div className="border-[3px] border-[#00000044] border-b-main animate-spin rounded-[50%] w-8 h-8"></div>
				{/*<img src={spinner} alt='spinner' className="w-full h-full"/>*/}
		</div>	
	);
}