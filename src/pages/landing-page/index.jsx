import { Button, Container, Image } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <Container
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "60vh",
            }}
        >
            <Image
                className="mb-4"
                src={logo}
                alt="Binar Car Rental"
                height="100"
            />
            <h1>Welcome to Binar Car Rental Management</h1>
            <p>Manage your car rental business with ease</p>
            <div>
                <Link to="/login">
                    <Button
                        variant="primary"
                        size="lg"
                        style={{ margin: "10px" }}
                    >
                        Login
                    </Button>
                </Link>
                <Link to="/register">
                    <Button
                        variant="secondary"
                        size="lg"
                        style={{ margin: "10px" }}
                    >
                        Register
                    </Button>
                </Link>
            </div>
        </Container>
    );
};

export default LandingPage;
