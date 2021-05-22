import '../Modal/Modal.css'

export default function Modal({children, modal, setModal}) {
    
    function close_modal(e)  {
        if (e.target.classList.contains("modal")) {
            setModal(false)
        }
        console.log(e.target.classList.contains("modal"))
    }

    return (
        <div className={modal ? 'modal' : 'modal _hidden'} onClick={(e) => close_modal(e)}>
            <div className="modal__body">
                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    )
}