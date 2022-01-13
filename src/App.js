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
import Converted from './components/Converted';
import Nonconverted from './components/Nonconverted';
import SearchByDate from './components/SearchByDate';
function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Route path='/' exact component={CreateCx} />
				<Route
					path='/success'
					component={Successfull}
				/>
				<Route
					path='fail'
					component={Unsuccessfull}
				/>
				<Route path='/cxlist' component={CxList} />
				<Route path='/edit/:id' component={EditCx} />
				<Route
					path='/converted'
					component={Converted}
				/>
				<Route
					path='/nonconverted'
					component={Nonconverted}
				/>
				<Route
					path='/searchbydate'
					component={SearchByDate}
				/>
			</div>
		</Router>
	);
}

export default App;
