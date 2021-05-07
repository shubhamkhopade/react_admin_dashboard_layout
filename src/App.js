import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard/dashboard';

function App() {
  return <>
  <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar></Topbar>
        <div class="container-fluid">
          <Dashboard></Dashboard>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default App;
