import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { LoadingData } from '../../LoadingData';

const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT

export const ExploreApiButton = ({ endpoint }) =>
{

    const apiRoute = `${host}:${port}${endpoint}`

    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState([]);
    const [errors, setErrors] = useState("");

    const hideElement = () =>
    {
        const apiExampleBlock = document.getElementById('api-example-block')
        apiExampleBlock.classList.add('d-none');
    }

    const getData = async () =>
    {
        setIsLoading(true);
        setTimeout(async () =>
        {
            try
            {
                const dataReq = await fetch(apiRoute);
                const data = await dataReq.json();

                if (dataReq.status === 404)
                {
                    setErrors("No contact information found");
                }

                setApiData(data);
                setIsLoading(false);

            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
            }

        }, 350)
    }

    const handleClick = (e) =>
    {
        e.preventDefault();
        getData();
        hideElement();
    }

    useEffect(() =>
    {
        setIsLoading(false);
    }, []);

    if (errors !== "")
    {
        return <div>{errors}</div>
    } else if (isLoading)
    {
        return <LoadingData />
    } else if (!isLoading && errors === "")
    {
        return (
            <Container as='section' className='p-0'>
                <Row>
                    <Col>
                        <Button variant='dark' onClick={handleClick}>Click here to explore the {endpoint} endpoint</Button>
                    </Col>
                </Row>
                <Row className='d-flex flex-grow-0'>
                    {
                        <Col>
                            {
                                apiData.map((item, index) => (
                                    <pre className='pre-scrollable p-4 my-2 border rounded' key={index}>
                                        <code>
                                            {JSON.stringify(item, null, 2)}
                                        </code>
                                    </pre>
                                ))
                            }
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}