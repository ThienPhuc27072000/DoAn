import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Newsfeed from './pages/Newsfeed';
import Timeline from './pages/Timelines';
import AllMessage from './pages/AllMessage';
import Photos from './pages/Photos';
import AboutUser from './pages/AboutUser';
import Videos from './pages/Videos';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PostDetail from './pages/PostDetail';
import UpdatePost from './pages/UpdatePost';  

export default function App() {
  return (
   <>    
    <BrowserRouter> 
      <Header />     
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/newsfeed/" component={Newsfeed} />
        <Route exact path="/timeline/" component={Timeline} />
        <Route exact path="/messages/" component={AllMessage} />
        <Route exact path="/photos/" component={Photos} />
        <Route exact path="/aboutme/" component={AboutUser} />
        <Route exact path="/videos/" component={Videos} />
        <Route exact path="/signup/" component={SignUp} />
        <Route exact path="/posts/:postId/" component={PostDetail} />
        <Route exact path="/updatepost/:postId/" component={UpdatePost} />
      </Switch>
      <Footer />
    </BrowserRouter> 
   </> 
  )
}
