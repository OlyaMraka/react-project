// Json Placeholder types

export type ToDoTask = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type ToDo = {
    toDoTask: ToDoTask
}

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

export type DummyToDoTask = {
    userId: number,
    id: number,
    todo: string,
    completed: boolean
}

export type DummyToDoTaskComponentProps = {
    toDoTask: DummyToDoTask,
}

export type DummyToDoResponse = {
    todos: DummyToDoTask[],
    total: number,
    skip: number,
    limit: number,
}

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

export type DummyProductsResponse = {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}
export type ProductComponentProps = {
    product: Product,
}

export type Dimensions = {
    width: number;
    height: number;
    depth: number;
}

export type Meta = {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export type DummyReviewComponentProps = {
    review: Review;
}
