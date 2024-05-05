import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Product from "./pages/Product";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
	return (
		<AuthProvider>
			<CitiesProvider>
				<BrowserRouter>
					<Suspense fallback={<SpinnerFullPage />}>
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
								path="login"
								element={<Login />}
							/>
							<Route
								path="app"
								element={
									<ProtectedRoute>
										<AppLayout />
									</ProtectedRoute>
								}
							>
								<Route
									index
									element={
										<Navigate
											replace
											to="cities"
										/>
									}
								/>
								<Route
									path="cities"
									element={<CityList />}
								/>
								<Route
									path="cities/:id"
									element={<City />}
								/>
								<Route
									path="countries"
									element={<CountryList />}
								/>
								<Route
									path="form"
									element={<Form />}
								/>
							</Route>
							<Route
								path="*"
								element={<PageNotFound />}
							></Route>
						</Routes>
					</Suspense>
				</BrowserRouter>
			</CitiesProvider>
		</AuthProvider>
	);
}

export default App;
