import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LoadingData } from "./LoadingData";


export const AboutMe = () =>
{
    const [aboutData, setAboutData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const getAboutDataAsync = async () =>
    {
        setTimeout(async () =>
        {
            try
            {
                const reqData = await fetch("https://localhost:5001/api/about");
                const data = await reqData.json();

                if (reqData.status === 404)
                {
                    setErrors("No information found")
                }

                setAboutData(data);
                setIsLoading(false);

            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
            }
        }, 150)
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
            </Container>
        )
    }
}
