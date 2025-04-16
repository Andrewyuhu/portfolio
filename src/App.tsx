import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import TalkyProject from "./pages/TalkyProject";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="talky" element={<TalkyProject></TalkyProject>}></Route>
      </Route>
    </Routes>
  );
}
export default App;
