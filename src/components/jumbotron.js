import React from "react"
import TitleImage from "../images/ancquestTitleLogo2.png"
import HeaderBackground from "../images/treebackground.jpg"
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"

const Jumbotron = () => {
  return (
    <MDBJumbotron
      fluid
       style={{ backgroundImage: `url(${HeaderBackground})`, backgroundSize: "cover", boxShadow: "none" }}
      //style={{ backgroundColor: "primary-color", backgroundSize: "cover", boxShadow: "none" }}
    >
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <img style={{"object-fit": "cover", "max-width": "100%"}} src={TitleImage} alt="title"/>
            <p className=" lead my-4" style={{fontSize: "1.9em", fontWeight:"light", color: "white"}}>
               Family Tree Software for Windows and Mac
            </p>

            <hr className="my-4" style={{ width: "30rem" }} />
            <div className="pt-2">
              <MDBBtn
                href="https://github.com/zlutfi/gatsby-starter-mdbreact"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="waves-effect"
              >
                Buy Now <MDBIcon fa icon="fas fa-download" className="ml-2" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron
