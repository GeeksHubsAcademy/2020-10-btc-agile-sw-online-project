import {FunctionComponent} from "react";
import {Col, Row} from "react-bootstrap";
import "./forum-thread-list-view.scss";

interface ForumThreadListViewProps {

}

interface Thread {
    title: string;
    description: string;
}

const ForumThreadListView: FunctionComponent<ForumThreadListViewProps> = (
    {

    }
) => {
    const threads: Thread[] = [
        {
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD'
        },
        {
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD'
        },
        {
            title: 'Como derrotar al Gael',
            description: 'No puedo hacerle defeat me cuesta mucho xD'
        }
    ];

    console.log(threads);

    return (
        <div className={"forum-thread-list-view-container"}>
            <Row>
                <Col>
                    <div>
                        {
                            threads.map(thread => (
                                <div>
                                    <h5>{thread.title}</h5>
                                    <p>{thread.description}</p>
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
