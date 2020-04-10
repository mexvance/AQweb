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
import imgicon from "../images/AQicon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron />
    <MDBContainer>
      <MDBRow>
        <MDBCol size="auto" md="8">
          <h1 className="pb-3">
            Record, Preserve, Research, Organize, and Share your Family Tree
            using our powerful{" "}
            <i style={{ fontWeight: "400" }}>Ancestral Quest</i> software
          </h1>
          <p className="lead dark-grey-text">
            Ancestral Quest is an exciting program for Windows and Mac that
            makes it possible for anyone to do genealogy! It is easy-to-learn,
            fun to use and packed with powerful features, such as:
          </p>
          <p className="lead dark-grey-text">
            <ul>
              <li>
                Enter the details of your family using simple forms for
                individuals and relationships, including documentation.
              </li>
              <li>
                Preserve specific memories by storing scrapbooks on each person.
              </li>
              <li>
                Allow AQ's built-in TreeTips technology to scan over 30 billion
                records in the world's largest online repositories of
                genealogical records to assist you in your research efforts.
              </li>
              <li>
                {" "}
                Easily view your family from different angles using the
                Pedigree, Descendants, Family and Timeline view.
              </li>
              <li>
                {" "}
                Use AQ's award winning listing and filtering tools to locate
                records and look for anomolies.
              </li>
              <li>
                {" "}
                Share your family tree by printing charts and reports such as
                Pedigree charts, Family Group sheets, Ancestry charts,
                Descendant charts, birthday calendars
              </li>
              <li>
                {" "}
                <i style={{ fontWeight: "600" }}>And so much more..</i>
              </li>
            </ul>
          </p>
          <div className="py-3 text-right">
            <Link to="/page-2/">
              <MDBBtn color="primary" outline>
                See More
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>

        <MDBCol size="auto" md="4" className="d-md-block mt-3">
          <div
            className="d-none d-md-block"
            style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}
          >
            <Image />
          </div>
          <div className="d-md-block " style={{ "text-align": "left" }}>
            <h4 className="py-3">Ancestral Quest runs great on:</h4>
            <div>
              <MDBBadge
                size="lg"
                color="blue darken-3"
                className="mr-3 mb-3 p-2"
              >
                <MDBIcon fab icon="windows" size="2x">
                  {" Windows"}
                </MDBIcon>
              </MDBBadge>
              <MDBBadge
                size="lg"
                color="purple lighten-1"
                className="mr-3 mb-3 p-2"
              >
                <MDBIcon fab icon="apple" size="2x">
                  {" Macintosh"}
                </MDBIcon>
              </MDBBadge>
            </div>
          </div>
        </MDBCol>

        <MDBCol
          size="auto"
          md="12"
          className="mt-3"
          style={{ background: "#f4f4f4" }}
        >
          <h1>
            <MDBBadge size="" color="blue-gradient" className="mt-3 mr-3 mb-3 p-2">
              New Update!
            </MDBBadge>
          </h1>
          <h1 className="pb-3">
            Version 16 of <i style={{ fontWeight: "400" }}>Ancestral Quest</i>{" "}
            is now available
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
            Here are a few new features added in AQ 16:
          </h4>
          <div >
          <h5>
            <MDBBadge size="lg" color="mdb-color lighten-1" className="mr-3 mb-3 p-2">
              Descendants View
            </MDBBadge>
            <MDBBadge size="lg" color="mdb-color lighten-1" className="mr-3 mb-3 p-2">
              Share Custom Events
            </MDBBadge>
            <MDBBadge size="lg" color="mdb-color lighten-1" className="mr-3 mb-3 p-2">
             Add/Remove Country Names
            </MDBBadge>
            <MDBBadge size="lg" color="mdb-color lighten-1" className="mr-3 mb-3 p-2">
             Share Scrapbook Items
            </MDBBadge>
            </h5>
             <div className="text-left pr-5">
            <Link to="/page-2/">
              <MDBBtn color="white" >
                AQ 16 Details
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
          </div>
          <div className="text-right py-5">
            <Link to="/page-2/">
              <MDBBtn color="primary" outline>
                Purchase AQ 16
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol size="auto" md="8" className="mt-3">
          <h1 className="pb-3">
            Free <i style={{ fontWeight: "400" }}>Ancestral Quest Basics</i>{" "}
            Program
          </h1>
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
        <MDBCol size="auto" md="4" className="d-none d-md-block mt-3">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </Layout>
)

export default IndexPage
