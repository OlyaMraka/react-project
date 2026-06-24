// Json Placeholder types

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type PostComponentProps = {
    post: Post,
}

export type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}

export type CommentComponentProps = {
    comment: Comment,
}

// Dummy Json types

export type DummyContainerComponentProps = {
    limit: number,
}

export type Reactions = {
    likes: number,
    dislikes: number,
}

export type DummyPost = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: Reactions,
    views: number,
    userId: number,
}

export type DummyPostComponentProps = {
    post: DummyPost,
}

export type DummyPostResponse = {
    posts: DummyPost[],
    total: number,
    skip: number,
    limit: number,
}

export type DummyCommentsResponse = {
    comments: DummyComment[];
    total: number;
    skip: number;
    limit: number;
}

export type DummyCommentComponentProps = {
    comment: DummyComment,
}

export type DummyComment = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
}

export type User = {
    id: number;
    username: string;
    fullName: string;
}
