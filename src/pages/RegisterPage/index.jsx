import registerImg from '../../assets/registerImage.png'
import backArrow from '../../assets/logoBack.png'
export const RegisterPage = () =>{
    return(
        <main>
            <div>
                <img src={registerImg} alt='register image'/>
                <div>
                    <div>
                        <img src={backArrow} alt='back Arrow'/>
                        <p>Voltar</p>
                    </div>
                    <h1>CADASTRAR-SE</h1>
                    <p>Seja bem vindo, administrador!</p>
                    <RegisterForm/>
                </div>
            </div>
        </main>
    )
}