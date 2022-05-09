import "./Skills.css"
import { ListGroup } from "react-bootstrap";

export default function Skills() {

    return (
        <div className="myContainer">
            <div className="myHeader">
                <h1>SKILLS</h1>
            </div>
            <div className="myContent">
                <ListGroup as="ul">
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">HTML</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">CSS</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">React.js</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">JavaScript</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Node.js</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Express.js</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Mongoose/MongoDB</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">SQL/PostgreSQL</div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackgroundAndBorder"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Sequelize</div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}