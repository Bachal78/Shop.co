import Image from "next/image"; 
import main from "@/app/assets/main.jpg";
import star from "@/app/assets/star.jpg"
import logo1 from "@/app/assets/logo1.jpg"
import logo2 from "@/app/assets/logo2.jpg"
import logo3 from "@/app/assets/logo3.jpg"
import logo4 from "@/app/assets/logo4.jpg"
import logo5 from "@/app/assets/logo5.jpg"
import frame1 from "@/app/assets/frame1.jpg"
import frame2 from "@/app/assets/frame2.jpg"
import frame3 from "@/app/assets/frame3.jpg"
import frame4 from "@/app/assets/frame4.jpg"
import frame5 from "@/app/assets/frame5.jpg"
import frame6 from "@/app/assets/frame6.jpg"
import frame7 from "@/app/assets/frame7.jpg"
import frame8 from "@/app/assets/frame8.jpg"


import rating1 from "@/app/assets/rating1.jpg"
import rating2 from "@/app/assets/rating2.jpg"
import rating3 from "@/app/assets/rating3.jpg"
import rating4 from "@/app/assets/rating4.jpg"
import rating5 from "@/app/assets/rating5.jpg"



import price1 from "@/app/assets/price1.jpg"
import price2 from "@/app/assets/price2.jpg"
import price3 from "@/app/assets/price3.jpg"
import price4 from "@/app/assets/price4.jpg"
import price6 from "@/app/assets/price6.jpg"
import price7 from "@/app/assets/price7.jpg"
import price8 from "@/app/assets/price8.jpg"

import casual1 from "@/app/assets/casual1.jpg"
import casual2 from "@/app/assets/casual2.jpg"
import casual3 from "@/app/assets/casual3.jpg"
import casual4 from "@/app/assets/casual4.jpg"

import staricon from "@/app/assets/star-icon.jpg"
import tickicon from "@/app/assets/tick-icon.jpg"

import socialicon from "@/app/assets/social-icons.jpg"
import mailicon from "@/app/assets/mailicon.png"
import iconbar from "@/app/assets/Social-iconBar.jpg"


export default function Main() {
  return (
    <>
    <div className=" w-[1440px] h-[663px] relative  top-[40px] inset-0 object-cover mt-0">
        <Image src={main} alt="Background" className="w-[1440px] h-[663px]"/>

    
        <div className="mt-20">
        <div className="grid grid-cols-3 absolute inset-0">
            <div className="ml-28">
                <p className="w-[577px] h-[173px] top-[237px] left-[100px} font-bold text-[64px] leading-[64px] mb-8 text-[#000000]">FIND CLOTHES THAT MATCHES YOU STYLE</p>
                <p className="w-[549px] h-[33px] top-[442px] left-[10] font-normal text-[16px] leadig-[22px] mb-8 ">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className="w-[210px] h-[52px] top-[507px] left-[100px] rounded-[62px] py-4 px-[54px] gap-3 mt-8 bg-[#000000] text-white font-medium text-[16px] leading-[21.6px] text-center">Shop Now</button>
            <div className="w-[596px] h-[74px] top-[607px] left-[100px] gap-[32px] flex flex-row mt-20">
    
                    <div className="w-[141px] h-[74px]">
                        <p className="w-[107px] h-[54px] font-bold text-[40px] leading-[54px]">200+</p>
                        <p className="w-[141px] h-[22px] font-normal text-[16px] leading-[22px]">Internation Brand</p>
                    </div>
                    <div className="w-[156px] h-[74px]">
                        <p className="w-[146px] h-[54px] font-bold text-[40px] leading-[54px]">2000+</p>
                        <p className="w-[159px] h-[22px] font-normal text-[16px] leading-[22px]">High-Quality Products</p>
                    </div>
                    <div className="w-[171px] h-[74px]">
                        <p className="w-[171px] h-[54px] font-bold text-[40px] leading-[54px]">30000+</p>
                        <p className="w-[126px] h-[22px] font-normal text-[16px] leading-[22px]">Happy Customers</p>
                    </div>
    
            </div>
            </div>
                <div className=" top-[431px] left-[750px] ml-60 mt-52">
                    <Image src={star} alt="star_icon" className="w-[56px] h-[56px]" />
                </div>
                <div  className=" top-[431px] left-[750px] ml-64 mt-32">
                    <Image src={star} alt="star_icon" className="w-[104px] h-[104px]" />
                </div>
            </div>
    
        </div>
    </div>
    <div className="w-[1440px] h-[122px] top-[797px] flex bg-black">
        <div className=" flex flex-row gap-28 ml-28 justify-center items-center ">
        <Image src={logo1} alt="logo1" className="w-[166.46px] h-[33.16px] top-[841px] left-[100px]" />
        <Image src={logo2} alt="logo2" className="w-[91px] h-[38px] top-[839px] left-[372.48px]" />
        <Image src={logo3} alt="logeo3" className="w-[156px] h-[36px] top-[840px] left-[569.48]" />
        <Image src={logo4} alt="logo4" className="w-[194px] h-[32px] top-[842px] left-[831.48px]" />
        <Image src={logo5} alt="logo5" className="w-[206px] h-[33.35px] top-[841px] left-[1131.48px]" />

        </div>
    </div>

    <div>
        <div className=" flex text-centeritems-center ml-[500px] mt-10">
        <h1 className="w-[403px] h-[58px] top-[991px] left-[518px] font-bold text-[48px] leading-[57.6px] text-center ">NEW ARRIVALS</h1>
        </div>
        <div className="flex flex-row justify-between items-center m-28 ">
            <div>
                <Image src={frame1} alt="shirt1" className="w-[295px] h-[298[x] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">T-shirt with Tape Details</p>
                <Image src={rating1} alt="rating" />
                <Image src={price1} alt="shirt1" />

                
            </div>
            <div>
                <Image src={frame2} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">Skinny Fit Jeans</p>
                <Image src={rating2} alt="rating" />
                <Image src={price2} alt="shirt1" />

            </div>
            <div>
                <Image src={frame3} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">Checkered Shirt</p>
                <Image src={rating1} alt="rating" />
                <Image src={price3} alt="shirt1" />
                

            </div>
            <div>
                <Image src={frame4} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[202px] h-[27px] top-[1418px] left-[1045px] font-bold text-[20px] leading-[27px] text-[#000000]">Sleeve Striped T-shirt</p>
                <Image src={rating1} alt="rating" className="w-[150px] h-[19px] gap-[13px]"/>
                <Image src={price4} alt="shirt1" />

            </div>
        </div>
   
        {/* Second-Secotion */}

    <div>
            <div className=" flex text-centeritems-center ml-[500px] mt-10">
            <h1 className="w-[403px] h-[58px] top-[991px] left-[518px] font-bold text-[48px] leading-[57.6px] text-center ">TOP SELLING</h1>
            </div>
        <div className="flex flex-row justify-between items-center m-28 ">
            <div>
                <Image src={frame5} alt="shirt1" className="w-[295px] h-[298[x] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">Vertical Striped Shirt</p>
                <Image src={rating3} alt="rating" />
                <Image src={price2} alt="shirt1" />

            </div>
            <div>
                <Image src={frame6} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">Courage Graphic T-shirt</p>
                <Image src={rating4} alt="rating" />
                <Image src={price6} alt="shirt1" />

            </div>
            <div>
                <Image src={frame7} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[230px] h-[27px] top-[1418px] left-[100] font-bold text-[20px] leading-[27px] text-[#000000]">Loose Fit Bermuda Shorts</p>
                <Image src={rating5} alt="rating" />
                <Image src={price7} alt="shirt1" />
            </div>
            <div>
                <Image src={frame8} alt="shirt1" className="w-[295px] h-[298px] top-[1104] rounded-[20px]"/>
                <p className="w-[202px] h-[27px] top-[1418px] left-[1045px] font-bold text-[20px] leading-[27px] text-[#000000]">Faded Skinny Jeans</p>
                <Image src={rating1} alt="rating" className="w-[150px] h-[19px] gap-[13px]"/>
                <Image src={price8} alt="shirt1" />
            </div>
        </div>
    </div>

    <div className="w-[1239px] h-[866px] rounded-[40px] bg-[#f0f0f0] ml-28">
    <div className="flex justify-center text-center ">
        <h1 className="font-bold text-[48px] leading-[57.6px] text-center mt-10">BROWSE BY DRESS STYLE</h1>
    </div>
    <div className=" flex flex-col justify-between gap-6 p-4 mt-10">
        <div className="flex ">
        <Image src={casual1} alt="Gym Shirts" className="w-[407] h-[289px] rounded-[20px] ml-[85px]" />
        <Image src={casual2} alt="Gym Shirts" className="w-[684px] h-[289px] rounded-[20px] mr-[85px]" />
        </div>
        <div className="flex">
        <Image src={casual3} alt="Gym Shirts" className="w-[684px] h-[289px] rounded-[20px] ml-[85px]" />
        <Image src={casual4} alt="Gym Shirts" className="w-[407px] h-[289px] rounded-[20px] mr-[85px]" />
        </div>
    </div>
</div>

            {/* Card-Section */}
    <div className="w-[1239px] h-[400px] rounded-[40px] ml-28 mt-20">
        <h1 className="w-[654px] h-[85px] font-bold text-[48px] leading-[57.6px] text-[#000000]">OUR HAPPY CUSTOMERS</h1>
        <div className="flex justify-between">
            <div className="w-[400px] h-[240px] top-[3631px] left-[100px] rounded-[20px] border-[1px] py-7 px-8 gap-[342px]">
                <div className="w-[336px] h-[161.58px] gap-[15px] ">
                    <Image src={staricon} alt="Star-icon" className="w-[138.84px] h-[22.58px]"/> 

                    <div className="w-[336px] h-[124px]">
                        <div className="w-[110px] h-[24px] flex">
                            <h1 className="w-[84px] h-[15px] font-bold text-[20px] leading-[20px]" >Sarah M.</h1>
                            <Image src={tickicon} alt="Tick-icon"/>
                            </div>
                        <p className="w-[336px] h-[88px] font-normal text-[16px] leading-[22px] text-[#000000]"><q>I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, evry piece I've bought has exceeded my expections.</q></p>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[240px] top-[3631px] left-[100px] rounded-[20px] border-[1px] py-7 px-8 gap-[342px]">
                <div className="w-[336px] h-[161.58px] gap-[15px] ">
                <Image src={staricon} alt="Star-icon" className="w-[138.84px] h-[22.58px]"/> 
                    
                    <div className="w-[336px] h-[124px]">
                        <div className="w-[110px] h-[24px] flex">
                            <h1 className="w-[82px] h-[15px] font-bold text-[20px] leading-[20px]" >Alex K.</h1>
                            <Image src={tickicon} alt="Tick-icon"/>
                            </div>
                        <p className="w-[336px] h-[88px] font-normal text-[16px] leading-[22px] text-[#000000]"><q>Finding clothes that align with my personal style used to be p challenge until I discovered Shop.co. The range of options they offer is tryly remarkable, catering to p variety of tastes and occasions.</q></p>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[240px] top-[3631px] left-[100px] rounded-[20px] border-[1px] py-7 px-8 gap-[342px]">
                <div className="w-[336px] h-[161.58px] gap-[15px] ">
                <Image src={staricon} alt="Star-icon" className="w-[138.84px] h-[22.58px]"/> 
                    <div className="w-[336px] h-[124px] ">
                        <div className="w-[110px] h-[24px] flex">
                            <h1 className="w-[82px] h-[15px] font-bold text-[20px] leading-[20px]" >James L.</h1>
                            <Image src={tickicon} alt="Tick-icon"/>
                            </div>
                        <p className="w-[336px] h-[88px] font-normal text-[16px] leading-[22px] text-[#000000]"><q>As someone who's on the lookout for unique fashion pices, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.</q></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

        {/* Footer-section */}
        <div>
            <div className="ml-28">
                {/* Footer-Head */}
                <div className="w-[1240px] h-[180px]  rounded-[20px] bg-[#000000] flex  justify-center items-center">
                    <h1 className="w-[551px] h-[94px] font-bold text-[40px] leading-[45px] text-[#ffffff]">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    <div className="w-[349px] h-[108px] gap-[14px]">
                        <div className="w-[349px] h-[48px] bg-[#ffffff] rounded-[62px] py-3 px-4 flex">
                            <Image src={mailicon} alt="Mail-icon" className="w-[24px] h-[24px]" />
                            <p className="w-[175px] h-[22px] font-normal text-[16px] leading-[21.6px] text-[#000000]">Enter your email address</p>
                        </div>
                        <div className="w-[349px] h-[48px] bg-[#ffffff] rounded-[62px] py-3 px-4 mt-3 text-center"><p className="w-[175px] h-[22px] ml-16 font-medium text-[16px] leading-[21.6px] text-[#000000] text-center">Subscribe to Newsletter</p></div>
                    </div>
                </div>
                    {/* Footer-body */}
                <div className="w-[1240px] h-[177px] flex items-center justify-between mt-20 ">

                    <div className="w-[284px] h-[177px]">
                        <div className="w-[284px] h-[114px]">
                            <h1 className="w-[167px] h-[23px] font-bold text-[33.45px] leading-[40.15px]">SHOP.CO</h1>
                            <p className="w-[248px] h-[66px] font-normal text-[14px] leading-[22px] mt-5">We have clothes that suits your stlye and which you're proud to wear. From women to men.</p>
                        </div>
                        <Image src={socialicon} alt="Social-icons" />
                    </div>

                    <div className="w-[104px] h-[177px] gap-[26px]">
                        <h1 className="w-[49px] h-[18px] font-medium text-[16px] leading-[18px] tracking-[3px]">COMPANY</h1>
                        <p className="font-normal text-[16px] leading-[19px]">About</p>
                        <p className="font-normal text-[16px] leading-[19px]">Features</p>
                        <p className="font-normal text-[16px] leading-[19px]">Works</p>
                        <p className="font-normal text-[16px] leading-[19px]">Career</p>
                    </div>

                    <div className="w-[136px] h-[177px] gap-[26px] ">
                        <h1 className="w-[49px] h-[18px] font-medium text-[16px] leading-[18px] tracking-[3px]">HELP</h1>
                        <p className="font-normal text-[16px] leading-[19px]">Customer Support</p>
                        <p className="font-normal text-[16px] leading-[19px]">Delivery Details</p>
                        <p className="font-normal text-[16px] leading-[19px]"> Terms & Conditions</p>
                        <p className="font-normal text-[16px] leading-[19px]">Privacy Policy</p>
                    </div>

                    <div className="w-[149px] h-[177px]">
                        <h1 className="w-[37px] h-[18px] font-medium text-[16px] leading-[18px] tracking-[3px]">FAQ</h1>
                        <p className="font-normal text-[16px] leading-[19px]">Account</p>
                        <p className="font-normal text-[16px] leading-[19px]">Manage Deliveries</p>
                        <p className="font-normal text-[16px] leading-[19px]">Orders</p>
                        <p className="font-normal text-[16px] leading-[19px]">Payments</p>
                    </div>

                    <div className="w-[149px] h-[177px] ">
                        <h1 className="w-[118px] h-[18px] font-medium text-[16px] leading-[18px] tracking-[3px]">RESOURCES</h1>
                        <p className="font-normal text-[16px] leading-[19px]">Free eBooks</p>
                        <p className="font-normal text-[16px] leading-[19px]">Development Tutorial</p>
                        <p className="font-normal text-[16px] leading-[19px]">How to - Blog</p>
                        <p className="font-normal text-[16px] leading-[19px]">Youtube Playlist</p>
                    </div>
                </div>
                <div className="w-[1240px] border-[1px]"></div>
                <div className="flex justify-between">
                    <p className="w-[269px] h-[19px] font-normal text-[14px] leading-[18.9px] text-right ">Shop.co &copy;2000-2023, All Rights Reserved</p>
                    <Image src={iconbar} alt="Social-iconBar" className=" w-[281.07px] h-[30.03px] gap-3 mr-20"/>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
