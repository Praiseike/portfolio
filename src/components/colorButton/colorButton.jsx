import styled from 'styled-components';

export default function ColorButton({text,styles,children}){
	const ButtonWrapper = styled.div`

	button{
	  border: 10px solid;
	  border-image-slice: 1;
	  border-width: 5px;
	  border-image-source: linear-gradient(to right, red, blue);
	}


	`
	return (
		<ButtonWrapper>		
			<button className={styles}>{children}</button>
		</ButtonWrapper>

	);

}	
