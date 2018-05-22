import React from 'react'

const ShowDetail = (props) =>{

  const mapEpisodes = props.details.map((episode) => {
    return  <li>{episode.name}</li>
  })
  return(
    <ul>
      {mapEpisodes}
    </ul>

  )

}

export default ShowDetail
