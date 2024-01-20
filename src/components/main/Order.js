import Header from '../common/Header';
import Content from '../common/Content';
import Footer from '../common/Footer';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadItems } from '../../reducer/itemSlice';

const Wrapper = styled.div`
	width: 100%;
`;

function Order() {
	const dispatch = useDispatch();

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			dispatch(loadItems());
		}, 1000);
		return () => clearTimeout(timeoutId);
	}, []);

	return (
		<Wrapper>
			<Header />
			<Content />
			<Footer />
		</Wrapper>
	);
}

export default Order;
