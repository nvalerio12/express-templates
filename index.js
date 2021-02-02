const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine',  'ejs');

app.get('/', (req, res) => {
   const superBowlObject = {
       tom: 'Tom Brady',
       patrick: 'Patrick Mahomes'
   }
   res.render('index.ejs', superBowlObject);
});

app.get('/', (req, res) => {
    const positionArray = ['quaterback', 'running back', 'wide receiver']
    
    res.render('index.ejs', { positionArray });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server running on port:', PORT);
});