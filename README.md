# How to create mock server using just json-server package

- Initiate your folder as npm package using npm init -y
- Install json-server as dev dependency
- create run.sh file with following content

  mkdir dist
  rm -rf dist/api.json
  touch dist/api.json
  node index.js
  json-server --watch my-api.json --port 8100

- Create new file under mocks folder if you want to create new endpoint
- run run.sh file using npm run start
