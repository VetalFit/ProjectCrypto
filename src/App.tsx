import React from 'react';
import './App.css';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import LayoutComponent from './components/layout';
import NewsComponent from './components/news';
import WatchlistComponent from './components/watchlist';
import SettingsComponent from './components/settings';

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
								<Route path="/" element={<Home />} />
								<Route
									path="/news"
									element={<NewsComponent />}
								/>
								<Route
									path="/watchlist"
									element={<WatchlistComponent />}
								/>
								<Route
									path="/settings"
									element={<SettingsComponent />}
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
