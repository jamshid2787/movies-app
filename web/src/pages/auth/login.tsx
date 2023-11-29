interface LoginProps {}

const Login = (props: LoginProps) => {
	return (
		<>
			<div className="container">
				<h1>Login</h1>
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
							<input
								type="password"
								id="password"
								name="password"
								className="form-control"
								// value={''}
							/>
						</div>
						<button disabled className="btn btn-primary">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
