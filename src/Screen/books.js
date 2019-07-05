import React from 'react'
import { Link } from 'react-router-dom'
import '../Screen/books.css'

function text (text) {
  if (text.length > 20) {
    let textSplit = text.substr(0, 20)
    return `${textSplit} ...`
  } else {
    let textSplit = text
    return `${textSplit}`
  }
}
export default function list ({ prop, showModal }) {
  let data = prop.Data
  return (
    <div className='list'>
      <button className='add' onClick={showModal}>ADD</button>
      <div className='list-item'>
        {
          data.map(
            item => {
              return (
                <Link to={`/book/${item.bookid}`}>
                  <div className='item' id='items' bookid={item.bookid}>
                    <img src={item.image_url} alt='gambar' />
                    <div>
                      <p>{text(item.title)}</p>
                    </div>
                  </div>
                </Link>
              )
            }
          )
        }
      </div>
    </div>
  )
}
