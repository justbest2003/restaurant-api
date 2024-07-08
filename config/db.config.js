require("dotenv").config();

module.exports = {
  HOST: "ep-summer-mountain-a19lh3kp-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "ofxOKY20Xqyd",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
