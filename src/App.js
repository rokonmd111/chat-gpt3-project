import './App.css';

import { Footer, Blog, Possibility, WhatGPT3, Header, Feature } from './container'
import { CalltoAction, Brand, Navbar } from './components'

function App() {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Feature></Feature>
      <Possibility></Possibility>
      <CalltoAction></CalltoAction>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
