import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

const Global = createGlobalStyle`
    body{
      background-color: black;
    }
`;
const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	width: 172px;
	height: 88px;
	margin-top: 40px;
	border-radius: 20px;
	font-size: 25px;
`;

function Main() {
	return (
		<div>
			<Global />
			<Wrapper>
				<img src='/images/logo-black.png' alt='로고이미지' />
				<Link to='/Order'>
					<Button>주문하러 가기</Button>
				</Link>
			</Wrapper>
		</div>
	);
}

export default Main;
