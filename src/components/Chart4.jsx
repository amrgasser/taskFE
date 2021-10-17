import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

const Chart4 = () => {
  const [data, setData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:8000/api/chart4')
    const data = await response.json()
    const labels = []
    const values = []
    data.forEach((element) => {
      labels.push(element.affiliate_provider)
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
              label: 'Chart4',
              data: values,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart4
