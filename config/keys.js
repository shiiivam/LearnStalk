dbPassword =
  "mongodb+srv://shivam:" +
  encodeURIComponent("test123") +
  "@brainstalk-lms.xndcc.mongodb.net/Members?retryWrites=true";

module.exports = {
  mongoURI: dbPassword,
};
