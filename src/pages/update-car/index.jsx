import UpdateComponent from "../../components/UpdateCar";
import { Card, Col, Row } from "react-bootstrap";

const UpdateCar = () => {
    return (
        <Row className="mt-5">
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Update Car</Card.Header>
                    <Card.Body>
                        <UpdateComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default UpdateCar;
