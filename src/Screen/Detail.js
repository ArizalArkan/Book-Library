import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Screen/Detail.css'

function convert (date) {
  let data = Date.parse(date)
  let newDate = new Date(data)
  let day = newDate.getDate()
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  let month = months[newDate.getMonth()]
  var year = newDate.getFullYear()
  return `${day} ${month} ${year}`
}

export default function BookDetail (props) {
  console.log(props)
  let bookid = props.match.params.bookid
  let Data = props.data.Data
  let data = Data.find((item) => item.bookid === bookid)
  function deleteData () {
    let dataIndex = Data.indexOf(data)
    props.deleteData(dataIndex)
  }
  return (
    <div className='book-detail'>
      <div>
        <ul>
          <li><Link to='/book' className='back'>BACK</Link></li>
          {console.log(props.showModal)}
          <li className='button' onClick={props.showModal}>Edit</li>
          <li className='button' onClick={deleteData}>Delete</li>
        </ul>
        {console.log(data)}
        <img className={'imageHeader'} src={data.image_url} alt={data.title} />
      </div>
      <div className='content'>
        <img className={'imageBook'} src={data.image_url} alt={data.title} />
        <p className='title'>{data.title}</p>
        <p className='date'>{convert(data.updated_at)}</p>
        <p className='text'>{data.Description}</p>
      </div>

    </div>
  )
}
