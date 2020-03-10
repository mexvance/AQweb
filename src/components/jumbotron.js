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
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundSize: "cover",
        boxShadow: "none",
      }}
    >
      <MDBContainer fluid className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <img
              style={{ "object-fit": "cover", "max-width": "100%" }}
              src={TitleImage}
              alt="title"
            />
            <p
              className=" lead my-4"
              style={{ fontSize: "1.9em", fontWeight: "light", color: "white" }}
            >
              The perfect family tree software for beginners and professionals
              alike.
            </p>

            <hr className="my-4" style={{ width: "30rem" }} />
            <div className="pt-2">
              <MDBBtn
                href="https://ancquest.com/orders.htm"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                className="waves-effect"
              >
                Buy Now{" "}
                <MDBIcon fa icon="fas fa-shopping-cart" className="ml-2" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBJumbotron>
  )
}

export default Jumbotron
