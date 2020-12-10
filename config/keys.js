dbPassword =
  "mongodb+srv://shivam:" +
  encodeURIComponent("test123") +
  "@sandbox.3bkoa.mongodb.net/Members?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword,
};