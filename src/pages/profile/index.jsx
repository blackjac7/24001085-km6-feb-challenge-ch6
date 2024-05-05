import { Card, Col, Row, Form, Image, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const getProfile = async (token) => {
        setLoading(true);

        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `${import.meta.env.VITE_BACKEND_API}/api/auth/profile`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const response = await axios.request(config);
            const { data } = response.data;

            setUser(data);
        } catch (error) {
            setUser(null);
            localStorage.removeItem("token");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            getProfile(token);
        }
    }, []);

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
        <Row className="mt-5">
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Profile</Card.Header>
                    <Card.Body>
                        <Form>
                            {user?.photo && (
                                <Image
                                    src={user?.photo}
                                    rounded
                                    className="img-fluid mb-3"
                                />
                            )}

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                            >
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={user?.name}
                                    disabled
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={user?.email}
                                    disabled
                                />
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Profile;
