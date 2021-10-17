import './App.css'
import Chart1 from './components/Chart1.jsx'
import Chart2 from './components/Chart2.jsx'
import Chart3 from './components/Chart3.jsx'
import Chart4 from './components/Chart4.jsx'
import Chart5 from './components/Chart5'
import Chart6 from './components/Chart6'
import Chart7 from './components/Chart7'

function App() {
  return (
    <>
      <div className='container'>
        <div className='item1'>
          <Chart1 />
        </div>
        <div className='item2'>
          <Chart2 />
        </div>
        <div className='item3'>
          <Chart3 />
        </div>
        <div className='item4'>
          <Chart4 />
        </div>
        <div className='item5'>
          <Chart5 />
        </div>
        <div className='item6'>
          <Chart6 />
        </div>
        <div className='item7'>
          <Chart7 />
        </div>
      </div>
    </>
  )
}

export default App
