import React from 'react'

const Fighters = ({fighters}) => {
    return (
     <div className="section-center">
        {fighters.map((fighters)=>{
        const {id, name, species, img, desc, info} = fighters;
        return (
        <article key={id} className="menu-item">
          <img src={img} alt={name} className="photo"/>
           <div className="fighter-info">
            <header>
              <h4>{name}</h4>
              <h4 className="species">species: {species}</h4>
            </header>
          <p className="item-text">{desc}<a href={info} target="_blank" rel="noreferrer"> &#187;</a></p>
        </div>
      </article>
      )
    })}
  </div>
    )
}

export default Fighters
