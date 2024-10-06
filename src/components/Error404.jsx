import React, { useEffect, useState } from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Error404 = () =>
{
    const milliseconds = 5000;
    const [secondsRemaining, setSecondsRemaining] = useState(Math.floor(milliseconds / 1000));

    const navigateTo = useNavigate();

    useEffect(() =>
    {
        if (secondsRemaining <= 0) 
        {
            navigateTo("/")
        };

        const timerId = setInterval(() =>
        {
            setSecondsRemaining(prev =>
            {
                if (prev <= 1)
                {
                    clearInterval(timerId);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timerId);
    }, [secondsRemaining, navigateTo]);

    return (
        <Container fluid as='section' className="h-100">
            <Row>
                <Col>
                    <h4 className="m-0 p-2">404 Are you lost?</h4>
                    <NavLink>
                        <span>No worries I'll get you home in {secondsRemaining}...</span>
                    </NavLink>
                </Col>
            </Row>
        </Container>
    )
}
