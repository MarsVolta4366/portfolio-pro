// Do run command, capture screen shot with dev tools as narrow as possible to get same sized images
import "./Projects.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

export default function Projects() {
    return (
        <div className="myContainer">
            <div className="myHeader">
                <h1>PROJECTS</h1>
            </div>
            <div className="myContent">
                <Container>
                    <Row>
                        <Col>
                            <a href="https://unrivaled-moonbeam-066202.netlify.app/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../Reddit-Clone-Screen-Shot.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Reddit Clone</Card.Title>
                                        <Card.Text>
                                            A clone I made of the popular website Reddit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://albumtracker.netlify.app/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../AlbumTrackerImageR.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Album Tracker</Card.Title>
                                        <Card.Text>
                                            A MERN stack application with the ability to make CRUD operations on a database via an API I made.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://cranky-golick-d658db.netlify.app/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../BlogImage.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Blog.it</Card.Title>
                                        <Card.Text>
                                            A MERN stack blog application, this was built as a group project.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://recipe-search-react.herokuapp.com/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../RecipeSearchReactImage.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Recipe Search React</Card.Title>
                                        <Card.Text>
                                            A react app which allows you to search recipes, this app utilizes the Spoonacular API to get recipes.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://marsvolta4366.github.io/MilestoneProjectI/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../TicTacToeImage.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Tic Tac Toe</Card.Title>
                                        <Card.Text>
                                            A two player Tic Tac Toe game, played on one device.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href="https://marsvolta4366.github.io/RomanNumeralsConverter/" target="_blank" rel="noreferrer" className="myLink">
                                <Card className="myCard">
                                    <Card.Img variant="top" src="../../../RomanNumeralsConverterImage.png" />
                                    <Card.Body className="myBackground">
                                        <Card.Title>Roman Numerals Converter</Card.Title>
                                        <Card.Text>
                                            Convert a number to roman numerals and roman numerals to a number.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}