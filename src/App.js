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
        <div className='item left'>
          <Chart1 />
        </div>
        <div className='item right'>
          <Chart2 />
        </div>
        <div className='item left'>
          <Chart3 />
        </div>
        <div className='item right'>
          <Chart4 />
        </div>
        <div className='item left'>
          <Chart5 />
        </div>
        <div className='item right'>
          <Chart6 />
        </div>
        <div className='item last'>
          <Chart7 />
        </div>
      </div>
    </>
  )
}

export default App
