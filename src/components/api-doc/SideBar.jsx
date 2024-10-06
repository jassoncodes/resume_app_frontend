import { NavLink } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';

// import {Nav, Navbar, NavbarToggle, NavDropdown} from 'react-bootstrap';
import { DropdownButton, DropdownItem, Navbar } from 'react-bootstrap';

export const SideBar = () =>
{
    return (
        <>
            <Navbar
                collapseOnSelect
                expand={'md'}
                bg=''
                className="p-0 d-flex flex-column"
            >
                <ListGroup.Item action as='li' className="p-0">
                    <NavLink className="d-flex flex-fill p-2 justify-content-center nav-link border-bottom mb-2" to={"/api/how-to"}>How to use?</NavLink>
                </ListGroup.Item>
                <DropdownButton title='/api' className="d-flex flex-fill justify-content-center" variant='flush'>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to={"/api/me"}>/api/me</NavLink></DropdownItem>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to="/api/about">/api/about</NavLink></DropdownItem>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to="/api/experience">/api/experience</NavLink></DropdownItem>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/api/study'>/api/study</NavLink></DropdownItem>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/api/project'>/api/project</NavLink></DropdownItem>
                    <DropdownItem as='div' className="p-0"><NavLink className="d-flex flex-fill p-2 justify-content-center nav-link" to='/api/contact'>/api/contact</NavLink></DropdownItem>
                </DropdownButton>
            </Navbar>

        </>
    )
}
