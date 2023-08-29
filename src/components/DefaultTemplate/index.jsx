import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ children, setModalVisible }) =>{
    
    return (
        <>
            <Header setModalVisible={setModalVisible}/>
            <main>{children}</main>
            <Footer />
        </>
    )
}