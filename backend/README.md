Per eseguire il server, assicurati di avere Node.js installato sul tuo sistema. Apri una finestra del terminale, posizionati nella directory del progetto e esegui i seguenti comandi:

npm init -y
npm install express
node server.js


Dopo aver avviato il server, puoi fare una richiesta GET all'endpoint "/api/data" specificando il parametro come query string, ad esempio: "http://localhost:3000/api/data?param=valore2". Il server restituirà un array JSON contenente gli oggetti filtrati in base al parametro specificato.

Ricorda di sostituire "data.json" con il percorso effettivo del tuo file JSON e di personalizzare ulteriormente la logica di filtraggio in base alle tue esigenze specifiche.
