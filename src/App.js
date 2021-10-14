import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import ArticleList from './pages/ArticlesList'

function App() { 
  return (
    <Router>
      <div className="App">
        <div id="page-body">
        <Route path="/" component={HomePage} exact/>
        <Route path="/about" component={AboutPage} exact/>
        <Route path="/articles-list" component={ArticleList} exact/>
        <Route path="/article" component={ArticlePage} exact/>
        </div>
      </div>
    </Router>
  );
}

export default App;