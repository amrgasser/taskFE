import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const Chart6 = () => {
  const [data, setData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:8000/api/chart/6')
    const data = await response.json()
    const labels = []
    const values = { range1: [], range2: [], range3: [], range4: [], range5: [], range6: [], range7: [] }
    data.forEach((element, index) => {
      labels.push(element.date_account_created)
      // console.log(element)
      values.range1.push(element['18-20'])
      values.range2.push(element['20-30'])
      values.range3.push(element['30-40'])
      values.range4.push(element['40-50'])
      values.range5.push(element['50-60'])
      values.range6.push(element['60-70'])
      values.range7.push(element['70+'])
    })

    setValues(values)
    setLabels(labels)
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
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Date account created dist/ age range',
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: '18-20',
              backgroundColor: 'green',
              data: values.range1,
            },
            {
              label: '20-30',
              backgroundColor: 'blue',
              data: values.range2,
            },
            {
              label: '30-40',
              backgroundColor: 'orange',
              data: values.range3,
            },
            {
              label: '40-50',
              backgroundColor: 'purple',
              data: values.range4,
            },
            {
              label: '50-60',
              backgroundColor: 'red',
              data: values.range5,
            },
            {
              label: '60-70',
              backgroundColor: 'yellow',
              data: values.range6,
            },
            {
              label: '70+',
              data: values.range7,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart6
