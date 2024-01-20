import styled from 'styled-components';

const Wrapper = styled.div`
	z-index: 3;
	background-color: black;
	width: 100%;
	height: 57px;
	position: fixed;
	top: 0;
	left: 0;
	background-color: black;
`;

const Img = styled.img`
	margin-top: 13px;
	margin-left: 12px;
`;

function Header() {
	return (
		<Wrapper>
			<Img src='/images/logo-black-1.png' alt='로고이미지' />
		</Wrapper>
	);
}

export default Header;
