import Home from './Components/Home'
import React from 'react';
import Headers from './Components/Headers';
function App() {
  return (
    <div >
     <Headers/>
     <br />
     <Home/>
    </div>
  );
}

export default App;





// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from "react-router-dom";
// import Home from './Components/Home'
// import Headers from './Components/Headers';
// import { Fav } from './Components/Fav';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Headers />
//           <Route exact path="/"><Home /></Route>
//           <Route exact path='/Fav/:id'><Fav /></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

