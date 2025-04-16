import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router";
import TalkyProject from "./pages/TalkyProject";
import VikeAndSellProject from "./pages/VikeAndSellProject";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="talky" element={<TalkyProject></TalkyProject>}></Route>
        <Route
          path="vikeandsell"
          element={<VikeAndSellProject></VikeAndSellProject>}
        ></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
export default App;
