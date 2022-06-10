const fs = require("fs");
const path = require("path");

const readFileNames = (folderName) => {
	const directory = path.join(__dirname, folderName);
	const result = {};
	fs.readdirSync(directory).forEach((file) => {
		const fileName = path.join(__dirname, folderName, file);
		const data = require(fileName);
		result[file.split(".")[0]] = data;
	});
	return result;
};
const data = readFileNames("mocks");
// const data = { date: date, spendingInsight: spendingInsight };

fs.writeFile("dist/api.json", JSON.stringify(data), (err) => {
	if (err) {
		console.error(err);
	}
	// file written successfully);
});
