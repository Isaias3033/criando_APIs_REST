import mysql from 'mysql2';

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'loja'
});

conexao.connect((err) => {
  if (err) {
    console.error('Erro na conexão:', err);
    return;
  }
  console.log('MySQL conectado!');
});

export default conexao;
