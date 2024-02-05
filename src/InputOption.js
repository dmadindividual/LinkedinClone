import React from 'react'

const InputOption = ({title, icon, color}) => {
  return (
    <div className='InputOption flex items-center mt-3 hover:bg-zinc-300 rounded p-1 cursor-pointer'>
              {icon && <div className={color}>{icon}</div>}
      <h3 className='text-xs font-normal ml-1'>{title}</h3>
 

    </div>
  )
}

export default InputOption