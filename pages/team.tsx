import Head from "next/head";
import Image from "next/image";
export default function Team(){
    return(
        <>
        <Head>
          <title>Team</title>
        </Head>
        <h1 className="lg:text-8xl text-black md:text-7xl z-40 sm:text-5xl text-5xl font-extrabold text-center">Team<span className="text-blue-500">.</span></h1>
  <div className="flex justify-center">
    <p className="max-w-3xl text-[1.0rem]">
    Every company needs good people to be successful. This is also the case at Leberkarechner. The members of our team have more than 30 years of experience in the food industry. With their unique talents and diverse backgrounds, they are able to deliver outstanding products to our customers. Our goal is that every customer who uses Leberkasrechner will find it to be the best software they have ever used. We are proud to have such a great team and we want to show it. Together with you, our investors, we want to change the world for the better. Our team&apos;s success is a reflection of the exceptional talent and unwavering
    commitment of each member. We are proud to introduce our distinguished team.
      </p>
  </div>

  <div className="team flex flex-wrap justify-center mb-4">
    <div className="da-ssl bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">da.ssl</span>
      <Image
        className="rounded-full mt-3"
        src="/juan-encalada-WC7KIHo13Fc-unsplash.jpg"
        height={128}
        alt="da.ssl"
        width={128}></Image>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
        Da.ssl serves as the Chief Developer at Leberkasrechner, where he plays
        a pivotal role in building the majority of the components for our
        livercheese calculation software.
      </p>
    </div>
    <div className="raphiart bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">Raphiart</span>
      <Image
        className="rounded-full mt-3"
        src="/zahir-namane-hwc7eIQiTCE-unsplash.jpg"
        height={128}
        alt="Raphiart"
        width={128}></Image>
      <p className="text-gray-700 mt-[1.2rem] text-[1.1rem] text-center">
        Raphiart holds a leading position in our marketing department, where he
        consistently devises innovative strategies to promote our product and
        expand our reach.
      </p>
    </div>
    <div className="phipsiart bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <span className="text-blue-500 font-bold text-5xl">Phipsiart</span>
      <Image
        className="rounded-full mt-3"
        src="/ali-morshedlou-WMD64tMfc4k-unsplash.jpg"
        height={128}
        alt="Phipsiart"
        width={128}></Image>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
        As our Director of Sales, Phipsiart spearheads our sales initiatives
        with strategic vision and determination while also contributing his
        invaluable expertise to the development of our core product.
      </p>
    </div>
</div>
</>

    )
}