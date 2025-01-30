import { useState } from 'react';
import Card from './components/Card';
import './App.css';



const data = [
  {
    categorie: 'Work',
    icon: <img src="icon-work.svg" alt="work" width={60} height={60} />,
    bgcolor: "bg-[var(--light-red-work)]",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    categorie: 'Play',
    icon: <img src="icon-play.svg" alt="play" width={60} height={60} />,
    bgcolor: "bg-[var(--soft-blue-play)]",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    categorie: 'Study',
    icon: <img src="icon-study.svg" alt="study" width={60} height={60} />,
    bgcolor: "bg-[var(--light-red-study)]",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    categorie: 'Exercise',
    icon: <img src="icon-exercise.svg" alt="exercise" width={60} height={60} />,
    bgcolor: "bg-[var(--lime-green-exercise)]",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    categorie: 'Social',
    icon: <img src="icon-social.svg" alt="social" width={60} height={60} />,
    bgcolor: "bg-[var(--violet-social)]",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    categorie: 'Self Care',
    icon: <img src="icon-self-care.svg" alt="self-care" width={60} height={60} />,
    bgcolor: "bg-[var(--soft-orange-self-care)]",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];

function App() {
  const [timeframe, setTimeframe] = useState<Timeframe>("daily");
  type Timeframe = "daily" | "weekly" | "monthly";

  return (
    <>
      <div className='flex flex-col xl:flex-row xl:gap-5 xl:h-fit xl-gap-15 gap-6'>
        
        {/* Sélecteur de timeframe */}
        <div className='relative p-6 h-[200px] xl:h-[484px] xl:w-[210px] w-full flex xl:flex-col flex-row justify-around xl:justify-end items-end xl:items-start xl:gap-3 bg-[var(--dark-blue)] rounded-2xl'>
          <p onClick={() => setTimeframe("daily")} className={`text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out ${timeframe === "daily" ? "text-white" : ""}`}>Daily</p>
          <p onClick={() => setTimeframe("weekly")} className={`text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out ${timeframe === "weekly" ? "text-white" : ""}`}>Weekly</p>
          <p onClick={() => setTimeframe("monthly")} className={`text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out ${timeframe === "monthly" ? "text-white" : ""}`}>Monthly</p>
          
          <div className='absolute flex xl:flex-col flex-row xl:items-start xl:justify-start justify-center items-center gap-10 p-6 top-0 left-0 xl-h-[71%] h-[65%] w-full bg-[var(--blue)] rounded-xl'>
            <img className='border-2 rounded-full border-white' src="image-jeremy.png" alt="" width={70} height={60}/>
            <div className='flex flex-col gap-1 '>
              <p className='text-[var(--pale-blue)]'>Report for</p>
              <h1 className='text-white xl:text-4xl text-xl font-extralight'>Jeremy Robson</h1>
            </div>
          </div>
        </div>

        {/* Cartes dynamiques */}
        <div className='flex flex-col items-center justify-center gap-6'>
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
            {data.map((item) => (
              <Card
                key={item.categorie}
                categorie={item.categorie}
                title={`${item.timeframes[timeframe].current}hrs`}
                description={`Previous: ${item.timeframes[timeframe].previous}hrs`}
                bgcolor={item.bgcolor}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
