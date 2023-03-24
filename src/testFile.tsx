import Button from "./UI/Button/Button";
// import {enumButton} from "./enum/enumButton";
// import {useState} from "react";
// import {ModalProps} from "./UI/Modal/Modal";
// import {lorem} from "./utils/const";
// import {Modal} from "./UI";
// import {enumStyle} from "./enum/enumStyle";
//
// const TestFileJsx = () => {
//     const [modalAction, setModalAction] = useState<boolean>(false);
//     const [contentModal, setContentModal] = useState<ModalProps | null>(null)
//
//     const handlerOpenModal = (): void => {
//         setModalAction(true)
//     }
//     const handlerCloseModal = (): void => {
//         setModalAction(false)
//     }
//     const firstButton = (): void => {
//         handlerOpenModal()
//         setContentModal({
//             onClick: handlerCloseModal,
//             content: lorem.lorem30,
//             closeButton: true,
//             titleHeader: 'First Number'
//         })
//     }
//
//     const secondButton = (): void => {
//         handlerOpenModal()
//         setContentModal({
//             onClick: handlerCloseModal,
//             content: lorem.lorem20,
//             closeButton: false,
//             titleHeader: 'Second Number'
//         })
//     }
//     return (
//         <>
//             <div style={{display: "flex", gap: "20px"}}>
//                 <Button style={enumButton.PRIMARY} onClick={firstButton}><p>Open First modal</p></Button>
//                 <Button style={enumButton.SECONDARY} onClick={secondButton}><p>Open Second modal</p></Button>
//             </div>
//             {modalAction &&
//                 !!contentModal && <Modal
// 					onClick={contentModal.onClick}
// 					content={contentModal.content}
// 					titleHeader={contentModal.titleHeader}
// 					style={enumStyle.DARK} closeButton={contentModal.closeButton}/>}
//
//         </>
//
//     );
// };
//
// export default TestFileJsx;