import { Inter } from "next/font/google";
import Image from "next/image";
import Head from "next/head";

export default function Vision() {
  return (
    <>
      <Head>
        <title>Vision</title>
      </Head>
      <main className="px-4 py-5">
        <h1 className="lg:text-7xl text-black md:text-6xl z-40 sm:text-4xl text-4xl font-extrabold text-center ">
        Annual Report 2023
        </h1>
        <p className="text-center pt-4 lg:text-2xl md:text-2xl ">
          A quick brief of the last year.
        </p>
        <div className="flex flex-wrap justify-center mb-4">
    <div className=" bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <p className="text-green-500 font-bold text-4xl text-center">New clients</p>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      In 2023, Leberkasrechner made remarkable progress. We are proud to have acquired over 10,000 new paying customers and established ourselves as the market leader in our industry. Our revenue reached an impressive peak of $220 million.      </p>
    </div>
    <div className="raphiart bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <p className="text-yellow-500 font-bold text-4xl text-center">Customer Growth</p>
      <p className="text-gray-700 mt-[1.2rem] text-[1.1rem] text-center">
      Our customer base grew by over 10,000 paying customers in 2023. This
              growth is a testament to the quality of our products and services and
              the loyalty of our customers. We are proud to have been able to acquire
              so many new customers while maintaining high customer satisfaction.
      </p>
    </div>
    <div className=" bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <p className=" font-bold text-4xl text-center">Market Leadership</p>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      In 2023, we solidified our position as the market leader in our industry. Our strategy of continuously investing in product development and customer service has paid off. We are proud to be recognized as the market leader and look forward to strengthening our position in the coming years.      </p>
    </div>
    <div className="text-green-500 bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <p className=" font-bold text-4xl text-center">Revenue Growth</p>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      Our revenue reached an impressive peak of $220 million in 2023. This strong revenue growth is the result of our strategic decisions, our hard work, and the loyalty of our customers. We are proud of this achievement and are determined to continue our revenue growth in the coming years.
</p>
    </div>
    <div className=" text-purple-500 bg-white rounded-2xl p-4 m-4 shadow-lg max-w-xs flex flex-col items-center">
      <p className=" font-bold text-4xl text-center">Conclusion</p>
      <p className="text-gray-700 mt-3 text-[1.1rem] text-center">
      We are proud of what we achieved in 2023 and are excited about what the future holds for Leberkasrechner. We would like to thank all our employees, partners, and customers who contributed to our success. We look forward to making further progress in 2024 and continuing to offer our customers high-quality products and services.</p>
    </div>

</div>
      </main>
    </>
  );
}
