
import React from 'react';
import Layouts from "./layouts/Layouts";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#e20000",
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
			<Layouts />
		</ThemeProvider>
	);
};

export default App;
