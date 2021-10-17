import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

const Chart6 = () => {
  const [data, setData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])
  const getData = async () => {
    const response = await fetch('http://localhost:8000/api/chart/7')
    const data = await response.json()
    const labels = []
    const values = { range1: [], range2: [], range3: [], range4: [], range5: [], range6: [], range7: [] }
    data.forEach((element, index) => {
      labels.push(element.date_account_created)
      // console.log(element)
      values.range1.push(element['Android'])
      values.range2.push(element['Moweb'])
      values.range3.push(element['Web'])
      values.range4.push(element['iOS'])
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
              text: 'Date account created dist/ signup app',
            },
          },
        }}
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Android',
              backgroundColor: 'green',
              data: values.range1,
            },
            {
              label: 'Moweb',
              backgroundColor: 'blue',
              data: values.range2,
            },
            {
              label: 'Web',
              backgroundColor: 'orange',
              data: values.range3,
            },
            {
              label: 'iOS',
              backgroundColor: 'purple',
              data: values.range4,
            },
          ],
        }}
      />
    </div>
  )
}

export default Chart6
