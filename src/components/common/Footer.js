import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Wrapper = styled.div`
	height: 170px;
	width: 100%;
	bottom: 0px;
	padding: 23px;
	box-shadow: 0px -4px 10px #d9d9d9;
	border-radius: 20px;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #eee;
`;

const InnerWrapper = styled.div`
	width: 100%;
	height: 100%;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Button = styled.button`
	width: 300px;
	height: 48px;
	margin: 0 auto;
	font-size: 18px;
	color: #ffffff;
	${(props) => {
		if (props.$loaditemsdone === 'true') {
			return css`
				background-color: #000000;
			`;
		} else {
			return css`
				background-color: #c1c1c1;
			`;
		}
	}};
	border: none;
`;

const Text = styled.p`
	text-align: right;
	margin: 3px 0;
`;

function Footer() {
	const { totalQuantity, totalPrice, loadItemsDone } = useSelector(
		(state) => state.item
	);
	const [isLoading, setIsLoading] = useState(false);

	const order = () => {
		if (totalQuantity === 0) {
			alert('장바구니에 아이템을 넣어주세요');
		} else {
			setIsLoading(true);
		}
	};

	return (
		<Wrapper>
			<InnerWrapper>
				<div>
					<Text>총 수량 : {totalQuantity}개</Text>
					<Text>총 가격 : {totalPrice}원</Text>
				</div>
				{isLoading ? (
					<Button>로딩중...</Button>
				) : (
					<Button onClick={order} $loaditemsdone={loadItemsDone.toString()}>
						주문하기
					</Button>
				)}
			</InnerWrapper>
		</Wrapper>
	);
}

export default Footer;
