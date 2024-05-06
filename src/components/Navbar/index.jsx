import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile, logout } from "../../redux/actions/auth";
import logo from "../../assets/logo.png";

const NavbarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, token } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch, token]);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} alt="Kampus Merdeka" height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {user && (
                            <>
                                <Nav.Link as={Link} to="/home">
                                    <p style={{ margin: 0, fontSize: "18px" }}>
                                        Home
                                    </p>
                                </Nav.Link>

                                {user?.role === "admin" && (
                                    <Nav.Link as={Link} to="/add-car">
                                        <p
                                            style={{
                                                margin: 0,
                                                fontSize: "18px",
                                            }}
                                        >
                                            Add Car
                                        </p>
                                    </Nav.Link>
                                )}

                                <Nav.Link as={Link} to="/profile">
                                    <p style={{ margin: 0, fontSize: "18px" }}>
                                        {user?.name}
                                    </p>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                    {user && (
                        <Nav.Link
                            className="text-danger ms-auto"
                            onClick={() => {
                                dispatch(logout());
                                navigate("/login");
                            }}
                        >
                            Logout
                        </Nav.Link>
                    )}
                    {!user && (
                        <>
                            <Nav.Link className="me-2" as={Link} to="/login">
                                <Button variant="primary">Login</Button>
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register">
                                <Button variant="secondary">Register</Button>
                            </Nav.Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
