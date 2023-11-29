<li
									className={`list-group-item ${activeGenre === 'All Genres' ? 'active' : ''}`}
									onClick={() => this.handleGenreClick('All Genres')}
								>
									All Genres
								</li>
								{genresData.map((genre: any) => (
									<li
										key={genre._id}
										className={`list-group-item ${activeGenre === genre._id ? 'active' : ''}`}
										onClick={() => this.handleGenreClick(genre._id)}
									>
										{genre.name}
									</li>
								))}



async componentDidMount() {
		try {
			const moviesResponse = await fetch('http://localhost:4000/api/movies');
			if (!moviesResponse.ok) {
				throw new Error('Failed to fetch movies');
			}
			const movies = await moviesResponse.json();
			this.setState({ moviesData: movies });
			console.log('Fetched movies:', movies);

			const genresResponse = await fetch('http://localhost:4000/api/genres');
			if (!genresResponse.ok) {
				throw new Error('Failed to fetch genres');
			}
			const genres = await genresResponse.json();
			this.setState({ genresData: genres });
			console.log('Fetched genres:', genres);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}