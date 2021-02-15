const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const idToGet = req.params.id;
  const sqlText = 
  `SELECT * FROM movies_genres 
  JOIN movies ON movies_genres.movie_id = movies.id
  JOIN genres ON movies_genres.genre_id = genres.id 
  WHERE movie_id=$1`;
  pool.query(sqlText, [idToGet])
  .then( (result) => {
    console.log(`Movie with id ${idToGet}`, result.rows);
    res.send(result.rows);
  })
  .catch( (error) => {
    console.log(`Error making database query ${sqlText}`, error);
    res.sendStatus(500); // Good server always responds
  })
});

module.exports = router;