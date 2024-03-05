import Head from "next/head";
import Image from "next/image";
export default function Team(){
    return(
        <>
        <Head>
          <title>Leberkasrechner Welcomes New Managers with Decades of Industry Experience</title>
        </Head>
        <h1 className="lg:text-4xl text-black md:text-3xl z-40 sm:text-3xl text-3xl font-extrabold text-center">Leberkasrechner Welcomes New Managers with Decades of Industry Experience<span className="text-blue-500">.</span></h1>
        <div className="flex flex-col items-center">
    <div className="flex items-center mb-4">
      <Image src="/ali-morshedlou-WMD64tMfc4k-unsplash.jpg" className="rounded-full" height={42} width={42} alt="Phipsiart" />
      <span className="mt-0.5 font-light ml-2">Phipsiart, Human resources management</span>
    </div>
    <p className="max-w-3xl text-[1.0rem] mt-2">
      In an exciting development, Leberkasrechner is proud to announce the arrival of our new management team. Each member brings with them over 30 years of experience in the food industry, marking a significant milestone in our company’s growth trajectory.
    </p>
    <p className="max-w-3xl text-[1.0rem] mt-2">
      These seasoned professionals have made their mark in the industry, leading teams to success and driving significant growth in their previous roles. Their expertise and leadership are expected to be a tremendous asset to our company as we strive to make Leberkasrechner one of the biggest companies worldwide.
    </p>
    <p className="max-w-3xl text-[1.0rem] mt-2">
      Our new managers share our vision of elevating Leberkasrechner to new heights. With their guidance, we aim to continue to innovate, improve, and expand our operations. Our goal is to deliver the highest quality products and services to our customers, thereby strengthening our position in the market.
    </p>
    <p className="max-w-3xl text-[1.0rem] mt-2">
      As we embark on this exciting journey, we extend a warm welcome to our new managers. We eagerly anticipate their contributions and look forward to the prosperous future they will help us build.
    </p>
    <p className="max-w-3xl text-[1.0rem] mt-2">
      Stay tuned for more updates as we continue to grow and make Leberkasrechner a name that resonates worldwide!
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