import React, { Suspense }from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Loading() {
  return <h2>🌀 Loading...</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>    
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
