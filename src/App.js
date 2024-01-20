import './App.css';
import { Route, Routes } from 'react-router-dom';

import Main from './components/main/Main';
import Order from './components/main/Order';
import Complete from './components/main/Complete';
import Error from './components/main/Error';

function App() {
	return (
		<Routes>
			<Route path='/' Component={Main} />
			<Route path='/order' Component={Order} />
			<Route path='/complete' Component={Complete} />
			<Route path='/error' Component={Error} />
		</Routes>
	);
}

export default App;
