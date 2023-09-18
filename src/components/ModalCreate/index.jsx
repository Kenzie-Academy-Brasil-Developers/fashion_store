import { useProductsContext } from "../../providers/productsContext";
import api from "../../services/api";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { FiPlusCircle } from "react-icons/fi";



const ModalCreate = () => {
    const { setIsOpen, modalRef, buttonRef ,setProducts,handleSubmit,submitCreate,register ,productsList} = useProductsContext()

   
    return (
        <>
            <div className={style.modalOverplay}>
                <div ref={modalRef} className={style.moadlBox}>

                   <div className={style.div1}>
                    <h4>NOVO PRODUTO</h4>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}>X</button>
                   </div>


                    <form className={style.form} onSubmit={handleSubmit(submitCreate)}>
                        <input {...register('name')} type="text" placeholder="NOME"/>
                        <input type="number" {...register('price')} placeholder="PREÇO (R$)" />
                        <input {...register('image')} type="text" placeholder="IMAGEM (URL)"/>
                        <textarea {...register('description')} placeholder="DESCRIÇÃO RESUMIDA" cols="30" rows="10"></textarea>

                        <button type="submit">
                        <FiPlusCircle size={28} color="white" />
                            NOVO PRODUTO</button>
                    </form>

                </div>
            </div>

        </>
    );
};

export default ModalCreate;
