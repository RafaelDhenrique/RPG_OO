const game = require('./GameStructure');
const sql2 = require('mysql2');

// const conn = new sql2();
const conn = sql2.createConnection({
    host:'localhost',
    user:'root',
    database: 'mygame'
});

function saveCharacter(char, con){
    con.query(`INSERT INTO characters_info (Name,Life,Mana,Strenght,Defense,Class) VALUES ('${char.name}','${char.life}','${char.mana}','${char.strenght}','${char.defense}','${char._class}')`,(err, result, fields)=>{
        if(err){
            console.error(err);
        }
    })
}

const char1 = new game('Rafa',500,300,1000,400,'Mage');
const char2 = new game('Guigs', 1000,100,899,400,"Warrior");

saveCharacter(char1, conn);