import Image from "next/image"
import arrow_down from "@/app/assets/arrow_down.png"
import search_icon from "@/app/assets/search.png"
import frame from "@/app/assets/frme.jpg"
const Navbar=()=>{
    return(
        <>
            
            <div className="w-[1240px] h-[48px] top-[62px] left-[100px] ml-28 gap-[40px] flex flex-row justify-center items-center mt-8 mb-0">
                <h1 className=" w-[160px] h-[22px] text-[#000000] font-mono font-bold text-[32px] leading-[38.4px] ">SHOP.CO</h1>
                <div className="w-[330px] h-[22px] gap-6 flex flex-row justify-between items-center ">
                    <div className="w-[57px] h-[22px] gap-[4px] flex justify-between items-center">
                        <p className=" w-[37px] h-[22px] font-normal text-[16px] leading-[21.6px]">Shop</p>
                        <div className="w-[16px] h-[16px] flex items-center">
                            <Image src={arrow_down} alt="downarrow" className="w-[11.5px] h-[6.5px] top-[5.25px] left-[2.25px]"></Image>
                        </div>
                    </div>
                    <p className=" w-[60px] h-[22px] font-normal text-[16px] leading-[21.6px]">On Sale</p>
                    <p className=" w-[90px] h-[22px] font-normal text-[16px] leading-[21.6px]">New Arrivals</p>
                    <p className=" w-[49px] h-[22px] font-normal text-[16px] leading-[21.6px]">Brands</p>
                </div>
                <div className="w-[577px] h-[48px] rounded-[62px] py-[12px] px-[16px] gap-[12px] bg-[#f0f0f0] flex items-center">
                    <div className="w-[24px] h-[24px]">
                    <Image src={search_icon} alt="Search Icon" className="w-[20.27] h-[20.27px] top-[1.86px] left-[1.86px]" />
                    </div>
                    <input type="search" placeholder="Search for products..." className="w-[170px] h-[22px] font-normal text-[16px]  text-black bg-[#f0f0f0] leading-[21.6px]" />
                </div>
                <Image src={frame} alt="frame_icon" className="w-[62px] h-[24px] gap-[24px]" />
            </div>
        </>
    )
}

export default Navbar
