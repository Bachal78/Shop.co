import Image from "next/image";
import Close from "@/app/assets/close.png"

const Header = () => {
    return (
        <div className="w-[1440px] h-[38px] bg-[#000000] flex flex-row justify-center items-center ">
            <div className="w-[359px] h-[19px] top-[9px] left-[544px] font-sans ml-24 flex flex-row justify-center items-center text-[#ffffff]">
                <p className="font-normal text-[14px] leading-[18.9px] text-center">
                    Sign up and get 20% off on your first order.
                </p>
                <h2 className="font-medium text-[14px] leading-[18.9px] text-center underline decoration-solid">
                    Sign Up Now
                </h2>
            </div>
            <div className="w-[20px] h-[20px] top-[9px] left-[1320px] flex justify-between items-center ml-80">
                <Image src={Close} alt="close-icon" className="w-[13.13px] h-[13.13px] top-[3.43px] left-[3.44px]"/>
            </div>
        </div>
    );
};

export default Header;
