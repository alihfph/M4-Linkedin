import { Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
function Feed(props) {
  return (
    <>
      <NavBar />
      <Row>
        <Col xs="d-none" md={2}>
          <Sidebar />
        </Col>
        <Col xs={12} md={8}>
          <Container fluid></Container>
        </Col>
        <Col xs="d-none" md={2}></Col>
      </Row>
    </>
  );
}
export default Feed;
