const dotenv =require('dotenv').config({path:'dev.env'});//instantiate environment variables
let CONFIG = {} //Make this global to use all over the application

CONFIG.app              = process.env.APP   
CONFIG.port             = process.env.PORT  
CONFIG.version          = process.env.API_VERSION

CONFIG.db_dialect       = process.env.DB_DIALECT   
CONFIG.db_host          = process.env.DB_HOST      
CONFIG.db_port          = process.env.DB_PORT      
CONFIG.db_name          = process.env.DB_NAME      
CONFIG.db_user          = process.env.DB_USER      
CONFIG.db_password      = process.env.DB_PASSWORD  

CONFIG.google_api_key   = process.env.GOOGLE_API_KEY

module.exports.CONFIG = CONFIG
global.CONFIG = CONFIG

