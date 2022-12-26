import {init} from '@lib/postgreSQL';

export async function get(req, res){
  const db = await init();

  db.connect()
    .then(async obj => {
      const rows = await db.any('SELECT * FROM public.menu ORDER BY position');
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });   
      res.end(JSON.stringify(rows));
    })
    .catch(error => {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });   
        res.end(JSON.stringify({er: error, erInfo: 'Ошибка соединения с БД'}));
  });
}