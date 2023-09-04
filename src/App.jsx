import "./styles/index.scss";
import RoutesMain from "./routes/routesMain";
import { ToastContainer } from "react-toastify";

const App = () => {
    return (
        <>
            <RoutesMain />
            <ToastContainer />
        </>
    );
};

export default App;
