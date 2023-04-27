import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/UI/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CompletedWork from "./pages/CompletedWork";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer/Footer";
import Services from "./pages/Services";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/completedwork" element={<CompletedWork />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/services"
						element={
							<div>
								<h2>Услуги</h2>
								<Services />
							</div>
						}
					/>
					<Route path="/contacts" element={<Contacts />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
