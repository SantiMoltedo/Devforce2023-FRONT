
export const PushNoti = ({ accion = "revocada", serial = "0000000000" }) => {
    // VER QUE OPCIONES DE ACCION APARECEN EN LA CONDICION DE LOS ICONOS O DEL HEADER (Y VERIFICAR CON EL CSS)
    const triggerToast = () => {
        let toastLiveExample = document.getElementById('liveToast')
        let toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }

    return (
        <>
            {/* BOTON PARA PROBAR LA NOTIFICACION: */}
            <button type="button" className="btn btn-primary" id="liveToastBtn" onClick={triggerToast}>Show live toast</button>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className={`toast-header toast-header-${accion}`} >
                        <strong className="me-auto ms-auto">Licencia {accion}</strong>
                        <i className={`fa-solid ${accion == 'asignada' && 'fa-check'} ${accion == 'revocada' && 'fa-xmark'} ${accion == 'devuelta' && 'fa-clock'} text-white`} data-bs-dismiss="toast" aria-label="Close"></i>
                    </div>
                    <div className="toast-body pt-1">
                        <p className="mb-1">Serial de Licencia {accion}:</p>
                        <p className="text-decoration-underline text-center mb-0">{serial}</p>
                    </div>
                </div>
            </div>
        </>

    )
}
