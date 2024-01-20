import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../reducer/itemSlice';

const ArticleWrapper = styled.div`
	min-height: 100vh;
	padding-top: 57px;
	padding-bottom: 170px;
`;

const Article = styled.article`
	width: 310px;
	height: 80px;
	border: 1px solid #b3b3b3;
	border-radius: 10px;
	margin: 15px auto;
	${(props) => {
		if (props.$hasbackground === 'true') {
			return css`
				background-color: #fddace;
			`;
		}
	}}
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	padding: 5px 10px;
	align-items: center;
	justify-content: space-between;
`;

const Box = styled.div`
	width: 62px;
	height: 62px;
	background-color: #d9d9d9;
`;

const Info = styled.div`
	width: 215px;
	height: 60px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const InfoInner1 = styled.div`
	display: flex;
	align-items: center;
`;
const InfoInner2 = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Event = styled.span`
	font-size: 13px;
	padding: 3px 10px;
	background-color: #f75a2f;
	color: #eee;
	border-radius: 10px;
	margin-left: 5px;
`;

const Counter = styled.button`
	border: none;
	outline: none;
	background-color: inherit;
	cursor: pointer;
	width: 19px;
	height: 22px;
`;

const Number = styled.span`
	width: 19px;
	height: 22px;
`;

function Items() {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.item);

	const increase = (item) => {
		dispatch(addToCart(item));
	};
	const decrease = (item) => {
		dispatch(removeFromCart(item));
	};

	return (
		<ArticleWrapper>
			{items.map((item, idx) => {
				let price = parseInt(item.price, 10).toLocaleString();
				let newPrice = parseInt(item.newPrice, 10).toLocaleString();
				let count = parseInt(item.count, 10);
				return (
					<Article key={idx} $hasbackground={count >= 1 ? 'true' : undefined}>
						<Inner>
							<Box></Box>
							<Info>
								<InfoInner1>
									<span>{item.name}</span>
									{item.event > 0 && <Event>이벤트</Event>}
								</InfoInner1>
								<InfoInner2>
									<div>
										<Counter onClick={() => decrease(item.id)}>-</Counter>
										<Number>{count}</Number>
										<Counter onClick={() => increase(item.id)}>+</Counter>
									</div>
									<div>{item.newPrice ? `${newPrice}원` : `${price}원`}원</div>
								</InfoInner2>
							</Info>
						</Inner>
					</Article>
				);
			})}
		</ArticleWrapper>
	);
}

export default Items;
