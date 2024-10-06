import { NavLink } from "react-router-dom"
import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
export const AppHeader = () =>
{
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Container fluid className="p-0">
            <Navbar expand="lg" expanded={isExpanded}>
                <NavLink to={"/"} className='navbar-brand fs-4' end>Resume API <br /><span className="fs-6">by jassoncodes</span></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavLink to="/api" className='nav-link' onClick={() => setTimeout(() => { setIsExpanded(false) }, 150)} >API Doc</NavLink>
                        <NavLink to="/live-resume" className='nav-link' onClick={() => setTimeout(() => { setIsExpanded(false) }, 150)} >Live Resume</NavLink>
                        <NavLink to="/about" className='nav-link' onClick={() => setTimeout(() => { setIsExpanded(false) }, 150)}>About me</NavLink>
                        <NavLink to="/contact" className='nav-link' onClick={() => setTimeout(() => { setIsExpanded(false) }, 150)}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}
