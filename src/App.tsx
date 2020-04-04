import React,{useState} from "react";
import Layouts from "./layouts/Layouts";
import { BrowserRouter as Router } from "react-router-dom";
import AdminLayouts from './layouts/AdminLayouts';
import "./sass/main.scss";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#d50000",
		},
		secondary: {
			main: "#202020",
		},
	},
});

const App: React.FC = () => {
	const [userInterface,setUserInterface] =useState<any>(false)
	const changeinterface =()=>setUserInterface(!userInterface);
	return (
		<ThemeProvider theme={theme}>
			<Router>
			<div>
				<Layouts close={userInterface} />
			</div>
			<div>
				<AdminLayouts setUserInterface={changeinterface} close={userInterface}/>
			</div>
			</Router>
		</ThemeProvider>
	);
};

export default App;
