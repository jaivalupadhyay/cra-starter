import logo from './logo.svg';
import './App.css';

import {
  ProfileUpdate 
 } from './ui-components';
 import { Amplify } from "aws-amplify";

 import { withAuthenticator } from "@aws-amplify/ui-react";
 import { Header } from "./Header";
 import { Footer } from "./Footer";
 import { SignInHeader } from "./SignInHeader";
 import { SignInFooter } from "./SignInFooter";
 import { NavBar } from './ui-components';

 import "./styles.css";

 
 import awsExports from "./aws-exports";
 Amplify.configure(awsExports);
 
 export function App({ signOut, user }) {
   return (
    
     <main>
    <NavBar />   
       <h1>Hello {user.username}</h1>
       <button onClick={signOut}>Sign out</button>
     </main>
    
   );
 }
 
 export default withAuthenticator(App, {
   components: {
     Header,
     SignIn: {
       Header: SignInHeader,
       Footer: SignInFooter
     },
     Footer
   }
 });
 

 