import { Col, Container, Row } from "react-bootstrap"
import { ExploreApiButton } from "./components/ExploreApiButton"
import { apiStudyExampleValue } from "./data/ExampleValues"

const endpoint = '/api/study'

export const ApiStudy = () =>
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
                    <p>This endpoint will get the information regarding my previous experience in corporate IT.</p>
                    <p>Below is an example of the information returned by the API.</p>
                </Col>
            </Row>
            <ExploreApiButton endpoint={endpoint} />
            <pre id="api-example-block" className='pre-scrollable p-4 my-2 border rounded'>
                <code>
                    {JSON.stringify(apiStudyExampleValue, null, 2)}
                </code>
            </pre>
        </Container>
    )
}
