import { useDispatch } from "react-redux";

export default function BaseModal({ 
  children,
  shown,
  close,
  modalShown,
}) {

  const dispatch = useDispatch();
  return shown == modalShown ? (
    <div 
      className="modal-backdrop"
      // onClick={() => {
      //   close();
      // }}
    >
      <div
        className={`bg_module modal_slide relative modal-content`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  ) : null;
}