import React from 'react'

const Button = ({title}) => {
  return (
    <button className="bg-orange-500 px-5 py-3 rounded-full hover:bg-orange-600 transition w-[150px] text-white">
        {title}
    </button>
  )
}

export default Button