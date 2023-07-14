const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    
  htmlFile = "blockslist/";
  const blockslist = req.query.blockslist;
  if ( blockslist != null )
    htmlFile+=blockslist;
  else {    
    const block = req.query.block;
    htmlFile+="blocks/";
    htmlFile+= block;
  }
  
  htmlFile+=".html";
  console.log("file " + htmlFile);

  // Recupera il file JSON
  fs.readFile(htmlFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Impossibile recuperare i dati' });
      return;
    }

    try {
        
      //const jsonData = JSON.parse(data);

      // Filtra i dati in base al parametro
      //const filteredData = jsonData.filter(item => item.param === param);

      // Restituisce i dati filtrati come JSON
      //res.json(filteredData);
      res.send(data);
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Errore durante l\'elaborazione dei dati' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

