import { dbInit } from '@lib/db';
import { wrapHandler } from '@lib/utils';

export const get = wrapHandler(async (req, res) => {
    const db = await dbInit();
    const rows = await db.any('SELECT * FROM public.menu ORDER BY position');
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(rows));
});