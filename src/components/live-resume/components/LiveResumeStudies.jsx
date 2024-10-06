import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const LiveResumeStudies = ({ lrStudies }) =>
{
    return (
        <>
            <Row className="border-bottom">
                <Col>
                    <h6>Studies:</h6>
                </Col>
            </Row>
            <Row as='section' id='studies'>
                {
                    lrStudies.map((studiesData) => (
                        <Row key={`studies-${studiesData.id}`} className="mx-1 my-2 p-0">
                            <span>{studiesData.title}</span>
                            <span>{studiesData.institution}</span>
                            <div>
                                <i className="bi bi-calendar-fill"></i>
                                <span className='mx-2'>{studiesData.startDate} - {studiesData.endDate}</span>
                            </div>
                        </Row>
                    ))
                }
            </Row>
        </>
    )
}
