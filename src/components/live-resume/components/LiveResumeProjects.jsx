import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export const LiveResumeProjects = ({ lrProjects }) =>
{
    return (
        <>
            <Row className="border-bottom">
                <Col>
                    <h6>Projects:</h6>
                </Col>
            </Row>
            <Row as='section' id='projects'>
                {
                    lrProjects.map((projectsData) => (
                        <Row key={`experience-${projectsData.id}`} className="mx-1 my-2 p-0">
                            <Row className="align-items-center py-1 m-0">
                                <Col id='project-company' className="text-start p-0">
                                    <Card className='w-25'>
                                        <Card.Body>
                                            <Card.Title>{projectsData.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{projectsData.stack}</Card.Subtitle>
                                            <Card.Text>
                                                {projectsData.description}
                                            </Card.Text>
                                            <div className='d-flex flex-column small'>
                                                <Card.Link href="#">{projectsData.repo}</Card.Link>
                                                <Card.Link href="#">{projectsData.liveLink}</Card.Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                    ))
                }
            </Row>
        </>
    )
}
