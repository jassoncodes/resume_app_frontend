import { Outlet } from "react-router-dom"
import { SideBar } from "./SideBar"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"



export const HomeApiDoc = () =>
{
    return (
        <Container fluid as='section' className="h-100">
            <Row>
                <Col>
                    <h4 className="m-0 p-2">
                        API Doc
                    </h4>
                </Col>
            </Row>
            <Row className="py-2">
                <Col lg='2' className="px-3">
                    <SideBar />
                </Col>
                <Col lg='10'
                    className="my-3 m-md-0 m-lg-0 d-flex flex-column 
                                justify-content-center align-content-center 
                                text-start"
                >
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
