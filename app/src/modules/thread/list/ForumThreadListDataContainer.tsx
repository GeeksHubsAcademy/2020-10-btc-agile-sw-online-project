import {FunctionComponent} from "react";
import ForumThreadListView from "./ForumThreadListView";
import {useHistory} from "react-router";
import {RouteGenerator} from "../../../routing/RouteGenerator";
import {ROUTE_THREAD_DETAIL} from "../../../routing/Routes";
import useFetchThreads from "../task/UseFetchThreads";

interface ForumThreadListDataContainerProps {

}

const ForumThreadListDataContainer: FunctionComponent<ForumThreadListDataContainerProps> = (
    {

    }
) => {
    const history = useHistory();
    const {isLoading, data, status} = useFetchThreads();

    console.log('Cargando', isLoading);
    console.log('Datos', data);
    console.log('Status', status);

    const handleOnThreadClick = (id: string): void => {
        const routeGenerator: RouteGenerator = new RouteGenerator();
        const route: string = routeGenerator.generate(ROUTE_THREAD_DETAIL, {id});
        history.push(route);
    }

    return (
        <ForumThreadListView
            goToThreadDetail={handleOnThreadClick}
        />
    );
};

export default ForumThreadListDataContainer;
