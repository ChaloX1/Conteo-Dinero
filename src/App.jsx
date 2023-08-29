import { ContDinero } from './componentes/contDinero'
import { SumDinero } from './componentes/sumDinero'
import { ResDinero } from './componentes/resDinero'
import './App.css'

function App() {
  return (
    <>
        <div className='mt-10 mb-10 flex flex-row justify-center items-center gap-10 max-md:flex-col '>
          <div className='flex flex-col gap-10'>
            <div className='bg-red-600/100 p-5'>
              <ResDinero />
            </div>
            <div className='bg-blue-700 p-5 flex flex-col gap-4'>
              <SumDinero />
              <SumDinero />
              <SumDinero />
              <SumDinero />
              <SumDinero />
            </div>
          </div>
          <div className='bg-green-600 p-5 flex flex-col gap-4'>
            <ContDinero moneda={0.10} />
            <ContDinero moneda={0.20} />
            <ContDinero moneda={0.50} />
            <ContDinero moneda={1} />
            <ContDinero moneda={2} />
            <ContDinero moneda={5} />
            <ContDinero moneda={10} />
            <ContDinero moneda={20} />
            <ContDinero moneda={50} />
            <ContDinero moneda={100} />
            <ContDinero moneda={200} />
          </div>
        </div>
    </>
  )
}

export default App
