import React from "react";
import Badge from "react-bootstrap/Badge";
import "./styles.css";
let marked = require("marked");

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			markdown: placeholder,
		};
	}
	updateMarkdown(markdown) {
		this.setState({ markdown });
	}

	render() {
		var inputStyle = {
			width: "400px",
			height: "50vh",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px",
		};
		var outputStyle = {
			width: "400px",
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
											placeholder="sa"
										>
											<h1>Hello World</h1>
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
const placeholder = "<h1>Hello world<h1>";
