import './App.css'
import ToDoContainer from "./components/toDoComponents/toDoContainer/ToDoContainer.tsx";
import PostContainer from "./components/postComponents/postContainer/PostContainer.tsx";
import CommentContainer from "./components/commentComponents/commentContainer/CommentContainer.tsx";
import DummyToDoContainer from "./components/dummyToDoComponents/dummyToDoContainer/DummyToDoContainer.tsx";
import DummyPostsContainer from "./components/dummyPostsComponents/dummyPostsContainer/DummyPostContainer.tsx";
import DummyCommentsContainer
  from "./components/dummyCommentsComponents/dummyCommentsContainer/DummyCommentContainer.tsx";
import DummyProductContainer
    from "./components/dummyProductsComponents/dummyProductsContainer/dummyProductsContainer.tsx";

function App() {

  return (
    <>
      <h2>First Task</h2>
      <ToDoContainer/>

      <h2>Second Task</h2>
      <PostContainer/>

      <h2>Third Task</h2>
      <CommentContainer/>

      <h2>Fourth Task - ToDoList</h2>
      <DummyToDoContainer limit={100}/>

      <h2>Fourth Task - PostList</h2>
      <DummyPostsContainer limit={100}/>

      <h2>Fourth Task - CommentList</h2>
      <DummyCommentsContainer limit={100}/>

        <h2>Fifth Task</h2>
        <DummyProductContainer limit={100}/>
    </>
  )
}

export default App
