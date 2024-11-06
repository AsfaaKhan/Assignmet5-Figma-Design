import Header from "./Components/Header/Header"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen">
      <Header />

      {/* Main Section */}

      <div className="flex ">

        {/* LEFT SIDE */}
        <div className="w-1/2 flex flex-col  justify-center items-start  m-12 gap-10 ">

          <h1 className="font-serif font-bold text-[40px] text-black 
          w-[496px]  top-[120px] pl-44 ">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

          <p className="font-medium text-[30px] leading-[49.35px] tracking-[2.5%] text-[#787054]  w-[902px] h-[147px] pl-44">
            An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.</p>

          <div className="pl-44">
            <button className="rounded-[10px] gap-[10px] p-[10px] bg-[#A29875] w-[288px] h-fit-[58px] text-white font-serif font-medium text-[30px] top-[730px]  ">Explore Now</button>
          </div>
        </div>


        {/* RIGHT SIDE  */}
        <div className="w-1/2 flex justify-center items-center mt-24 ">
          <Image
            src={"/images/rs-group-wrap ⏵ rs-group.svg"}
            alt="Home Page Image of a girl"
            width={462}
            height={647}
          />
        </div>
      </div>
    </div>
  )
}

