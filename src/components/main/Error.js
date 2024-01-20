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
			<p>주문에 실패하였습니다. </p>
			<p>다시 시도해주세요. </p>
		</Wrapper>
	);
}

export default Complete;
