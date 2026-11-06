

function DeleteModal({ isOpen, onConfirm, onClose, pickProfile }) {
    if (!isOpen) return;
    return (
        <>
            <div className="flex justify-center items-center fixed top-0 w-full h-screen bg-white/10 backdrop-blur-sm">
                <div className="w-100 h-fit rounded-xl pt-5 bg-[#8EA987] shadow-xl">
                    <p className="text-center font-semibold text-xl">Confirm deletion?</p>
                    <div className="flex flex-col justify-center items-center gap-5 py-5">
                        <img src={pickProfile.img} alt="" className="rounded-full w-50 h-50" />
                        <div className="">
                            <p className="text-center text-[#342E22] font-semibold text-2xl italic">{pickProfile.name}, <span>{pickProfile.age}</span></p>
                            <p className="text-center font-semibold text-md">{pickProfile.address}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-3 p-5">
                        <button onClick={onConfirm} className="px-5 py-2 rounded-xl bg-[#523434] hover:scale-110 hover:duration-300 text-white cursor-pointer">Ok</button>
                        <button onClick={onClose} className="px-5 py-2 rounded-xl bg-[#342E22] hover:scale-110 hover:duration-300 text-white cursor-pointer">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DeleteModal