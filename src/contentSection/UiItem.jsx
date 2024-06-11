import React from 'react'

function UiItem({key,links,template}) {
  return (
  <>
  
      <div key={key} className='templateItems'>
        <a href={links}>
        <img src={template} alt={template} />
        </a>
        
      </div>
  </>

  )
}

export default UiItem