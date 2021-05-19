// req => the endpoint request
// code => custom number or string to tell which catch was it in
// error => the error of the catch

module.exports = function (req, code, error) {
  console.error(`---------------------`);
  console.error(`Time: ${new Date()}`);
  console.error(`Method: ${req.method}`);
  console.error(`Path: ${req.originalUrl}`);
  console.error(`Catch: ${code}`);
  console.error(error.message);
  console.error(`---------------------`);
};
