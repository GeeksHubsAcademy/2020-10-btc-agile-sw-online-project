import {FunctionComponent} from "react";
import {Navbar} from "react-bootstrap";
import {ROUTE_THREADS} from "../../routing/Routes";

const Toolbar: FunctionComponent = (
    {

    }
) => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href={ROUTE_THREADS}>Dark Souls Forum</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Desarrollado por: <a href={ROUTE_THREADS}>Elías martinez</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Toolbar;
