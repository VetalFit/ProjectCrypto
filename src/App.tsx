import React from 'react';
import './App.css';
import HomePage from './pages/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout';
import NewsPage from './pages/news';
import WatchlistPage from './pages/watchlist';
import SettingsPage from './pages/settings';
import SingleAssetPage from './pages/singel-asset';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Routes>
						<Route element={<LayoutComponent />}>
							<Route element={<PrivateRoute />}>
								<Route path="/" element={<HomePage />} />
								<Route path="/news" element={<NewsPage />} />
								<Route
									path="/watchlist"
									element={<WatchlistPage />}
								/>
								<Route
									path="/settings"
									element={<SettingsPage />}
								/>
								<Route
									path="/single/:id"
									element={<SingleAssetPage />}
								/>
							</Route>
							<Route
								path="login"
								element={<AuthRootComponent />}
							/>
							<Route
								path="register"
								element={<AuthRootComponent />}
							/>
						</Route>
					</Routes>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
