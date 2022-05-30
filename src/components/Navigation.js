import Link from 'next/link';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
/* import { BiSun, BiMoon } from 'react-icons/bi';

import Logo from "../img/wikitech.png" */

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Link passHref href="/">
                    <a className="navbar-brand" style={{ color: "#5b10ff" }}>Periféricos</a>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                        <NavDropdown title="Lectores" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link href="/lectores/opticos">
                                    <a className="nav-link" aria-current="page">Ópticos</a>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link href="/lectores/magneticos">
                                    <a className="nav-link" aria-current="page">Magnéticos</a>
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link href="/lectores/resumen">
                                    <a className="nav-link" aria-current="page">Resumen</a>
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Navigation;