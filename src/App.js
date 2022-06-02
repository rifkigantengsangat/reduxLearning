import './App.css';
import AddPost from './features/Post/AddPost';
import PostList from './features/Post/PostList';

function App() {
 
  return (
    <div className="App">
  <PostList/>
  <AddPost/>
    </div>
  );
}

export default App;
