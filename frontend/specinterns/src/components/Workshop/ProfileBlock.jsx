import profile from './images/profile.svg'

const ProfileBlock = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center items-center mt-[20px]">
                <div className="profile-container w-full flex justify-center items-center">
                    <div className="profile-block w-[600px] h-[200px] flex flex-col items-center justify-center bg-[#d2e6f2] p-[10px] rounded-md">
                        <div className="profile-info mt-[20px] w-[60%] bg-[#f3f1f2] rounded-lg border flex flex-row items-center justify-center ">
                            <img src={profile} className='w-[40px] h-[40px]'></img>
                            <h2 className="text-[20px] font-medium m-[10px]">Антон Ясінський</h2>
                            <div className='h-[90%] w-[1px] bg-black'></div>
                            <p className="text-[14px] m-[10px]">FRONT-END</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileBlock;