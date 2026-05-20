
const app = require('./src/app');

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => {
  console.log(` API rodando em ${PORT} ajuste 4`); 
  console.log(` para verificar saude da API digite  : `);
  console.log(` http://localhost:${PORT}/health`);	

});


const app = require('./src/app');
const porta = 3000;

app.listen(porta, () => {
    console.lang(`API da SaunaCalc Elite rodando na porta ${porta}`);
});