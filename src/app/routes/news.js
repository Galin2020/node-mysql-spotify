const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM vista_reportes', (err, result) => {
      console.log(result);
        res.render('news/news', {
        news: result
      });
    })
});
}

 