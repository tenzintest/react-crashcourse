import React from 'react'
import Result from './Result'

const MovieResult = ({ result, openPopup }) => {
  return (
    <section className="results">
			{result.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
  )
}

export default MovieResult