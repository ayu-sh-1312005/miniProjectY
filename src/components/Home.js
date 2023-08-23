import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import ServingCard from './ServingCard';

function Home() {
  return (
    <div className=''>
        {/* Navbar */}
        <Navbar></Navbar>

        {/* section1 */}
        <div>
          <div className='w-[1080px] mx-auto flex lg:flex-row md:flex-row flex-col-reverse gap-3 p-5 h-[70vh]'>
            <div className='flex-[0.5] flex justify-between items-center'>
              <img height={480} width={720} src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
            </div>
            <div className=' flex-[0.5] flex flex-col text-[#02042A] justify-center items-center gap-2'>
              <p className='text-5xl font-bold'>Find Amazing Parking Space Near You</p>
              <p className='text-gray-600 text-lg'>Discover convenient parking solutions near you. Find the perfect parking space to suit your needs and enjoy hassle-free access wherever you go</p>
              <div className='flex gap-3'>
                <div className='bg-blue-500 rounded-full px-2 py-2 text-white w-fit font-bold text-2xl'>
                  <button>Check Parking Space</button>
                </div>
                <div className='text-blue-500 border-2 border-blue-500 rounded-full px-2 py-2 bg-white w-fit font-bold text-2xl'>
                  <button>Test Our Model</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className='bg-[#02042b] text-gray-200 p-4'>
          <div className='w-[1080px] mx-auto flex flex-col h-[65vh] justify-center'>
            <div className='mx-auto flex flex-col gap-2'>
              <p className='text-4xl font-bold mx-auto'>Why Choose Parkin</p>
              <p className='mx-auto text-center'>Parking Made Easy</p>
            </div>
            <div className='flex gap-4 justify-center items-center my-5'>
              <Card heading={'Pre Book Your Space'} description={"Secure your spot today – Pre-book your space for an unforgettable experience!"} />
              <Card heading={'Quick & Easy Parking'} description={"Convenient and hassle-free parking solution for your needs – Quick & Easy Parking makes finding a spot a breeze."} />
              <Card heading={'Safe & Secure Parking'} description={"Your Vehicle's Safety, Our Priority – Discover Peace of Mind with Safe & Secure Parking."} />
            </div>
          </div>
        </div>
        {/* scction2 */}
        <div className=''>
          <div className='w-[1080px] flex flex-col mx-auto h-[80vh] justify-center gap-4'>
            <div className='mx-auto flex flex-col justify-center items-center'>
              <p className='text-blue-500 text-4xl font-bold '>Our Presence</p>
              <p className='text-[#02042A] text-xl'>Area We Serving</p>
            </div>
            <div className='flex mx-auto justify-between gap-2'>
              <ServingCard heading={'Commercial Property'} im={'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80'} />
              <ServingCard heading={'Hotels & Hospitality'} im={'https://qtxasset.com/quartz/qcloud1/media/image/hostel%20beds.jpg?VersionId=sE.StmNiF80LqtGSBjfn_E3BjIIByWSq'} />
              <ServingCard heading={'Operators & Enforcers'} im={'https://static.wixstatic.com/media/39942b_91304649f363430aaa017c476e455ecf~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/39942b_91304649f363430aaa017c476e455ecf~mv2.jpg'} />
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
    </div>
  )
}

export default Home