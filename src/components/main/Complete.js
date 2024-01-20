import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	width: 48px;
	height: 48px;
	margin-bottom: 10px;
`;

function Complete() {
	const navigate = useNavigate();
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			navigate('/order');
		}, 3000);
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Wrapper>
			<Img src='/images/CheckFilled.png' alt='체크이미지' />
			<p>주문이 완료되었습니다. </p>
		</Wrapper>
	);
}

export default Complete;
