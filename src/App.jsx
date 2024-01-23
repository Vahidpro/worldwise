import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/Homepage copy";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Homepage />}
				/>
				<Route
					path="/pricing"
					element={<Pricing />}
				/>
				<Route
					path="/product"
					element={<Product />}
				/>
			</Routes>
			<Routes
				path="*"
				element={<PageNotFound />}
			></Routes>
		</BrowserRouter>
	);
}

export default App;
