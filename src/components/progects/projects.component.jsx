import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ContactKeeper from "../../assets/img/projects/contact-keeper.JPG";
import L_GithubFinder from "../../assets/img/projects/git-hub-finder.JPG";
// import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
// import L_SmartBrain from "../../assets/img/projects/brain.webp";
// import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
// import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
// import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
//import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
//import L_DJANGO from "../../assets/img/skills/django.svg";
//import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
//import L_GIT from "../../assets/img/skills/github-api.svg";
//import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./project.style.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
       {/* project-1 contact-keeper App */}
        <ImageEvent
            date="04/03/2021"
            className="text-center"
            text="Contact Keeper App"
            src={L_ContactKeeper}
            alt="Contact Keeper App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Contact Keeper App created with ReactJs , NodeJS, MongoDB that keeps a track of user Contacts.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your contacts</li>
                          <li>Powered by ReactJs and NodeJS</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NodeJs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                            NodeJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="ExpressJs"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                            ExpressJs
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://contact-keeper-webapp-123.herokuapp.com/login"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/sravanthi366/contact-keeper-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
             
              </div>
            </div>
          </ImageEvent>


{/* Project-2: Github finder App */}
<ImageEvent
            date="02/02/2021"
            className="text-center"
            text="GitHub Finder App"
            src={L_GithubFinder}
            alt="GitHub-finder"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This app provide GitHub users and Repositories 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search By Name</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with basic css Grid</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                         
                                                  
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              <UrlButton
                  href="https://reactapp-githubfinder.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>  
                <UrlButton
                  href="https://github.com/sravanthi366/git-hub-finder-app-react"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
               
              </div>
            </div>
          </ImageEvent>

        
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;