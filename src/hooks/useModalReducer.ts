import { useAppDispatch, useAppSelector } from "../store/store";
import { responseModal, toggleIsActive } from "../store/slice";
import { resetModal } from "../store/slice/modal-slice/modal.slice";

interface useFavoriteReturnType {
  isActiveModal: boolean;
  response: boolean;
  productId: number | null;
  toggleIsActiveModal: (id: number | null) => void;
  resetModalValue: () => void;
  changeResponseModal: () => void;
}

const useModalReducer = (): useFavoriteReturnType => {
  const dispatch = useAppDispatch();

  const isActiveModal = useAppSelector((state) => state.modal.isActive);
  const response = useAppSelector((state) => state.modal.response);

  const productId = useAppSelector((state) => state.modal.id);
  const toggleIsActiveModal = (id: number | null) =>
    dispatch(toggleIsActive(id));

  const changeResponseModal = () => dispatch(responseModal(true));

  const resetModalValue = () => dispatch(resetModal());

  return {
    isActiveModal,
    response,
    productId,
    toggleIsActiveModal,
    changeResponseModal,
    resetModalValue,
  };
};

export default useModalReducer;
