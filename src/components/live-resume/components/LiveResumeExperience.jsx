import React from 'react'
import { Col, Row } from 'react-bootstrap'


export const LiveResumeExperience = ({ lrExperience }) =>
{
    return (
        <>
            <Row className="border-bottom">
                <Col>
                    <h6>Highlights of Experience:</h6>
                </Col>
            </Row>
            <Row as='section' id='experience'>
                {
                    lrExperience.map((experienceData) => (
                        <Row key={`experience-${experienceData.id}`} className="m-0 p-0">
                            <Row className="align-items-center py-1 m-0">
                                <Col id='title-company' className="text-start p-0">
                                    <Row className="p-0">
                                        <span className="fw-bold">{experienceData.title}</span>
                                    </Row>
                                    <Row className="p-0">
                                        <span className="font-italic">{experienceData.company}</span>
                                    </Row>
                                </Col>
                                <Col id='period' className="text-end p-0">
                                    <span>{`${experienceData.startDate} - ${experienceData.endDate}`}</span>
                                </Col>
                            </Row>
                            <Row id='activities' className="flex-column py-3 m-0">
                                {
                                    experienceData.experienceActivities.map((expActivity) => (
                                        <Col key={expActivity.id} className="p-1 border-bottom">
                                            <span>{expActivity.activityTitle}</span>
                                            <p>{expActivity.activityDescription}</p>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Row>

                    ))
                }
            </Row>
        </>
    )
}
