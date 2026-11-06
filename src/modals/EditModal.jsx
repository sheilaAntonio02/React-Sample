import { useEffect, useState } from "react";

function EditModal({ isEditModal, onCancel, onSave, pickProfile }) {
    if (!isEditModal) return;
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        if(pickProfile){
            setName(pickProfile.name);
            setAge(pickProfile.age);
            setAddress(pickProfile.address);
            setImg(pickProfile.img);
        }
    }, [pickProfile])

    const toSave = () => {
        onSave({...pickProfile, name, age, address, img})
    } 




    return (
        <>
            <div className="flex justify-center items-center fixed top-0 w-full h-screen bg-black/40 backdrop-blur-sm">
                <div className="w-100 h-fit px-6 py-3 bg-[#BCC5B5] rounded-xl space-y-3">
                    <p className="text-white font-bold text-center text-lg">Edit Student</p>
                    <input type="text" className="w-full px-5 py-3 bg-[#94A08B] rounded-md" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                    <input type="number" className="w-full px-5 py-3 bg-[#94A08B] rounded-md" placeholder="Age" onChange={(e) => setAge(e.target.value)} value={age} />
                    <input type="text" className="w-full px-5 py-3 bg-[#94A08B] rounded-md" placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />
                    <input type="text" className="w-full px-5 py-3 bg-[#94A08B] rounded-md" placeholder="Image Url" onChange={(e) => setImg(e.target.value)} value={img} />
                    <div className="flex items-center gap-3">
                        <button onClick={toSave} className="px-5 py-3 rounded-xl bg-[#653E3E] hover:scale-105 hover:duration-300 text-white w-full cursor-pointer">Save</button>
                        <button onClick={onCancel} className="px-5 py-3 rounded-xl bg-[#57543C] hover:scale-105 hover:duration-300 text-white w-full cursor-pointer">Cancel</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default EditModal