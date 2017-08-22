
function setUpHealth(app) {
  app.get('/health', function(req, res) {
    return res.json({'ok': true});
  });
}

module.exports = setUpHealth;
