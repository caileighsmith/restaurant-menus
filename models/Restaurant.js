const {sequelize, db} = require('../db');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create a Restaurant model

let Restaurant = db.define('Restaurant',{
    name:{
        type: DataTypes.STRING
    },
    location:{
        type: DataTypes.STRING
    },
    cuisine: {
        type: DataTypes.STRING
    }
})

async function main(){

    await Restaurant.sync({force: true})
    
        await Restaurant.create({
            
            name: 'KFC',
            location: 'UK',
            cuisine: 'American-chicken'

        })

}

module.exports = { Restaurant };