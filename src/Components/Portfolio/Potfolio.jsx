import React from 'react'
import poert1 from '../../assets/poert1.png'
import poert2 from '../../assets/port2.png'
import poert3 from '../../assets/port3.png'
export default function Potfolio() {
  return <>
  
  <div className="portfolio">
    <h1 className='text-uppercase text-center pt-4 pb-4'>portfolio component</h1>
    <div className="container">
    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
  <div className="col">
    <div className="card h-100 border-0">
      <img src={poert1} className="card-img-top border-0" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={poert2} className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={poert3} className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card h-100 border-0">
      <img src={poert1} className="card-img-top border-0" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={poert2} className="card-img-top" alt="..." />
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={poert3} className="card-img-top" alt="..." />
    </div>
  </div>
</div>
    </div>

  </div>
  </>
}
