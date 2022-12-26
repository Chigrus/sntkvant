import {init} from '@lib/postgreSQL';

export async function post(req, res){
    const db = await init();
    const {og_id} = req.body.ogparams;
  
    db.any(`SELECT 
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
            LIMIT 1`, [og_id])
      .then(function (data) {
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });   
        res.end(JSON.stringify(data));
        //console.log(data);
      })
      .catch(function (error) {
        console.log('ERROR:', error);
        res.writeHead(500, {
          'Content-Type': 'application/json'
        });   
        res.end(JSON.stringify({er: true}));
      })
}