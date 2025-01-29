import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col xl:flex-row xl:gap-5 xl:h-fit xl-gap-15 gap-6'>
        <div className='relative p-6 h-[200px] xl:h-[484px] xl:w-[210px] w-full flex xl:flex-col flex-row justify-around xl:justify-end items-end xl:items-start xl:gap-3 bg-[var(--dark-blue)] rounded-2xl'>
          <p className='text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out '>Daily</p>
          <p className='text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out '>Weekly</p>
          <p className='text-[var(--pale-blue)] hover:text-white hover:cursor-pointer transition duration-450 ease-in-out '>Monthly</p>
          <div className='absolute flex xl:flex-col flex-row xl:items-start xl:justify-start justify-center items-center gap-10 p-6 top-0 left-0 xl-h-[71%] h-[65%] w-full bg-[var(--blue)] rounded-xl'>
            <img className='border-2 rounded-full border-white' src="image-jeremy.png" alt="" width={70} height={60}/>
            <div className='flex flex-col gap-1 '>
              <p className='text-[var(--pale-blue)]'>Report for</p>
              <h1 className='text-white xl:text-4xl text-xl font-extralight'>Jeremy Robson</h1>
            </div>
          </div>
        </div>
        <div className='flex gap-6 flex-col items-center justify-center'>
          <div className='flex flex-col xl:flex-row gap-6'>
            <Card
              categorie='Work'
              title='32hrs'
              description='Last week - 5hrs'
              bgcolor="bg-[var(--light-red-work)]"
              icon={<img src="icon-work.svg" alt="react" width={60} height={60} />} />
            <Card
              categorie='Play'
              title='10hrs'
              description='Last week - 5hrs'
              bgcolor="bg-[var(--soft-blue-play)]"
              icon={<img src="icon-play.svg" alt="react" width={60} height={60} />} />
            <Card
              categorie='Study'
              title='4hrs'
              description='Last week - 5hrs'
              bgcolor="bg-[var(--light-red-study)]"
              icon={<img src="icon-study.svg" alt="react" width={60} height={60} />} />
          </div>
          <div className='flex flex-col xl:flex-row gap-6'>
            <Card
              categorie='Exercise'
              title='4hrs'
              description='Last week - 5hrs'
              bgcolor="bg-[var(--lime-green-exercise)]"
              icon={<img src="icon-exercise.svg" alt="react" width={60} height={60} />} />
            <Card
              categorie='Work'
              title='5hrs'
              description='Last week - 5hrs'
              bgcolor="bg-[var(--violet-social)]"
              icon={<img src="icon-social.svg" alt="react" width={60} height={60} />} />
            <Card
              categorie='Work'
              title='2hrs'
              description='Last week - 2hrs'
              bgcolor="bg-[var(--soft-orange-self-care)]"
              icon={<img src="icon-self-care.svg" alt="react" width={60} height={60} />} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
