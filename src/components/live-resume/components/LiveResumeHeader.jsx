import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { capitalize } from '../../../utils';

const icons = {
    'email': 'bi bi-inbox-fill',
    'phone': 'bi bi-whatsapp',
    'github': 'bi bi-github',
    'linkedin': 'bi bi-linkedin'
}

const getIconClassName = (iconName) =>
{
    return icons[iconName];
}

const ContacInfoItem = ({ label, value }) =>
(
    <>
        <div className="d-flex m-0">
            <i className={getIconClassName(label)}></i>
            <h6 className="mx-2">{capitalize(label)}</h6>
        </div>
        <p className="m-0">{value}</p>
    </>
);

export const LiveResumeHeader = ({ lrAbout, lrContact }) =>
{
    return (
        <>
            <Row>
                {
                    lrAbout.map((aboutData) => (
                        <Col key={`${aboutData.name}-${aboutData.lastname}`.toLowerCase()} className="text-center" >
                            <h4>{aboutData.name} {aboutData.lastname}</h4>
                            <p>{aboutData.description}</p>
                        </Col>
                    ))
                }
            </Row>
            <Row className="py-2">
                {
                    lrContact.map((contactData) => (
                        Object.entries(contactData).map(([key, value]) => (
                            key !== "id" && (
                                <Col key={key} className="p-0 m-0">
                                    <ContacInfoItem label={key} value={value} />
                                </Col>
                            )
                        ))
                    ))
                }
            </Row>
        </>
    )
}


