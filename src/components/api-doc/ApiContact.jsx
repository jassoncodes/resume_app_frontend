import { Col, Container, Row } from "react-bootstrap"
import { ExploreApiButton } from "./components/ExploreApiButton"
import { apiContactExampleValue } from "./data/ExampleValues"
import { Link } from "react-router-dom"

const endpoint = '/api/contact'

export const ApiContact = () =>
{
  return (
    <Container className="p-2">
      <Row>
        <Col>
          <h6 className="pb-2 border-bottom">{endpoint}</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>This endpoint returns all the information rendered in the <Link className="text-decoration-none fw-bold text-dark" to={'/contact'}>Contact </Link> section.</p>
          <p>Below is an example of the information returned by the API.</p>
        </Col>
      </Row>
      <ExploreApiButton endpoint={endpoint} />
      <pre id="api-example-block" className='pre-scrollable p-4 my-2 border rounded'>
        <code>
          {JSON.stringify(apiContactExampleValue, null, 2)}
        </code>
      </pre>
    </Container>
  )
}
