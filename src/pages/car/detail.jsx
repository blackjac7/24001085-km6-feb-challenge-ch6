import { useEffect } from "react";
import { Row, Col, Card, Form, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCar } from "../../redux/actions/car";

const CarDetail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const { car } = useSelector((state) => state.car);

    useEffect(() => {
        // get car details by params id
        dispatch(getCar(navigate, id));
    }, [dispatch, id, navigate]);

    return (
        <Row>
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Car</Card.Header>
                    <Card.Body>
                        <Form>
                            {!car ? (
                                <>
                                    <h2>Loading...</h2>
                                </>
                            ) : (
                                <>
                                    {car?.image && (
                                        <Image
                                            src={car?.image}
                                            className="img-fluid"
                                            rounded
                                        />
                                    )}

                                    <div className={car?.image && "mt-4"}>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="name"
                                        >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={
                                                    car?.manufacture +
                                                    " " +
                                                    car?.model
                                                }
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="plate"
                                        >
                                            <Form.Label>Plate</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.plate}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="rentPerDay"
                                        >
                                            <Form.Label>
                                                Rent Per Day
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.rent_per_day}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="capacity"
                                        >
                                            <Form.Label>Capacity</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.capacity}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="description"
                                        >
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control
                                                rows={3}
                                                as="textarea"
                                                value={car?.description}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="transmission"
                                        >
                                            <Form.Label>
                                                Transmission
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.transmission}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="year"
                                        >
                                            <Form.Label>Year</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.year}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="available"
                                        >
                                            <Form.Check
                                                type="checkbox"
                                                label="Available"
                                                checked={car?.available}
                                                disabled
                                            />
                                        </Form.Group>

                                        <Form.Group
                                            className="mb-3"
                                            controlId="type"
                                        >
                                            <Form.Label>Type</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={car?.type}
                                                disabled
                                            />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    navigate("/home")
                                                }
                                            >
                                                Back
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default CarDetail;
