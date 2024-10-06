import { Outlet } from "react-router-dom"
import { AppFooter } from "./AppFooter"
import { AppHeader } from "./AppHeader"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export const MainLayout = () =>
{
  return (
    <>
      <Container fluid className="p-4">
        <Row as={'header'} className="shadow shadow-sm">
          <Col className="d-flex justify-content-center text-center p-3">
            <AppHeader />
          </Col>
        </Row>
        <Row as={'main'}>
          <Col className="d-flex justify-content-center text-center p-3">
            <Outlet />
          </Col>
        </Row>
        <Row as={'footer'} className="">
          <Col className="d-flex justify-content-center text-center p-3">
            <AppFooter />
          </Col>
        </Row>
      </Container>
    </>
  )
}
