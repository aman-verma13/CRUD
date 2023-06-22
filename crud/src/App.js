import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./Component/Table";
import Edit from "./Component/Edit";
import Add from "./Component/Add";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Table />} />
                    <Route path="edit" element={<Edit />} />
                    <Route path="add" element={<Add />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
