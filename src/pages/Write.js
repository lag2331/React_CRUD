import Responsive from '../components/common/Responsive';
import WriteAction from "../components/write/WriteAction";
import EditorContainer from "../components/write/EditorContainer";
import WriteActionContainer from '../containers/write/WriteActionContainer';
import PostButton from '../containers/PostButton';

const Write = () => {
    return (
        <Responsive>
            <EditorContainer />
            <WriteActionContainer />
            <PostButton />
        </Responsive>
    );
};

export default Write;