import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidenav from "./Components/Sidenav";
import Topnav from "./Components/Topnav";
import Dashboard from "./Components/Dashboard";
import AddUser from "./Components/AddUser";
import ViewUser from "./Components/ViewUser";
import AddCourse from "./Components/AddCourse";
import ViewCourse from "./Components/ViewCourse";
import AddContents from './Components/AddContents';
import ViewContents from './Components/ViewContents';
import AddStudent from './Components/AddStudent';
import ViewStudent from './Components/ViewStudent';
import Contact from './Components/Contact';

function App() {

  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="flex">
        <Sidenav expanded={expanded} setExpanded={setExpanded}/>
        <div className="h-screen overflow-y-auto overflow-x-hidden" style={{width: expanded ? `calc(100% - 15rem)` : `calc(100% - 3rem)`}}>
          <Topnav expanded={expanded} setExpanded={setExpanded}/>
          <div className="px-3">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-user" element={<AddUser />} />
              <Route path="/view-user" element={<ViewUser />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/view-course" element={<ViewCourse />} />
              <Route path="/add-contents" element={<AddContents />} />
              <Route path="/view-contents" element={<ViewContents />} />
              <Route path="/add-student" element={<AddStudent expanded={expanded}/>} />
              <Route path="/view-student" element={<ViewStudent />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
