const { detectPort } = require('../out/index');

async function main() {
  const port = await detectPort();
  console.log(port);
}

main();
