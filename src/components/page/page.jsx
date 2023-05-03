import { useState, useEffect } from 'react';
import PageLoader from '../pageLoader/pageLoader';


export default function Page({children}){

	const [ show, setShow ] = useState(false)
	useEffect(() => {
		setTimeout(() => {
			setShow(true);
		},1000)		
	},[]);

	return (
		<div className="w-full h-full relative">
			{show?
				children : <PageLoader/>
			}
		</div>
	)
}