import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";
import "./styles.css";
import {
  EditProfile 
 } from './ui-components';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export function App({ signOut, user }) {
  return (
    <main>
      <EditProfile />
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
