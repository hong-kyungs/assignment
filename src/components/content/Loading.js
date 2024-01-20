import styled from 'styled-components';

const TextWrapper = styled.div`
	min-height: 100vh;
	padding-top: 57px;
	padding-bottom: 170px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Text = styled.div`
	width: 220px;
	height: 45px;
	text-align: center;
`;

function Loading() {
	return (
		<TextWrapper>
			<Text>
				<p>목록을 </p>
				<p>불러오고 있습니다. </p>
			</Text>
		</TextWrapper>
	);
}

export default Loading;
