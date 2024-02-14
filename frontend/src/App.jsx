import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/login"
import Home from "./pages/Home"
import Spinner from "./components/Spinner"
import { Suspense, lazy } from "react"
import Signup from "./pages/signup"
import Admission from "./pages/admission"
// import { Dashboard } from "@mui/icons-material"
import Dashboard from "./pages/dashboard"
import Payment from "./pages/payment"
import Adminlogin from "./pages/adminlogin"
import Courses from "./pages/courses"
import Enroll from "./pages/enroll"
import Userlist from "./pages/userlist"
// import CustomSideNav from "./components/CustomSideNav"
const LazyAbout=lazy(()=>import('./pages/About'))
const LazyContact=lazy(()=>import("./pages/Contact"))
function App() {
  const router=createBrowserRouter([
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/adminlogin',
      element:<Suspense fallback={<Spinner/>}><Adminlogin/></Suspense>
    },
    {
      path:'/courses',
      element:<Suspense fallback={<Spinner/>}><Courses/></Suspense>
    },
    {
      path:'/admission',
      element:<Suspense fallback={<Spinner/>}><Admission/></Suspense>
    },
    {
      path:'/userlist',
      element:<Suspense fallback={<Spinner/>}><Userlist/></Suspense>
    },
    {
      path:'/login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/signup',
      element:<Suspense fallback={<Spinner/>}><Signup/></Suspense>
    },
    {
      path:'/adminlogin',
      element:<Suspense fallback={<Spinner/>}><Adminlogin/></Suspense>
    },
    {
      path:'/dashboard',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
    },
    {
      path:'/enroll',
      element:<Suspense fallback={<Spinner/>}><Enroll/></Suspense>
    },
    {
      path:'/payment',
      element:<Suspense fallback={<Spinner/>}><Payment/></Suspense>
    },
    
    {
       path:'/about',
       element:<Suspense fallback={<Spinner/>}><LazyAbout/></Suspense>
    },
    {
      path:'/contact',
      element:<Suspense fallback={<Spinner/>}><LazyContact/></Suspense>
   }
  ])
  return (
   
 
  <RouterProvider router={router}></RouterProvider>

  )
}
export default App
