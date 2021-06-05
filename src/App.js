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
			width: "300px",
			height: "75vh",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px",
		};
		var outputStyle = {
			width: "500px",
			height: "100%",
			backgroundColor: "#DCDCDC",
			marginLeft: "auto",
			marginRight: "auto",
			padding: "10px",
			textAlign: "left",
		};
		var body = {
			backgroundColor: "#87CEFA",
			marginLeft: "auto",
			marginRight: "auto",
			height: "1200px",
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
										className="align-left"
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
const placeholder = `<h1>Hello there!<h1>
<h2>My name is Piotr and this is my markdown-previewer app.</h2>
<p>Please, visit <a href="https://github.com/pyotoru">my github site</a>.</p>
Let's talk about code. I will present you <code>Array.prototype.slice()</code> method. Take a look:
</br></br>

\`\`\`
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3)

console.log(citrus) ==> Orange, Lemon
\`\`\`
Below, I introduce you 3 things you absolutely must take care of while studying new things to actually make it work:
<ul>
<li>Eat regularly and healthy</li>
<li>Get enough sleep</li>
<li>Do workout</li>
</ul>
<blockquote>
<b>Do not neglect them or you may never succeed in your life.</b>
</blockquote>
<img src="https://raw.githubusercontent.com/pyotoru/mark-down-previewer/main/src/UK-nature.jpg" alt="a photo of nature in English countryside"
width = '100%'
height = 'auto'>
`;
