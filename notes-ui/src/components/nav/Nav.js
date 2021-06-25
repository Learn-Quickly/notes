import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {App} from "../../App";
import {NavList} from "./NavList";
import {SignUp} from "../auth/SignUp";
import {SignIn} from "../auth/SignIn";
import {Navbar, NavDropdown} from "react-bootstrap";

export class Nav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                   );
    }
}

// export class Nav extends Component {
//     render() {
//         return (
//             <Router>
//                  <nav>
//                      <NavList />
//                  </nav>
//                 <Switch>
//                     <Route path="/signin">
//                         <SignIn />
//                     </Route>
//                     <Route path="/signup">
//                         <SignUp />
//                     </Route>
//                     {/*<Route path="/">*/}
//                     {/*    <App />*/}
//                     {/*</Route>*/}
//                 </Switch>
//             </Router>
//                    );
//     }
// }
export default Nav;