import React from "react";
import Badge from "react-bootstrap/Badge";

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<div className="row mt-4">
						<div className="col text-center">
							<h1>
								<Badge
									className="text-align-center"
									variant="light"
								>
									Markdown Previewer
								</Badge>
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
