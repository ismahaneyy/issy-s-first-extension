// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const axios = require('axios')
const {XMLParser} = require("fast-xml-parser")

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	//to fetch the blog articles once and never refetch them again
	const res = await axios.get("https://blog.webdevsimplified.com/rss.xml")
	// convert xml to json
	    // create XML parser instance
        const parser = new XMLParser();
      const articles = parser.parse(res.data).rss.channel.item.map(article => ({
    label: article.title,
    detail: article.description,
    link: article.link
}));
// convert XML to JSON

        console.log(JSON.stringify(articles. null, 2)); // now works correctly

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "issy-s-first-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('issy-s-first-extension.searchIssyBlog', 
		async function () {
		const article = await vscode.window.showQuickPick(articles, {
			matchOnDetail: true
		})
		if (article == null) return 

		vscode.env.openExternal(article.link)
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}


// 

 