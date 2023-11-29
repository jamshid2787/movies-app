import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from 'routes/routes';
import Navbar from 'components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './style.scss';

const element = document.getElementById('root')!;
const root = ReactDOM.createRoot(element);

root.render(
	<Router>
		<Navbar />
		<Routes />
	</Router>
);
