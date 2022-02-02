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
                            <Card className="myCard">
                                <Card.Img variant="top" src="../../../AlbumTrackerImage.png" />
                                <Card.Body className="myBackground">
                                    <Card.Title>Album Tracker</Card.Title>
                                    <Card.Text>
                                        A MERN stack application with the ability to make CRUD operations on a database via an API I made.
                                    </Card.Text>
                                    <Button className="myButton" href="https://albumtracker.netlify.app/" target="_blank">Check it Out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="myCard">
                                <Card.Img variant="top" src="../../../TicTacToeImage.png" />
                                <Card.Body className="myBackground">
                                    <Card.Title>Tic Tac Toe</Card.Title>
                                    <Card.Text>
                                        A two player Tic Tac Toe game, played on one device.
                                    </Card.Text>
                                    <Button className="myButton" href="https://marsvolta4366.github.io/MilestoneProjectI/" target="_blank">Check it Out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className="myCard">
                                <Card.Img variant="top" src="../../../RomanNumeralsConverterImage.png" />
                                <Card.Body className="myBackground">
                                    <Card.Title>Roman Numerals Converter</Card.Title>
                                    <Card.Text>
                                        Convert a number to roman numerals and roman numerals to a number.
                                    </Card.Text>
                                    <Button className="myButton" href="https://marsvolta4366.github.io/RomanNumeralsConverter/" target="_blank">Check it Out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}