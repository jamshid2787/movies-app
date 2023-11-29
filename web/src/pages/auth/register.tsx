interface RegisterProps {}

const Register = (props: RegisterProps) => {
	return (
		<>
			<div className="container">
				<h1>Register</h1>
				<div>
					<form>
						<div className="form-group">
							<label>Username</label>
							<input
								type="text"
								id="username"
								name="username"
								className="form-control"
								// value={''}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input type="password" id="password" name="password" className="form-control" />
						</div>
						<div className="form-group">
							<label>Name</label>
							<input type="text" id="name" name="name" className="form-control" />
						</div>
						<button disabled className="btn btn-primary">
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
