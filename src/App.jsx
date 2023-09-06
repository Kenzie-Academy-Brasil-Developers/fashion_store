import "./styles/index.scss";
import RoutesMain from "./routes/routesMain";
import { ToastContainer } from "react-toastify";
import { Loading } from "./components/Loading";
import { useUserContext } from "./providers/userContext";

const App = () => {
    const { loading } = useUserContext();

    return (
        <>
            <ToastContainer />
            {loading ? <Loading /> : <RoutesMain />}
        </>
    );
};

export default App;