import React from "react"
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBadge,
} from "mdbreact"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbotron from "../components/jumbotron"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <MDBContainer>
      <MDBRow>
        <MDBCol size="auto" md="8">
          <h1 className="pb-3">
            Ancestral Quest, The Best Genealogy Software Around
          </h1>
          <p className="lead grey-text">
            Ancestral Quest is an exciting program for Windows and Mac that
            makes it possible for anyone to do genealogy! It is easy-to-learn,
            fun to use and packed with powerful features.
          </p>
          <h4 className="py-3">
            This starter is configured for the following;
          </h4>
          <div>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Sass Ready
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Font Awesome Icons
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Progressive Web App
            </MDBBadge>
          </div>
          <div className="py-5">
            <Link to="/page-2/">
              <MDBBtn color="primary" outline>
                Go to page 2
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol size="auto" md="4" className="d-none d-md-block">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
