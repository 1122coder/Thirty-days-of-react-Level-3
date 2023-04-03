import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';

import ReactApexChart from 'react-apexcharts';

export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

const App =() => {
  const data1= {      
    series: [{
      data: [7693165599, 1377422166, 1295210000, 323947000, 258705000, 206135893, 194125062, 186988000, 161006790,146599183, 126960000]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: ['World', 'China', 'India', 'United States of America', 'Indonesia', 'Brazil', 'Pakistan',
          'Nigeria', 'Bangladesh', 'Russian Federation', 'Japan'
        ],
      }
    }, 
  };

  return(
    <>
    <div className='app'>
        <div className='app-wrapper'>
          <h1>30 Days of React</h1>
          <h3>World Population</h3>
          <small>Top ten countires with Population</small>
      </div>
      <div style={{ marginLeft: '20%'}}>
      <ReactApexChart options={data1.options} series={data1.series} type="bar" height={450} width={800} />
      </div>
    </div>

    </>
  )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
// we render the App component using the ReactDOM package
rootElement.render(<App />, rootElement)