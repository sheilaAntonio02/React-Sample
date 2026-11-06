

function SideBar({onSelectedTab}){
    return(
        <>
            <section className="fixed h-screen bg-[#412C2C] left-0 top-0 w-15 hover:w-30 duration-300 group delay-300">
                <div className=" h-screen blur blur-duration-300 hover:blur-none hover:w-30 duration-300 group delay-300 px-5 py-4 space-y-3">
                    <p onClick={() => onSelectedTab('Home')} className="text-white cursor-pointer hover:text-yellow-500">HOME</p>
                    <p onClick={() => onSelectedTab('Manage')} className="text-white cursor-pointer hover:text-yellow-500">MANAGE</p>
                </div>
            </section>
        </>
    )
}
export default SideBar