
import { useForm } from "react-hook-form";
import { useProductsContext } from "../../providers/productsContext";
import style from "./style.module.scss";
import api from "../../services/api";
import { MdOutlineModeEditOutline } from "react-icons/md";


const ModalFill = () => {
    const { setIsOpenFill, modalRef, buttonRef, modalFillObjc, setmodalFillObjc, productsList, productId,submitFill ,handleSubmit,register} = useProductsContext()


    return (
        <>
            <div className={style.modalOverplay}>
                <div ref={modalRef} className={style.moadlBox}>

                    <div className={style.div1}>
                        <h4>EDITAR PRODUTO</h4>
                        <button ref={buttonRef} onClick={() => setIsOpenFill(false)}>X</button>
                    </div>



                    <form className={style.form} onSubmit={handleSubmit(submitFill)}>
                        <input {...register('name')} type="text" placeholder={modalFillObjc[0].name} />
                        <input type="number" {...register('price')} placeholder={modalFillObjc[0].price} />
                        <input {...register('image')} type="text" placeholder={modalFillObjc[0].image} />
                        <textarea {...register('description')} placeholder={modalFillObjc[0].description} cols="30" rows="10"></textarea>

                        <button type="submit">
                            <MdOutlineModeEditOutline size={28} color="white" />
                            EDITAR PRODUTO
                        </button>
                    </form>

                </div>
            </div>

        </>
    );
};

export default ModalFill;
