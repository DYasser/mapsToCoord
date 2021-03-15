const get_urls = `
SELECT lien_maps_magasin, id_article
FROM tab_annonces
WHERE lien_maps_magasin IS NOT NULL 
`

const upd_coord = `
UPDATE tab_annonces
SET 
    code_statut_article =    'MODI' ,
    longitude_magasin   =       ?   ,
    latitude_magasin    =       ?      
WHERE 
    lien_maps_magasin IS NOT NULL 
AND id_article  =    ?
`

module.exports = {
    get_urls,
    upd_coord
}