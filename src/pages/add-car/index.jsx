import AddCarComponent from "../../components/AddCar";
import { Card, Col, Row } from "react-bootstrap";

const AddCar = () => {
    return (
        <Row className="mt-5">
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Add Car</Card.Header>
                    <Card.Body>
                        <AddCarComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default AddCar;
