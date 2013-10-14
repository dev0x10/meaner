/**
 * Created by Yauri on 10/13/13.
 */

module.exports = function (app) {
  app.get('/partials/:view', function (req, res) {
    if (!req.params.view) return;
    res.render("partials/" + req.params.view);
  });

  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("*", function (req, res) {
    res.render("index");
  });
}
