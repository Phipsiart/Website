import Head from "next/head";
import dynamic from "next/dynamic";
export default function Home() {
  const Carousel = dynamic(() => import('../components/HomeCarousel'), { ssr: false })
  return (
    <>
    <Head>
      <title> Investors</title>
    </Head>
     <div className="main-page">
   <h1 className="lg:text-8xl text-black md:text-7xl sm:text-5xl text-5xl font-extrabold text-center">
          Leberkasrechner<span className="text-blue-500">.</span>
        </h1>
        <p className="text-center pt-4 lg:text-2xl md:text-2xl mb-4 ">
          Creating solutions for a better tomorrow.
        </p>
        <Carousel />
        <div className="flex justify-center mt-7">
          <div className="max-w-3xl">
    <p className="text-2xl">
    Welcome to Leberkasrechner Investors. We are building a product that allows users to search for butchers in their neighbourhood and display the relevant opening hours and details such as the phone number to call the butcher directly and many other unique features. 
      </p>
      <h3 className="text-2xl font-bold">Annual Report</h3>
      <p>We&apos;ve created an annual report to showcase what happened in the fiscal year. You can read it here.</p>
      </div>
  </div>
      </div>
    </>
  );
}
