import { Row, Container, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/car";
import CarCard from "../../components/CarCard";

const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const { cars } = useSelector((state) => state.car);

    useEffect(() => {
        dispatch(getCars(setLoading));
    }, [dispatch]);

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "50vh",
                }}
            >
                <h1>Loading...</h1>
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <Container>
            <Row>
                {cars.length > 0 &&
                    cars.map((car) => <CarCard key={car?.id} car={car} />)}
            </Row>
        </Container>
    );
};

export default Home;
