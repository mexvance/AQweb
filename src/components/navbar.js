import React, { Component } from "react"
import PropTypes from "prop-types"
import TitleImage from "../images/ancquestTitleWhiteLogo.png";

import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact"

class Navbar extends Component {
  state = {
    isOpen: false,
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <MDBNavbar color="primary-color" dark expand="md">
        <MDBContainer>
          <MDBNavbarBrand>
            <Link to="/">
              <div style={{}}><img style={{"object-fit": "contain", "height": "45px"}} src={TitleImage} alt="title"/></div>
            </Link>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link
                  to="/page-2"
                  className="nav-link"
                  activeClassName="active"
                >
                  Page 2
                </Link>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    )
  }
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
