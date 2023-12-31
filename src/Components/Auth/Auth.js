
import React, { useState } from "react"

export default function Auth(props) {
	let [authMode, setAuthMode] = useState("signin")

	const changeAuthMode = () => {
		setAuthMode(authMode === "signin" ? "signup" : "signin")
	}

	function handleButtonClick() {
		fetch("/api/posts", {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			}
		})
			.then(response => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}

	if (authMode === "signin") {
		return (
			<div className="Auth-form-container">
				<form className="Auth-form">
					<div className="Auth-form-content">
						<h3 className="Auth-form-title">Sign In</h3>
						<div className="text-center">
							Not registered yet?{" "}
							<span className="link-primary" onClick={changeAuthMode}>
								Sign Up
							</span>
						</div>
						<div className="form-group mt-3">
							<label>Email address</label>
							<input
								type="email"
								className="form-control mt-1"
								placeholder="Enter email"
							/>
						</div>
						<div className="form-group mt-3">
							<label>Password</label>
							<input
								type="password"
								className="form-control mt-1"
								placeholder="Enter password"
							/>
						</div>
						<div className="d-grid gap-2 mt-3">
							<button onClick={handleButtonClick} type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}

	return (
		<div className="Auth-form-container">
			<form className="Auth-form">
				<div className="Auth-form-content">
					<h3 className="Auth-form-title">Sign Up</h3>
					<div className="text-center">
						Already registered?{" "}
						<span className="link-primary" onClick={changeAuthMode}>
							Sign In
						</span>
					</div>
					<div className="form-group mt-3">
						<label>Full Name</label>
						<input
							type="email"
							className="form-control mt-1"
							placeholder="e.g Jane Doe"
						/>
					</div>
					<div className="form-group mt-3">
						<label>Email address</label>
						<input
							type="email"
							className="form-control mt-1"
							placeholder="Email Address"
						/>
					</div>
					<div className="form-group mt-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control mt-1"
							placeholder="Password"
						/>
					</div>
					<div className="d-grid gap-2 mt-3">
						<button onClick={handleButtonClick} type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}