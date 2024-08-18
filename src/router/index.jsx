import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import App from "../App";
  import {SignIn, SignUp} from '@pages'
  import Dashboard from "../pages/dashboard/Dashboard";
  import Sidebar from "../components/ui";
  import Teachers from "../pages/teachers/Teachers";
  import AddTeachers from "../pages/teacherAdd/TeacherAdd";
  import SingleTeacher from "../pages/singleTeacher/SingleTeacher";
  import Students from "../pages/students/students";
  import Billing from "../pages/billing/Billing";
  import Settings from "../pages/settings/settings";
  import Exams from "../pages/exams/Exams";
  import Features from "../pages/features/Features";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<SignUp/>}/>
            <Route path="sign-in" element={<SignIn/>}/>
            <Route path="sidebar" element={<Sidebar/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="teachers" element={<Teachers/>}/>
            <Route path="teacher-add" element={<AddTeachers/>}/> 
            <Route path="singleteacher" element={<SingleTeacher/>}/>
            <Route path="students" element={<Students/>}/>
            <Route path="billing" element={<Billing/>}/>
            <Route path="settingsAndProfile" element={<Settings/>}/>
            <Route path="exams" element={<Exams/>}/>
            <Route path="features" element={<Features/>}/>
        </Route>
      )
    );
    return <RouterProvider router={router}/>;
  };
  
  export default Index;
  