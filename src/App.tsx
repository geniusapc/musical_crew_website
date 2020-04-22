import React, { useState } from "react";
import Layouts from "./layouts/Layouts";
import ThemeMode from './themeChanger';
import "./sass/main.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#d50000",
		},
		secondary: {
			main: "#ff3e3e",
		},
	},
	typography: {
		fontFamily: [
			'Arial', 'Helvetica', 'sans-serif',
		].join(','),
	},
});

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Layouts />
				<ThemeMode />
			</div>
		</ThemeProvider>
	);
};

export default App;
