import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function Header() {
  const history = useHistory();

  return (
    <Navbar className="nav-bar" collapseOnSelect expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand  href="#home">Mental Chroma</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              <Nav>Home</Nav>
            </Link>
            <Link className="nav-link" to="/doctorslist">
              <Nav>Schedule Appoitment</Nav>
            </Link>
            <Link className="nav-link" to="/doctorssignin">
              <Nav>For Doctors</Nav>
            </Link>
            <Link className="nav-link" to="/community">
              <Nav>Community</Nav>
            </Link>
            {localStorage.userToken ? (
              <Link className="nav-link" to="/dashboard">
                <Nav>Dashboard</Nav>
              </Link>
            ) : (
              <Link className="nav-link" to="/userssignin">
                <Nav>Login</Nav>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <AppBar position="static" style={{backgroundColor:"#4290F3"}}>
    //   <Toolbar>

    //     <Typography variant="h6" className={classes.title}>
    //       Mental Chroma
    //     </Typography>

    //     <Link className={classes.navLinks} to="/">
    //       <Button className={classes.navBtn} color="inherit">
    //         Home
    //       </Button>
    //     </Link>

    //       <Link className={classes.navLinks} to="/doctorslist">
    //         <Button className={classes.navBtn} color="inherit">
    //           Schedule Appoinment
    //         </Button>
    //       </Link>

    //     <Link className={classes.navLinks} to="/doctorssignin">
    //       <Button className={classes.navBtn} color="inherit">
    //         For Doctors
    //       </Button>
    //     </Link>

    //     <Link className={classes.navLinks} to="/community">
    //       <Button className={classes.navBtn} color="inherit">
    //         Community
    //       </Button>
    //     </Link>

    //     {localStorage.userToken ? (
    //       <Link className={classes.navLinks} to="/dashboard">
    //         <Button className={classes.navBtn} color="inherit">
    //           Dashboard{" "}
    //         </Button>
    //       </Link>
    //     ) : (
    //       <Link className={classes.navLinks} to="/userssignin">
    //         <Button className={classes.navBtn} color="inherit">
    //           Signin{" "}
    //         </Button>
    //       </Link>
    //     )}

    //   </Toolbar>
    // </AppBar>
  );
}

export default Header;
