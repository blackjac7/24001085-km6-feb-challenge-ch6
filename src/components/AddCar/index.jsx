import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../../redux/actions/car";

const AddCar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [plate, setPlate] = useState("");
    const [manufacture, setManufacture] = useState("");
    const [model, setModel] = useState("");
    const [image, setImage] = useState();
    const [rentPerDay, setRentPerDay] = useState("");
    const [capacity, setCapacity] = useState("");
    const [description, setDescription] = useState("");
    const [transmission, setTransmission] = useState("");
    const [available, setAvailable] = useState(true);
    const [type, setType] = useState("");
    const [year, setYear] = useState("");
    const [availableAt, setAvailableAt] = useState("");
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            addCar(
                navigate,
                plate,
                manufacture,
                model,
                image,
                rentPerDay,
                capacity,
                description,
                transmission,
                available,
                type,
                year,
                availableAt,
                setLoading
            )
        );
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="plate">
                <Form.Label>Plate</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter plate"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="manufacture">
                <Form.Label>Manufacture</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter manufacture"
                    value={manufacture}
                    onChange={(e) => setManufacture(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter model"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rentPerDay">
                <Form.Label>Rent Per Day</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter rent per day"
                    value={rentPerDay}
                    onChange={(e) => setRentPerDay(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="capacity">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter capacity"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="transmission">
                <Form.Label>Transmission</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter transmission"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="available">
                <Form.Check
                    type="checkbox"
                    label="Available"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
                <Form.Label>Type</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Enter year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="availableAt">
                <Form.Label>Available At</Form.Label>
                <Form.Control
                    type="date"
                    value={availableAt}
                    onChange={(e) => setAvailableAt(e.target.value)}
                />
            </Form.Group>
            <div className="d-flex justify-content-center">
                <Button variant="success" type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Add Car"}
                </Button>
            </div>
        </Form>
    );
};

export default AddCar;
