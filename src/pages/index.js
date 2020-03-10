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
        <MDBCol size="auto" md="12" style={{background: "#f4f4f4"}}>
          <h1 className="pb-3">
            Version 16 of Ancestral Quest is now available
          </h1>
          <p className="lead grey-text">
            The newest version of Ancestral Quest is now available! You can now
            see your family tree in a Descendants view. You can dress up many
            charts by printing them over top of your favorite photos or other
            backgrounds. You can speed up entry of shared events and photos with
            new Share features. You can enjoy improved options for syncing data
            with FamilySearch Family Tree. (AQ received an award in 2009 from
            FamilySearch for providing the Most Comprehensive Syncing with
            FamilySearch FamilyTree. Over the years since, AQ has continued to
            make strides to maintain its lead over the competition.) These are
            just the very tip of the iceberg of many new features being
            introduced with Ancestral Quest Version 16!
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
        <MDBCol size="auto" md="8">
          <h1 className="pb-3">Free Ancestral Quest Basics Program</h1>
          <p className="lead grey-text">
            Ancestral Quest 16 is available in two versions. Ancestral Quest
            Basics is free genealogy software that has the essential features
            for working with your family tree, including some updated features
            in accessing FamilySearch Family Tree. The full Ancestral Quest
            program adds even more abilities and features that make it the
            complete family history solution. (If you've already been using
            Ancestral Quest Basics 15, you'll want to upgrade to Ancestral Quest
            Basics 16 for free.)
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
