import client from './client';

export const PostAPI = ({ title, body, user, password }) =>
    client.post('/api/posts', {title, body, user, password });