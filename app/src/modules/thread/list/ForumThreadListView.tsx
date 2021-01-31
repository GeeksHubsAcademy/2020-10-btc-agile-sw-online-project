import {FunctionComponent} from "react";
import {Col, Row} from "react-bootstrap";
import "./forum-thread-list-view.scss";

interface ForumThreadListViewProps {
    goToThreadDetail: (id: string) => void;
}

interface Thread {
    id: string;
    title: string;
    description: string;
    author: string;
}

const ForumThreadListView: FunctionComponent<ForumThreadListViewProps> = (
    {
        goToThreadDetail
    }
) => {

    const threads: Thread[] = [
        {
            id: '1',
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD',
            author: "Pedroxdddd - lol"
        },
        {
            id: '2',
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD',
            author: "Pedroxdddd - lol"
        },
        {
            id: '3',
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD',
            author: "Pedroxdddd - lol"
        }
    ];

    return (
        <div className={"forum-thread-list-view-container"}>
            <Row>
                <Col>
                    <div>
                        {
                            threads.map((thread, index) => (
                                <div
                                    className={"thread"}
                                    key={index}
                                    onClick={() => goToThreadDetail(thread.id)}
                                >
                                    <img src={"bonfire.png"}/>
                                    <div className={"thread__info"}>
                                        <h5>{thread.title}</h5>
                                        <span>Creado por: {thread.author}</span>
                                        <p className={"description"}>
                                            {thread.description}
                                        </p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ForumThreadListView;
