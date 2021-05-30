import React from "react";
import Badge from "react-bootstrap/Badge";

export default class App extends React.Component {
	render() {
		var inputStyle = {
			width: "300px",
			height: "50vh",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px",
		};
		var outputStyle = {
			width: "300px",
			height: "50vh",
			backgroundColor: "#DCDCDC",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px",
		};

		return (
			<div className="App">
				<div className="container">
					<div className="row mt-4">
						<div className="col text-center">
							<h1>
								<Badge
									className="text-align-center"
									variant="dark"
								>
									Markdown Previewer
								</Badge>
							</h1>
							<div className="row mt-4">
								<div className="col-md-6">
									<h1>
										<Badge
											className="text-align-center"
											variant="light"
										>
											Markdown
										</Badge>
									</h1>
									<div className="mark-input">
										<textarea
											className="input"
											style={inputStyle}
										>
											This is a markdown preview, do you
											like it?
										</textarea>
									</div>
								</div>
								<div className="col-md-6">
									<h1>
										<Badge
											className="text-align-center"
											variant="light"
										>
											Preview
										</Badge>
									</h1>
									<div style={outputStyle}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
