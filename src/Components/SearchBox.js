import React from 'react'

const SearchBox = ({ handleInput, search}) => {
  return (
    <section className="searchbox-wrap">
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
  )
}

export default SearchBox