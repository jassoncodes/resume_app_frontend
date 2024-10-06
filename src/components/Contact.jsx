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
    'linkedIn': 'bi bi-linkedin'
}

const getIconClassName = (iconName) =>
{
    return icons[iconName];
}

const ContacInfoItem = ({ label, value }) =>
(
    <>
        <i className={getIconClassName(label)}></i>
        <div className="d-flex flex-column text-start mx-2">
            <h6>{capitalize(label)}</h6>
            <p className="m-0">{value}</p>
        </div>
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
                const data = await dataReq.json();

                if (dataReq.status === 404)
                {
                    setErrors("No contact information found");
                }

                setContacInfo(data);
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
                {

                    contactInfo.map((info) => (
                        <Row key={info.id}>
                            {
                                Object.entries(info).map(([key, value]) => (
                                    key !== "id" && (
                                        <Col key={key} className="d-flex align-items-start">
                                            <ContacInfoItem label={key} value={value} />
                                        </Col>
                                    )

                                ))
                            }
                        </Row>
                    ))
                }

            </Container>

        )
    }
}

