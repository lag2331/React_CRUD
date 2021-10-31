import React, { useEffect } from 'react';
import WriteAction from '../../components/write/WriteAction';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, user, password, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        user: write.user,
        password: write.password,
        post: write.post,
        postError: write.postError,
    }));

    const onPublish = ( title, body, user, password ) => {
        dispatch(
            writePost({
                title,
                body,
                user,
                password,
            }),
        );
    };

    const onCancel = () => {
        history.goBack();
    };
    
    // useEffect(() => {
    //     if (post) {
    //         history.push('/list');
    //     }
    //     if (postError) {
    //         console.log(postError);
    //     }
    // }, [history, post, postError]);

    return <WriteAction onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);