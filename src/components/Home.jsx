

function Home({ personalInfo }) {
    return (
        <>
            <section className="bg-olive-200 w-full h-fit flex justify-center items-center py-10">
                <div>
                    <div className="bg-[#B79A9A] rounded-xl mb-2">
                        <p className="text-md font-sans text-center py-3">List of Students</p>
                    </div>
                    <div className="bg-[#7F696A] rounded-xl px-10 pb-5">
                        <div className="grid grid-cols-4 justify-between  w-250 text-white  rounded-t-xl py-5">

                            <p className="text-center">Profile</p>
                            <p className="text-center">Name</p>
                            <p className="text-center">Age</p>
                            <p className="text-center">Address</p>

                        </div>

                        <div className="">
                            {personalInfo.map((detail, index) => (
                                <div key={index} className="bg-[#B59A9A] rounded-xl mb-5 hover:scale-105 duration-400">
                                    <div className="grid grid-cols-4 py-5 items-center">
                                        <div className="flex justify-center">
                                            <img src={detail.img} alt="" className="rounded-full w-20 h-20 object-fit" />

                                        </div>
                                        <p className="text-center">{detail.name}</p>
                                        <p className="text-center">{detail.age}</p>
                                        <p className="text-center">{detail.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home