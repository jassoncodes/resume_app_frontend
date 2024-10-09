import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LoadingData } from "./LoadingData";
import { useNavigate } from 'react-router-dom';



const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT
const endpoint = '/api/about'

const apiRoute = `${host}:${port}${endpoint}`

export const AboutMe = () =>
{
    const navigateTo = useNavigate();
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const getAboutDataAsync = async () =>
    {
        setTimeout(async () =>
        {
            try
            {
                const reqData = await fetch(apiRoute);
                if (reqData.status === 404)
                {
                    setErrors("No information found")
                } else
                {
                    const data = await reqData.json();

                    setAboutData(data);
                }
                setIsLoading(false);
            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
            }
        }, 150)
    }

    const handleClick = (e) =>
    {
        e.preventDefault();
        navigateTo('/contact');
    }

    useEffect(() =>
    {
        if (isLoading)
        {
            getAboutDataAsync();
        }
    }, []);

    if (errors !== "")
    {
        return <div>{errors}</div>
    }
    else if (isLoading)
    {
        return <LoadingData />
    } else if (!isLoading && errors === "")
    {
        return (
            <Container fluid as='section' className="h-100">
                <Row>
                    <Col>
                        <h4 className="m-0 p-2">About me</h4>
                    </Col>
                </Row>
                {aboutData.map((item, index) =>
                (
                    <Row key={index}>
                        <Col>
                            <h4>{item.name + ' ' + item.lastname}</h4>
                            <span>{item.description}</span>
                        </Col>
                    </Row>
                ))}
                <Row className='my-5'>
                    <Button onClick={handleClick} variant='dark' className='w-25 m-auto'>Contact</Button>
                </Row>
            </Container>
        )
    }
}
