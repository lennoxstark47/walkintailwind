import {
	BrowserRouter as Router,
	Routes,
} from 'react-router-dom';
import { Route } from 'react-router-dom';
// import './App.css';
import Successfull from './components/Successfull';
import Unsuccessfull from './components/Unsuccessfull';
import CreateCx from './components/CreateCx';
import Navbar from './components/Navbar';
import CxList from './components/CxList';
import EditCx from './components/EditCx';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route
					path='/'
					exact
					component={CreateCx}
				/>
				<Route
					path='/success'
					component={Successfull}
				/>
				<Route
					path='fail'
					component={Unsuccessfull}
				/>
				<Route
					path='/cxlist'
					component={CxList}
				/>
				<Route
					path='edit/:id'
					component={EditCx}
				/>
			</div>
		</Router>
	);
}

export default App;
