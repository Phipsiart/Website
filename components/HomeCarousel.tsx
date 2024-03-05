import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';
function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <Link href="/report" className='cursor-pointer'>
        <div className='flex justify-center'>
        <Image src="/ishant-mishra-UXEJDX4SqdE-unsplash.jpg" className='rounded-lg' height={712} width={712} alt="Business"></Image>
        </div>
        <Carousel.Caption className='flex justify-center'>
            <div className='backdrop-blur-sm max-w-lg rounded-2xl pt-4'>
          <h3 className='text-5xl font-bold text-blue-500'>Annual Report 2023</h3>
          <p className="text-2xl "> Discover our achievements and financial highlights for the year 2023.</p>
        </div>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
      <Link href="/news/welcoming-the-new-managers">
      <div className='flex justify-center'>
        <Image src="/sean-pollock-PhYq704ffdA-unsplash.jpg" className='rounded-lg' height={712} width={712} alt="Business"></Image>
        </div>
        <Carousel.Caption className='flex justify-center'>
            <div className=' max-w-lg rounded-2xl pt-4'>
          <h3 className='text-5xl font-bold text-yellow-600'>New Management</h3>
          <p className=' text-2xl '>Get to know the new managers who are making Leberkasrechner the market leader.</p>
          </div>
        </Carousel.Caption>
</Link>
      </Carousel.Item>
      <Carousel.Item>
      <div className='flex justify-center'>
        <Image src="/noah-buscher-x8ZStukS2PM-unsplash.jpg" className='rounded-lg' height={712} width={712} alt="Business"></Image>
        </div>
        <Carousel.Caption className='flex justify-center'>
            <div className=' max-w-lg rounded-2xl pt-4'>
          <h3 className='text-5xl font-bold text-green-600'>Sustainability</h3>
          <p className=' text-2xl'>Find out more about how we protect the environment.</p>
          </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;