import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Chart2 = () => {
  const [data, setData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:8000/api/chart/2')
    const data = await response.json()
    const labels = []
    const values = []
    data.forEach((element) => {
      labels.push(element.affiliate_channel)
      values.push(element.total)
    })
    setLabels(labels)
    setValues(values)
    setData(data)
  }
  useEffect(function () {
    getData(data)
  }, [])
  return (
    <div>
      <Bar
        responsive
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Affiliate Channel Percentage',
              backgroundColor: 'red',

              data: values,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart2
