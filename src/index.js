//import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   // document.getElementById("root")
// );


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//        <App />
//      </AuthContextProvider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



