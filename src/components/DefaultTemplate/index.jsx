import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({ children }) =>{
    
    return (
        <>
            <Header />
                <main>
                    <div className="container">
                        {children}  
                    </div>
                </main>
            <Footer />
        </>
    )
}