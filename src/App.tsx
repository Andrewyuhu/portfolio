import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router";
import ExampleProject from "./pages/ExampleProject";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="test" element={<ExampleProject></ExampleProject>}></Route>
      </Route>
    </Routes>
  );
}
export default App;
