import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from 'react'
import { LoadingData } from "./LoadingData";
import { capitalize } from "../utils";


const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT
const endpoint = '/api/contact'

const apiRoute = `${host}:${port}${endpoint}`

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
        <div className="d-flex m-0 justify-content-center">
            <i className={getIconClassName(label)}></i>
            <h6 className="mx-2">{capitalize(label)}</h6>
        </div>
        <p className="m-0">{value}</p>
    </>
);



export const Contact = () =>
{
    const [isLoading, setIsLoading] = useState(true);
    const [contactInfo, setContacInfo] = useState([]);
    const [errors, setErrors] = useState("");

    const getContactInfoAsync = async () =>
    {
        setTimeout(async () =>
        {
            try
            {
                const dataReq = await fetch(apiRoute);

                if (dataReq.status === 404)
                {
                    setErrors("No contact information found");
                } else
                {
                    const data = await dataReq.json();
                    setContacInfo(data);
                }
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
            getContactInfoAsync();
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
                        <h4 className="p-2 m-0">
                            Contact
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Get in touch:</p>
                    </Col>
                </Row>
                <Row className="py-2 text-center">
                    {
                        contactInfo.map((contactData) => (
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

            </Container>

        )
    }
}

