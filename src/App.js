import React from "react";
import Badge from "react-bootstrap/Badge";
import "./styles.css";
let marked = require("marked");

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown: "",
		};
	}
	updateMarkdown(markdown) {
		this.setState({ markdown });
	}

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
		var body = {
			backgroundColor: "#87CEFA",
			marginLeft: "auto",
			marginRight: "auto",
			height: "1100px",
			width: "auto",
			padding: "10px",
		};

		return (
			<div className="App" style={body}>
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
											Editor
										</Badge>
									</h1>
									<div className="mark-input">
										<textarea
											className="input"
											style={inputStyle}
											value={this.state.markdown}
											onChange={(event) => {
												this.updateMarkdown(
													event.target.value
												);
											}}
										>
											{console.log(this.state.markdown)}
										</textarea>
									</div>
								</div>
								<div className="col-md-6">
									<h1>
										<Badge
											className="text-align-center"
											variant="light"
										>
											Previewer
										</Badge>
									</h1>
									<div
										style={outputStyle}
										dangerouslySetInnerHTML={{
											__html: marked(this.state.markdown),
										}}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
