import Responsive from '../components/common/Responsive';
import WriteAction from "../components/write/WriteAction";
import EditorContainer from "../components/write/EditorContainer";

const Write = () => {
    return (
        <Responsive>
            <EditorContainer />
            <WriteAction />
        </Responsive>
    );
};

export default Write;