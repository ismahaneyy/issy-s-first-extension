# issy-s-first-extension 

**VS Code Extension** – Search and explore articles from WebDevSimplified’s blog directly in VS Code.

 

### Overview 

This is my first VS Code extension, designed as a practical project to demonstrate skills in **JavaScript, VS Code extension API, and API integration**.

The extension fetches articles from the [WebDevSimplified blog RSS feed](https://blog.webdevsimplified.com/rss.xml), converts them to JSON, and allows you to quickly search and open blog posts directly from VS Code.

 

### Features 

* Fetches the latest blog articles automatically.
* Displays articles in a searchable **Quick Pick menu**.
* Opens selected articles in your default browser.
* Lightweight and easy to use.

 

### Installation 

You can install the extension manually from the GitHub release:

1. Download the latest `.vsix` file from the [Releases page](https://github.com/ismahaneyy/issy-s-first-extension/releases).
2. Open VS Code → Extensions sidebar → click the three dots → **Install from VSIX…**.
3. Select the downloaded `.vsix` file.
4. The extension is now installed and ready to use!

 

### Usage 

1. Open the **Command Palette** (Ctrl+Shift+P / Cmd+Shift+P).
2. Type and select:

```
Search Issy Blog
```

3. A Quick Pick menu will appear with the latest articles.
4. Click an article to open it in your default browser.

 

### Requirements 

* VS Code 1.103.0 or higher
* Internet connection to fetch RSS feed articles



### Development 

If you want to modify or contribute:

```bash
# Clone the repository
git clone https://github.com/ismahaneyy/issy-s-first-extension.git

# Navigate to the project folder
cd issy-s-first-extension

# Install dependencies
npm install

# Run the extension in a VS Code Extension Development Host
F5
```

 

### Technologies Used 

* **JavaScript (Node.js)**
* **VS Code Extension API**
* **Axios** – for HTTP requests
* **fast-xml-parser** – for parsing RSS XML feeds

 

### License 

This project is open source. Feel free to use and modify it for learning purposes.


