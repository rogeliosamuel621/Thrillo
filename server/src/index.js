import app from './app';

function main() {
  // execute the express server
  app.listen(process.env.PORT, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log(`SERVER RUNNING - PORT: ${process.env.PORT}`);
  });
}

main();
