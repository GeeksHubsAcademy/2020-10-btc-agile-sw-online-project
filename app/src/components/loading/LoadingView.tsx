import {FunctionComponent} from "react";
import {ClipLoader} from "react-spinners";
import "./loading-view.scss";

interface LoadingProps {
    loading: boolean;
}

const LoadingView: FunctionComponent<LoadingProps> = (
    {
        loading
    }
) => {
    if (!loading) return null;

    return (
        <div className={'app-loading-view'}>
            <ClipLoader
                size={65}
                color={'#ffffff'}
                loading={loading}
            />
        </div>
    );
};

export default LoadingView;
