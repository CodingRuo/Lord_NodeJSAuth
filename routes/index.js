const Koa       = require("koa");
const Router    = require('@koa/router');

const router    = new Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello World!");
});

module.exports = router;
