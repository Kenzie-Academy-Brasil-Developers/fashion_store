import "./styles/index.scss";
import RoutesMain from "./routes/routesMain";
import { useContext } from "react";
import { UserContext } from "./providers/userContext";
import { Loading } from "./components/Loading";

const App = () => {
    const { loading } = useContext(UserContext);
    return (
        <>
        {loading ? <Loading/> : <RoutesMain /> }
            
        </>
    );
};

export default App;
