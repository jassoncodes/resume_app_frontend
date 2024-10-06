import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom";
import { ExploreApiButton } from "./components/ExploreApiButton";
import { apiAboutExampleValue, apiMeExampleValue } from "./data/ExampleValues";

const endpoint = '/api/me'

export const ApiMe = () =>
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
                    <p>This endpoint gets all the informtion rendered in my <Link className="text-decoration-none fw-bold text-dark" to={'/live-resume'}>live resume</Link> including, experience, studies, projects and contact information.</p>
                    <p>Below is an example of the information returned by the API.</p>
                </Col>
            </Row>
            <ExploreApiButton endpoint={endpoint} />
            <pre id="api-example-block" className='pre-scrollable p-4 my-2 border rounded'>
                <code>
                    {JSON.stringify(apiMeExampleValue, null, 2)}
                </code>
            </pre>
        </Container>
    )
}
