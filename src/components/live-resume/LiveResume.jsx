import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { AppFooter } from "../AppFooter"
import { useState, useEffect } from "react"
import { LoadingData } from "../LoadingData"
import { LiveResumeHeader } from "./components/LiveResumeHeader"
import { LiveResumeExperience } from "./components/LiveResumeExperience"
import { LiveResumeProjects } from "./components/LiveResumeProjects"
import { LiveResumeStudies } from "./components/LiveResumeStudies"

const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT

const endpoint = '/api/me'

export const LiveResume = () =>
{
    const apiRoute = `${host}:${port}${endpoint}`

    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState("");

    const [about, setAbout] = useState([]);
    const [contact, setContact] = useState([]);
    const [experience, setExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [studies, setStudy] = useState([]);

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

                Object.entries(data).map(([key, value]) =>
                {
                    setAbout(value.about);
                    setContact(value.contact);
                    setExperience(value.experience);
                    setProjects(value.projects);
                    setStudy(value.study);
                }
                );

                setIsLoading(false);

            } catch (err)
            {
                setErrors(`Error while fetching API: ${err.message}`);
                setIsLoading(false);
            }

        }, 350)
    }

    useEffect(() =>
    {
        setIsLoading(false);
        getData();
    }, []);

    if (errors !== "")
    {
        return <div>{errors}</div>
    } else if (isLoading)
    {
        return (
            <LoadingData />
        )
    } else if (!isLoading && errors === "")
    {
        return (
            <Container fluid className="h-100 p-4">
                <Container as='header'>
                    <LiveResumeHeader lrAbout={about} lrContact={contact} />
                </Container>
                <Container as='main' className="py-4 align-items-center">
                    <LiveResumeExperience lrExperience={experience} />
                    <LiveResumeProjects lrProjects={projects} />
                    <LiveResumeStudies lrStudies={studies} />
                </Container>
                <Row as='footer'>
                    <Col className="d-flex justify-content-center text-center p-3">
                        <AppFooter />
                    </Col>
                </Row>
            </Container>
        )
    }
}
