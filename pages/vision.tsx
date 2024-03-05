import Head from "next/head";
import Image from "next/image";
export default function Vision(){
    return(
        <>
        <Head>
          <title>Vision</title>
        </Head>
        <h1 className="lg:text-8xl text-black md:text-7xl z-40 sm:text-5xl text-5xl font-extrabold text-center">Vision<span className="text-blue-500">.</span></h1>
  <div className="flex justify-center">
    <p className="max-w-3xl text-[1.0rem]">
    At 
Leberkasrechner, we develop high-quality software that helps you
find local butchers. In January 2024, we became the market leader in the 
industry. We are grateful to our customers, because without them we would not have been able to achieve this goal. But it wasn&apos;t always that easy. Read on and find out 
more about our story.      </p>
  </div>

  <div className=" flex flex-wrap justify-center mb-4">
    <div className=" bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">2022</span>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      Our founders, da.ssl, Raphiart & Phipsiart had the idea of creating a website that shows whether there is enough meatloaf available and, if there is a shortage, uses a map to show butchers.      </p>
    </div>
    <div className="bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">2023</span>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      We decided to create a new version of Leberkasrechner because the old version no longer properly reflected our core values of finding butchers nearby. So Leberkasrechner was completely rebuilt.      </p>
    </div>

    <div className="raphiart bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">2024</span>
      <p className="text-gray-700 mt-[1.2rem] text-[1.1rem] text-center">
      In January 2024, Leberkarechner became the market leader in the butcher finding sector. We are very proud of this and look forward to many more years to come.      </p>
    </div>
</div>
</>

    )
}