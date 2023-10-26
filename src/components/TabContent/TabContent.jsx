import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './TabContent.css'

//images
import natureImmersion from './../../assets/img/nature-immersion.jpg'
import tradition from './../../assets/img/Tradition of Ayurveda.jpg'
import yoga from './../../assets/img/Restorative Yoga and Meditation.jpg'
import nutrition from './../../assets/img/Wholesome Ayurvedic Nutrition.jpg'
import activities from './../../assets/img/Mindfulness Activities.jpg'

const TabContent = () => {
  return (
    <div id='specialities'>
    <Tabs>
      <TabList className={"react-tabs__tab-list !border-b-0 flex justify-center !mb-10 overflow-x-auto overflow-y-hidden !sm:justify-start !md:justify-start !xs:justify-start"}>
        <Tab className={"react-tabs__tab focus:after:content-none uppercase text-[18px] text-[#295b52] border !border-[#295b52] !px-[30px] !py-[15px] !rounded-none mr-5 hover:bg-[#295b52] hover:text-white transition ease-in-out delay-150 cursor-pointer md:text-[18px]"} style={{borderBottom:"1px solid"}}>NATURE IMMERSION</Tab>
        <Tab className={"react-tabs__tab uppercase text-[18px] text-[#295b52] border !border-[#295b52] !px-[30px] !py-[15px] !rounded-none mr-5 hover:bg-[#295b52] hover:text-white transition ease-in-out delay-150"} style={{borderBottom:"1px solid"}}>TRADITION OF AYURVEDA</Tab>
        <Tab className={"react-tabs__tab uppercase text-[18px] text-[#295b52] border !border-[#295b52] !px-[30px] !py-[15px] !rounded-none mr-5 hover:bg-[#295b52] hover:text-white transition ease-in-out delay-150"} style={{borderBottom:"1px solid"}}>RESTORATIVE YOGA AND MEDITATION</Tab>
        <Tab className={"react-tabs__tab uppercase text-[18px] text-[#295b52] border !border-[#295b52] !px-[30px] !py-[15px] !rounded-none mr-5 hover:bg-[#295b52] hover:text-white transition ease-in-out delay-150"} style={{borderBottom:"1px solid"}}>AYURVEDIC NUTRITION</Tab>
        <Tab className={"react-tabs__tab uppercase text-[18px] text-[#295b52] border !border-[#295b52] !px-[30px] !py-[15px] !rounded-none mr-5 hover:bg-[#295b52] hover:text-white transition ease-in-out delay-150 "} style={{borderBottom:"1px solid"}}>MINDFULNESS ACTIVITIES</Tab>
      </TabList>

      <TabPanel className={"react-tabs__tab-panel bg-[#e1e6e6] py-12"}>
        <div className='flex lg:flex-row md:flex-col sm:flex-col'>
        <div className='lg:w-2/4 px-16 md:w-full sm:w-full'>
            <h2 className='text-[32px] font-bold text-[#295b52] mb-5 '>NATURE IMMERSION</h2>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Sitaram Mountain Retreat throngs in the midst of Mother Nature. It is surrounded by spice plantations and well endowed with nature’s abundance. The retreat infrastructure is a complementary blend of tradition integrated with nature.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>The rustic exterior of the retreat building is built up of local materials of wood and stone while the interiors are well equipped with modern facilities. The retreat is a perfect amalgam of traditional and contemporary accommodation to provide you with a comfortable stay here.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Accommodation at the retreat has an external old-world charm and at the same time gives you a ‘simplistic’ luxurious experience. It offers you a variety of accommodation options to meet your preferences. You have the choice to stay in a Luxury cottage-style room, Luxury suite room, Forest Bathing studio cottage, or Forest Bathing duplex cottage which can be a thoroughly distinctive experience.</p>
        </div>
        <div className='lg:w-2/4 md:w-full sm:w-full'>
            <img src={natureImmersion} alt="Sitaram Mountain Retreat" className='w-full'/>
        </div>
        </div>
        
      </TabPanel>
      
      <TabPanel className={"react-tabs__tab-panel bg-[#e1e6e6] py-12"}>
        <div className='flex lg:flex-row md:flex-col sm:flex-col'>
        <div className='lg:w-2/4 px-16 md:w-full sm:w-full'>
            <h2 className='text-[32px] font-bold text-[#295b52] mb-5 '>TRADITION OF AYURVEDA</h2>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Ayurveda is the traditional ancient Indian system of medicine which is thousands of years old. You can undertake a journey towards healing and rejuvenation with the tradition of Ayurveda from Kerala at the retreat.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>A holistic approach is adopted for diagnosis and treatment to cleanse and restore the balance of your body, mind and emotions. A dedicated team of Ayurvedic doctors undertakes the diagnosis and careful charting of treatment plans for each guest.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Purifying Ayurveda practices like Panchakarma and other therapies are applied using medicated oils, herbs and Ayurvedic medicines by our experienced and well-trained therapists. A well-equipped treatment centre is established to attain a result-oriented intensive treatment to reinstate your health and well-being.</p>
        </div>
        <div className='lg:w-2/4 md:w-full sm:w-full'>
            <img src={tradition} alt="Sitaram Mountain Retreat" className='w-full'/>
        </div>
        </div>
        
      </TabPanel>
      <TabPanel className={"react-tabs__tab-panel bg-[#e1e6e6] py-12"}>
        <div className='flex lg:flex-row md:flex-col sm:flex-col'>
        <div className='lg:w-2/4 px-16 md:w-full sm:w-full'>
            <h2 className='text-[32px] font-bold text-[#295b52] mb-5 '>RESTORATIVE YOGA AND MEDITATION</h2>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>The retreat promotes wellness through the traditional form of Yoga at the Vana Yoga Shala. It includes the practice of Agnihotra, asanas, pranayama, and meditation under guidance. You are provided therapeutic yoga sessions as per Doctors’ advice.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>The lush green environs interspersed with varied flora and fauna provide the serene ambience to reconnect with your inner self and delve into a journey of healing and wellness.</p>
            
        </div>
        <div className='lg:w-2/4 md:w-full sm:w-full'>
            <img src={yoga} alt="Sitaram Mountain Retreat" className='w-full'/>
        </div>
        </div>
        
      </TabPanel>
      <TabPanel className={"react-tabs__tab-panel bg-[#e1e6e6] py-12"}>
        <div className='flex lg:flex-row md:flex-col sm:flex-col'>
        <div className='lg:w-2/4 px-16 md:w-full sm:w-full'>
            <h2 className='text-[32px] font-bold text-[#295b52] mb-5 '>WHOLESOME AYURVEDIC NUTRITION</h2>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>A healthy outside starts from a healthy inside. At the retreat, our Chefs prepare wholesome meals that are, nourishing and delicious at the same time. The Doctors and the chefs join hands in creating the perfect nutrition plan to aid in your health goals. The menu which is pre-set for the guests according to the principles of Ayurveda will be customised as per the treatment and health goals on various days.</p>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Post treatment, it is essential to establish good dietary habits that are simple, realistic and liveable. You can also learn to cook nutritious recipes here to blend a healthy way of eating into your lifestyle.</p>
            
        </div>
        <div className='lg:w-2/4 md:w-full sm:w-full'>
            <img src={nutrition} alt="Sitaram Mountain Retreat" className='w-full'/>
        </div>
        </div>
        
      </TabPanel>
      <TabPanel className={"react-tabs__tab-panel bg-[#e1e6e6] py-12"}>
        <div className='flex lg:flex-row md:flex-col sm:flex-col'>
        <div className='lg:w-2/4 px-16 md:w-full sm:w-full'>
            <h2 className='text-[32px] font-bold text-[#295b52] mb-5 '>MINDFULNESS ACTIVITIES</h2>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Sitaram Mountain Retreat offers a plethora of mindfulness activities to the guests. As per the Doctors’ advice the guests during their course of treatment can avail these activities towards the end of their stay. The abundance of flora and fauna surrounding the retreat gives ample scope for delving into a wide variety of nature-related outdoor activities like-</p>
            <ul>
                <li className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Bird watching</li>
                <li className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Hiking around the spice plantations</li>
                <li className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Farmyard visit</li>
                <li className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Tea garden walk</li>
            </ul>
            <p className='text-[16px] font-medium text-[#295b52] mb-4 leading-relaxed'>Apart from these facilities, the guests can avail themselves of sightseeing tours around Munnar to appreciate the natural beauty of the hill station. Munnar is inundated with incredibly scenic landscapes filled with waterfalls, lakes, tea plantations and forest land. You can book a ‘Jeep Safari’ to explore the rugged terrain or opt for farm-based adventure sports.

</p>
            
        </div>
        <div className='lg:w-2/4 md:w-full sm:w-full'>
            <img src={activities} alt="Sitaram Mountain Retreat" className='w-full'/>
        </div>
        </div>
        
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default TabContent;