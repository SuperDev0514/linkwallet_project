import homeicon from "./Home.PNG"
import Miningicon from "./Mining.PNG"
import TokenIcon from "./Token.PNG"
import inviteIcon from "./invite.PNG"
const Transfer = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="flex items-center w-screen justify-center h-screen bg-blue-300">

                <button className='bg-[#FEBF00] rounded-[25px] w-[250px] h-[40px] text-red-600 text-[20px] active:bg-yellow-400 shadow-lg border-[3px]'>
                    Transfer
                </button>

            </div>
            <footer className="fixed inset-x-0 bottom-0 p-4 bg-[#88B1D6]">
                <div className="flex justify-between">
                    <button className="bg-[#88B1D6] rounded-[25px] w-[150px] h-[40px] text-red-600 text-[16px]">
                        <img className="w-[80px] h-[60px]" src={homeicon} />
                        Home
                    </button>
                    <button className="bg-[#88B1D6] rounded-[25px] w-[150px] h-[40px] text-red-600 text-[16px] ">
                        <img className="w-[80px] h-[60px]" src={TokenIcon} />
                    </button>
                    <button className="bg-[#88B1D6] rounded-[25px] w-[150px] h-[40px] text-red-600 text-[16px] ">
                        <img className="w-[90px] h-[60px]" src={Miningicon} />
                    </button>
                    <button className="bg-[#88B1D6] rounded-[25px] w-[150px] h-[40px] text-red-600 text-[16px]">
                        <img className="ml-[20px] w-[60px] h-[60px]" src={inviteIcon} />
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default Transfer;