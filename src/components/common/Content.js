import Loading from '../content/Loading';
import Items from '../content/Items';

import { useSelector } from 'react-redux';

function Content() {
	const { loadItemsDone } = useSelector((state) => state.item);

	return loadItemsDone ? <Items /> : <Loading />;
}

export default Content;
