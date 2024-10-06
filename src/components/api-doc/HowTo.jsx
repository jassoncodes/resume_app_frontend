import { Card, Container } from "react-bootstrap"

const host = import.meta.env.VITE_APP_HOST
const port = import.meta.env.VITE_APP_PORT
const endpoint = '/api/[endpoint]'

const apiRoute = `${host}:${port}${endpoint}`

export const HowTo = () =>
{


    return (
        <Container className="p-0">
            <Card className="p-2">
                <h6 className="pb-2 border-bottom">Using API Client</h6>
                <p>API clients like Postman and Insomnia allows you to interact with APIs using a visual user interface that make it easy to test API endpoints.
                    If you are not used to explore APIs endpoints, this is the recommended way to view my API resume:</p>
                <ol>
                    <li>Download and install the API client of your choice. For example with Postman.</li>
                    <li>Open up your API client and create a new workspace. Navigate to make a http request.</li>
                    <li>Select GET and enter the following in the body, as the request URL and click Send
                        <br /><code className="text-dark fw-bold">{apiRoute}</code>
                    </li>
                    <li>View the response JSON in your API client. The /api endpoint will list the available endpoints for you, or you can explore them here.</li>
                </ol>
            </Card>
            <Card className="p-2 mt-3">
                <h6 className="pb-2 border-bottom">Using cURL</h6>
                <p>cURL is a simple command line tool that allows you to make requests to a remote server. This is the fastest way to explore my API resume.</p>
                <ol>
                    <li>Ensure that cURL is installed on your machine. In your favorite command line interface, execute:
                        <br /><code className="text-dark fw-bold">curl --version</code>
                    </li>
                    <li>
                        You should see some output information about the version of cURL installed on your machine. If you get a message indicating you do not have cURL installed, you may download and install cURL or use another method to view my API resume. Once you have verified that cURL is installed, execute the following code in the command line:
                        <br /><code className="text-dark fw-bold">curl -k {apiRoute}</code>
                    </li>
                    <li>
                        <p>The /api endpoint will list the available endpoints for you, or you can explore them directly through the menu next to this section.</p>
                    </li>
                </ol>
                <p></p>
            </Card>
        </Container>
    )
}
