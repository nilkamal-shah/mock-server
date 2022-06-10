mkdir dist 
rm -rf dist/api.json
touch dist/api.json
node index.js
json-server --watch my-api.json --port 8100