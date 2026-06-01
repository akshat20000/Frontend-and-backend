import './App.css'
// import Home from './pages/home'
// import AdminHome from './pages/adminhome'
// import RenderingList from './pages/renderinglists'
// function App() {
//   let type=true;
//   let content;
//   if(type){
//     content=<AdminHome/>
//   }else{
//     content = <Home/>
//   }
//   return (
//     <>
//     <h1>Welcome to my Practice</h1>
//       <div>{content}</div>
//       <div>
//       {/* <RenderingList></RenderingList> */}
//       </div>
//     </>
//   )
// }

// import Game from './tic-tac-toe/index'
// function App() {
//   return(
//     <>
//     <Game></Game>
//     </>
//   )
// }

//zod
import UserRegistration from "./pages/UserRegistration"
function App(){
  return(
    <>
    <UserRegistration/>
    </>
  )
}
export default App
