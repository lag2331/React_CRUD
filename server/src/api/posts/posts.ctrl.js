import Post from '../../models/post';

export const write = async ctx => {
    const { title, body, user, password } = ctx.request.body;
    const post = new Post({
        title,
        body,
        user,
        password,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1){
        ctx.status = 400;
        return;
    }
    try {
        const posts = await Post.find()
        .sort({ _id: -1 })
        .limit(10)
        .skip((page - 1) * 10)
        .exec();
        const postCount = await Post.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await Post.findByIdAndRemove(id).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
            new: true,
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};