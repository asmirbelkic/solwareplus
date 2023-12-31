// messages.js
exports.messages = {
  noFileSelected: "No file selected.",
  noWorkspaceFolder: "No workspace folder found.",
  urlPrefix: "http://localhost:1234/",
  noSandboxRunning: "The sandbox server is not running.",
  pageNotFound: "The specified page was not found.",
	admin: "Run VS Code with admin privileges so the changes can be applied.",
	enabled:
		"Custom CSS and JS enabled. Restart to take effect. " +
		"If Code complains about it is corrupted, CLICK DON'T SHOW AGAIN. " +
		"See README for more detail.",
	disabled: "Custom CSS and JS disabled and reverted to default. Restart to take effect.",
	already_disabled: "Custom CSS and JS already disabled.",
	somethingWrong: "Something went wrong: ",
	restartIde: "Restart Visual Studio Code",
	notfound: "Custom CSS and JS not found.",
	notConfigured:
		"Custom CSS and JS path not configured. " +
		'Please set "vscode_custom_css.imports" in your user settings.',
	reloadAfterVersionUpgrade:
		"Detected reloading CSS / JS after VSCode is upgraded. " + "Performing application only.",
	cannotLoad: url => `Cannot load '${url}'. Skipping.`
};
