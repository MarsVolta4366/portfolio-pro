import "./Skills.css"
import { ProgressBar, ListGroup, Badge } from "react-bootstrap";

export default function Skills() {

    return (
        <div className="myContainer">
            <div className="myHeader">
                <h1>SKILLS</h1>
            </div>
            <div className="myContent">
                <ListGroup>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">HTML</div>
                            <ProgressBar striped variant="primary" now={90} label={`90%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Confident
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">CSS</div>
                            <ProgressBar striped variant="primary" now={80} label={`80%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Confident
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">React</div>
                            <ProgressBar striped variant="primary" now={70} label={`70%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Comfortable
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">JavaScript</div>
                            <ProgressBar striped variant="primary" now={80} label={`80%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Confident
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">Express.js</div>
                            <ProgressBar striped variant="primary" now={80} label={`80%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Confident
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">Mongoose/MongoDB</div>
                            <ProgressBar striped variant="primary" now={70} label={`70%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Comfortable
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start myBackground"
                    >
                        <div style={{ width: "400px" }}>
                            <div className="fw-bold">UI Design</div>
                            <ProgressBar striped variant="primary" now={50} label={`50%`} />
                        </div>
                        <Badge variant="primary" pill>
                            Need Practice
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}