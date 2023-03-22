import "./App.scss";
import {enumStyle} from "./enum/enumStyle";
import Modal from "./component/Modal/Modal";
import {enumLorem} from "./enum/enumLorem";
import Button from "./UI/Button/Button";
import {useEffect, useState} from "react";
import {enumButton} from "./enum/enumButton";
import {ModalProps} from "./component/Modal/Modal.utils";
import ProductCard from "./component/ProductCard/ProductCard";
import {TypeProduct} from "./types/TypeProduct";

const App = () => {
    const [modalAction, setModalAction] = useState<boolean>(false);
    const [contentModal, setContentModal] = useState<ModalProps>({
        onClick: () => {
        },
        content: '',
        closeButton: false,
        titleHeader: ''
    })
    const [products, setProducts] = useState<TypeProduct[]>([]);
    const handlerOpenModal = (): void => {
        setModalAction(true)
    }
    const handlerCloseModal = (): void => {
        setModalAction(false)
    }

    const firstButton = (): void => {
        handlerOpenModal()
        setContentModal({
            onClick: handlerCloseModal,
            content: enumLorem.lorem30,
            closeButton: true,
            titleHeader: 'First Number'
        })
    }

    const secondButton = (): void => {
        handlerOpenModal()
        setContentModal({
            onClick: handlerCloseModal,
            content: enumLorem.lorem20,
            closeButton: false,
            titleHeader: 'Second Number'
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./product.json')
            const json = await response.json()
            setProducts(json.products.splice(1, 10))

        }
        if (!products[0]) {
            fetchData()
        }
    }, [])

    console.log(products)


    return (
        <div>
            <div style={{display: "flex", gap: "20px"}}>
                <Button style={enumButton.primary} onClick={firstButton}><p>Open First modal</p></Button>
                <Button style={enumButton.secondary} onClick={secondButton}><p>Open Second modal</p></Button>
            </div>
            {!!products.length && products.map(product => <ProductCard key={product.id} product={product}/>)}


            {modalAction &&
				<Modal
					onClick={contentModal.onClick}
					content={contentModal.content}
					titleHeader={contentModal.titleHeader}
					style={enumStyle.DARK} closeButton={contentModal.closeButton}/>}
        </div>
    );
}

export default App;
