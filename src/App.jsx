import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<Homepage />}
				/>
				<Route
					path="pricing"
					element={<Pricing />}
				/>
				<Route
					path="product"
					element={<Product />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/app"
					element={<AppLayout />}
				>
					<Route
						index
						element={<p>List of cities</p>}
					/>
					<Route
						path="cities"
						element={<p>List of cities</p>}
					/>
					<Route
						path="countries"
						element={<p>List of countries</p>}
					/>
					<Route
						path="form"
						element={<p>Form</p>}
					/>
				</Route>
				<Route
					path="*"
					element={<PageNotFound />}
				></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
