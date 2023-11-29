import React, { Component } from 'react';

export default class Main extends Component {
	state = {
		moviesData: [],
		genresData: [],
	};

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
	render() {
		return (
			<>
				<main className="container">
					<div className="row">
						<div className="col-3">
							<ul className="list-group">
								<li className="list-group-item">All Genres</li>
								{this.state.genresData.map((genre: any) => (
									<li className="list-group-item">{genre.name}</li>
								))}
							</ul>
						</div>
						<div className="col">
							<p>Showing {this.state.moviesData.length} movies in the database.</p>
							<input
								type="text"
								name="query"
								className="form-control my-3"
								placeholder="Search..."
								// value=""
							/>
							<table className="table">
								<thead>
									<tr>
										<th className="clickable">
											Title <i className="fa fa-sort-asc"></i>
										</th>
										<th className="clickable">Genre </th>
										<th className="clickable">Stock </th>
										<th className="clickable">Rate </th>
										<th className="clickable"> </th>
									</tr>
								</thead>
								<tbody>
									{this.state.moviesData.map((movie: any) => (
										<tr>
											<td>{movie.title}</td>
											<td>{movie.genre.name}</td>
											<td>{movie.numberInStock}</td>
											<td>{movie.dailyRentalRate}</td>
										</tr>
									))}
								</tbody>
							</table>
							{/* <nav>
         <ul className="pagination">
          <li className="page-item active">
           <a className="page-link">1</a>
          </li>
          <li className="page-item">
           <a className="page-link">2</a>
          </li>
          <li className="page-item">
           <a className="page-link">3</a>
          </li>
          <li className="page-item">
           <a className="page-link">4</a>
          </li>
          <li className="page-item">
           <a className="page-link">5</a>
          </li>
          <li className="page-item">
           <a className="page-link">6</a>
          </li>
          <li className="page-item">
           <a className="page-link">7</a>
          </li>
          <li className="page-item">
           <a className="page-link">8</a>
          </li>
          <li className="page-item">
           <a className="page-link">9</a>
          </li>
          <li className="page-item">
           <a className="page-link">10</a>
          </li>
         </ul>
        </nav> */}
						</div>
					</div>
				</main>
			</>
		);
	}
}
