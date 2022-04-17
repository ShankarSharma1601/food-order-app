// import React from 'react'
// import { Navbar, Container } from 'react-bootstrap'
// //import { Card } from 'react-bootstrap'

// const Footer = () => {
//     return (
//       <>
//         <Navbar expand="lg" fixed="bottom" variant="dark" bg="dark" className="mt-5">
//             <Container>
//                 <Navbar.Brand > Made by Shankar Sharma</Navbar.Brand>
//                 {/* <div className='fixed-bottom' style={{height:"10px"}}>Made by Shankar Sharma</div> */}
//             </Container>
//         </Navbar>
//         </>

//   )
// }

// export default Footer

// {/* <Navbar bg="dark" variant="dark">
//     <Container>
//     <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//     <Nav className="me-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#features">Features</Nav.Link>
//       <Nav.Link href="#pricing">Pricing</Nav.Link>
//     </Nav>
//     </Container>
//   </Navbar> */}

//   {/* <>
// <nav class="navbar sticky-bottom bg-dark ">
//   <div class="container-fluid">
//     <div postion="bottom">Made by Shankar Sharma</div>
//   </div>
// </nav>
// </>
// // </div>   */}

import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "bootstrap-css-only/css/bootstrap.min.css";
//import "mdbreact/dist/css/mdb.css";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      {/* <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled"> */}
      {/* <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer> */}
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright Online Pizza Shop | All
          Right Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
