// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Button from "./pages/button";
import Input from "./pages/input";

function App() {
	return (
		<Router>
			<Navbar />
			<Sidebar />

			<div className="container mx-auto pt-28">
				<div className="ml-64">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/button">
							<Button />
						</Route>
						<Route path="/input">
							<Input />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
