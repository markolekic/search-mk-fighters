import React from 'react';

const Origin = ({origins, filterOrigin}) => {
  return (
    <div className="btn-container">
      {origins.map((origin, index)=>{
        return (
          <button 
            type="button" 
            className="filter-btn" 
            key={index} 
            onClick={()=>filterOrigin(origin)}
            >
              {origin}
          </button>
        );
      })}
    </div>
  )
}

export default Origin