const coords_model = require('../models/coords.model');
const CONFIG = require('../config/env-config').CONFIG;
const path = require('path');
const mysql = require('mysql');

module.exports = {

    urlToCoord: (req, res) => {
        connection.query(coords_model.get_urls, (err, result) => {
            result.forEach( data => {
                if(!err){
                    const id = data.id_article;
                    const latlng = data.lien_maps_magasin.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/g);
                    const lattitude = String(String(latlng).match(/@(-?\d+\.\d+)/g)).substring(1);
                    const longitude = String(String(latlng).match(/,(-?\d+\.\d+)/g)).substring(1);
                    if(lattitude!='ull'){
                        connection.query(coords_model.upd_coord, [
                            longitude,
                            lattitude,
                            id
                        ], (error, result) => {
                            if(error){
                                console.log(error);
                            }
                        })
                    }
                }
                else {
                    console.log(result);
                }
            });
        })    
        return res.status(200).json();
    }
}