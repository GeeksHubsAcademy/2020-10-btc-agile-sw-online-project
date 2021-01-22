import {FunctionComponent} from "react";
import {Router, RouterProps} from "react-router";

const Routing: FunctionComponent<RouterProps> = (
    {
        history
    }
) => {
    return (
        <Router history={history}>
            
        </Router>
    );
};

export default Routing;
