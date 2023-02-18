import { dbInit } from '@lib/db';
import { wrapHandler } from '@lib/utils';

const SQL = `SELECT
    opengraph.id as og_id,
    opengraph.title as site_title,
    opengraph.description as site_description,
    opengraph.og_type,
    opengraph.og_title,
    opengraph.og_description,
    opengraph.og_url,
    opengraph.og_image,
    opengraph.og_image_type,
    opengraph.og_image_width,
    opengraph.og_image_height,
    opengraph.og_article,
    opengraph.og_profile,
    opengraph.og_video
FROM opengraph
WHERE opengraph.id = $1
LIMIT 1`;

export const post = wrapHandler(async (req, res) => {
    const db = await dbInit();
    const { og_id } = req.body.ogparams;
    const data = await db.any(SQL, [og_id]);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(data));
});
