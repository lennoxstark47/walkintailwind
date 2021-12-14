import {
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
// import './App.css';
import CreateCx from './components/CreateCx';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route path='/' component={CreateCx} />
			</div>
		</Router>
	);
}

export default App;
