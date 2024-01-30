import react from 'react';
import {
  NoteListPage,
  NotePage
} from './pages/index';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <NoteListPage/>,
//   },
//   {
//     path:'/note/:id',
//     element:<NotePage/>
//   },
// ])
import {
  Header
} from './components/Index';
function App() {
  const { id } = useParams()
  return (
    <BrowserRouter>
     <div className="container dark">
      <div className="app">
       <Routes>
        <Route  path='/' element={<NoteListPage/>}/> 
        <Route  path='/note/:id' element={<NotePage/>}/> 
       </Routes>
      </div>
     </div>
    </BrowserRouter>
  )
}

export default App
