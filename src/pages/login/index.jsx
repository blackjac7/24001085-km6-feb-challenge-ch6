import LoginComponent from "../../components/Login";
import { Card, Col, Row } from "react-bootstrap";

const Login = () => {
    return (
        <Row className="mt-5">
            <Col md={6} className="offset-md-3">
                <Card>
                    <Card.Header>Login</Card.Header>
                    <Card.Body>
                        <LoginComponent />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Login;
