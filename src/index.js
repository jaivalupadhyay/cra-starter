import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

Amplify.configure(awsconfig);

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  ,
  rootElement
);
