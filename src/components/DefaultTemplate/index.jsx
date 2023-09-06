import { Footer } from "../Footer";
import { Header } from "../Header";

const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ marginTop: "7rem" }}>
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default DefaultTemplate