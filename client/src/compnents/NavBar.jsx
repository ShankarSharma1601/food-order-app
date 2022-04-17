import React from 'react'
import { Navbar, Nav, Container, Image, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {logoutUser} from '../actions/userAction'

const NavBar = () => {
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.cartReducer);
    const userState = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userState
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        {/* <Image src='images/logo.png' alt="logo" style={{ height: '50px' }} /> */}
                        <Image src='https://logos-world.net/wp-content/uploads/2021/08/DomiNicks-Pizza-Logo-1960-1965.png' alt="logo" style={{ height: '60px' }}  />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {
                                currentUser ? (
                                    <LinkContainer to="/">
                                        {/* <Nav.Link >{currentUser.name}</Nav.Link> */}
                                        <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
        {/* <NavDropdown.Item href="#action/3.1">order</NavDropdown.Item> */}
        <NavDropdown.Item onClick={() => {dispatch(logoutUser())}}>Logout</NavDropdown.Item>
        
      </NavDropdown>
                                    </LinkContainer>
                                ) : (
                                    <>
                                        {" "}
                                        <LinkContainer to="/login">
                                            <Nav.Link >Login</Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <Nav.Link >Register</Nav.Link>
                                        </LinkContainer>{" "}
                                    </>
                                )
                            }


                            <LinkContainer to="/cart">
                                <Nav.Link >Cart {cartState.cartItems.length}</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar