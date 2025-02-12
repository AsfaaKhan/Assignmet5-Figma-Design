import Image from "next/image"

export default function Home() {
  return (
    <div className="h-screen lg:mt-16  ">

      {/* MAIN SECTION */}
      <div className="flex flex-col justify-center items-center lg:flex-row gap-10 lg:justify-between mx-auto ">
        {/* Left side  */}
        <div className=" mx-auto flex flex-col justify-center items-center gap-10 text-center lg:items-start lg:text-left lg:justify-start mt-32 lg:mt-[182px] ">
          <div >
            <h1 className="font-bold text-2xl  font-serif text-[#000000] dark:text-white md:text-[40px] md:leading-[65.8px] ">
              IMPECCABLE <br /> CRAFTSMANSHIP AND <br /> FINESSE
            </h1>
          </div>
          <div>
            <p className="font-medium text-lg md:text-[30px] text-[#787054] md:leading-[49.35px] ">
              An example of intricate workmanship and detail, elegant <br /> necklaces and long and short chains form a part of our <br /> desirable collection.
            </p>
          </div>

          <div>
            <button className="bg-[#A29875] rounded-[10px] w-72 h-[58px] gap-[10px] p-[10px] text-2xl top-[730px]" >
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mx-auto flex justify-center items-center mt-16 ">
          <Image
            src={"/images/rs-group-wrap ⏵ rs-group.svg"}
            alt="Main Section Picture"
            width={300}
            height={300}
            className="md:w-[462px] lg:h-[647px]"
          />
        </div>
      </div>
    </div>
  )
}

