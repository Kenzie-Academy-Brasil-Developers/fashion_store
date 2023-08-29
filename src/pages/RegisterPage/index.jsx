import registerImg from '../../assets/registerImage.png'
import backArrow from '../../assets/backArrow.png'
import { RegisterForm } from '../../components/form/RegisterForm'
import styles from './style.module.scss'

export const RegisterPage = () =>{
    return(
        <main>
            <div className={styles.containerBox}>
                <img src={registerImg} alt='register image'/>
                <div className={styles.flexBox}>
                    <button className={styles.buttonBack}>
                        <img src={backArrow} alt='back Arrow'/>
                        <p className='paragraph m'>VOLTAR</p>
                    </button>
                    <h1 className='title xl mobile'>CADASTRAR-SE</h1>
                    <p className='paragraph'>Seja bem vindo, administrador!</p>
                    <RegisterForm/>
                </div>
            </div>
        </main>
    )
}