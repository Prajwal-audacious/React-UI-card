import React from 'react'
import temp from '../components/template.module.css'


const cardUi = ({name, title}) => {
  return (
    <>
    <div className={temp.wrapper}>
     <div className={temp.img}></div>
     <div className={temp.tag}>{name}</div>
     <div className={temp.sub_tag}>{title}</div>
     <button className={temp.btn}>View content</button>
    </div>
    </>
  )
}

export default cardUi
