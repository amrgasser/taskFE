import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const Chart5 = () => {
  const [data, setData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:8000/api/chart/5')
    const data = await response.json()
    const labels = []
    const values = []
    data.forEach((element) => {
      labels.push(element.date_account_created)
      values.push(element.total)
    })
    setLabels(labels)
    setValues(values)
    setData(data)
  }
  useEffect(function () {
    getData(data)
  }, [])
  useEffect(
    function () {
      console.log(values)
    },
    [values]
  )
  return (
    <div>
      <Line
        responsive
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Chart5',
              backgroundColor: 'green',
              data: values,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart5
