import { Col, Card, Image, Button } from "react-bootstrap";
import calendarImage from "../../assets/fi_calendar.png";
import usersImage from "../../assets/fi_users.png";
import settingImage from "../../assets/fi_settings.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../../redux/actions/car";
import { useState } from "react";

const CarCard = ({ car }) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            // Delete the car
            dispatch(deleteCar(car.id, setLoading));
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
        setLoading(false);
    };

    return (
        <Col
            lg={3}
            md={4}
            sm={6}
            className="d-flex justify-content-center align-items-stretch"
        >
            <Card className="d-flex flex-column" style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={car.image}
                    style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                    }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title as={Link} to={`/cars/${car?.id}`}>
                        {car.manufacture} {car.model}
                    </Card.Title>
                    <Card.Text className="price">
                        Rp {car.rent_per_day} / hari
                    </Card.Text>
                    <Card.Text style={{ flex: "1 0 auto" }}>
                        {car.description}
                    </Card.Text>
                    <p>
                        <Image src={usersImage} alt="users" />
                        <span className="ps-2">Capacity: {car.capacity}</span>
                    </p>
                    <p>
                        <Image src={settingImage} alt="users" />
                        <span className="ps-2">
                            Transmission: {car.transmission}
                        </span>
                    </p>
                    <p>
                        <Image src={calendarImage} alt="users" />
                        <span className="ps-2">Tahun: {car.year}</span>
                    </p>
                    {user?.role === "admin" && (
                        <div className="d-flex justify-content-center">
                            <Button
                                variant="primary"
                                className="me-2"
                                as={Link}
                                to={`/update-car/${car.id}`}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                onClick={handleDelete}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Delete"}
                            </Button>
                        </div>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};

CarCard.propTypes = {
    car: PropTypes.object,
};

export default CarCard;
