import {FunctionComponent} from "react";
import "./app-wrapper.scss";
import {Col} from "react-bootstrap";
import Toolbar from "../toolbar/Toolbar";

interface AppWrapperProps {

}

const AppWrapper: FunctionComponent<AppWrapperProps> = (
    {
        children
    }
) => {
    return (
        <div className={"app-wrapper-container"}>
            <Toolbar/>

            <div className={"app-wrapper-container__content"}>
                <Col md={2}>
                    <div className={"app-wrapper-container__banner"}>
                        <img src={"siegmeyer.png"} alt={"siegmeyer-pj"}/>
                    </div>
                </Col>
                <Col md={8}>
                    <div className={"app-wrapper-container__main"}>
                        {children}
                    </div>
                </Col>
                <Col md={2}>
                    <div className={"app-wrapper-container__banner"}>
                        <img src={"solaire.png"} alt={"solaire-pj"}/>
                    </div>
                </Col>
            </div>
        </div>
    )
};

export default AppWrapper;
