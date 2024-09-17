import dotenv from 'dotenv';
import server from './server/server';

dotenv.config();

function main() {
  const port = process.env.PORT || '3000';
  server.app.listen(port, () => {
    console.log(`Running Gabes Square on port ${3000}`);
  });
}

main();
