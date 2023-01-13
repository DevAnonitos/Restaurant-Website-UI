import React, { Suspense } from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const App = () => (
  <>
    <Suspense fallback={<Loading />}>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Laurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>    
    </Suspense>
  </>
);

export default App;