const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "kfgk8u2ogtoylkq9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "sbxjy1xtbi65fmk3",
    password: "ifrsa9kjughgkmzj",
    database: "g10s7bvttk0i0iun"
});

module.exports = pool;

/**
 * Database Schema
 * 
 * databse: g10s7bvttk0i0iun
 *  table: accounts
 *    accounts_id
 *    accounts_fname
 *    accounts_lname
 *    accounts_phone
 *    accounts_address
 *    accounts_state
 *    accounts_city
 *    accounts_zip
 *    accounts_email
 *    accounts_username
 *    accounts_password
 * 
 *  table: products
 *    product_id
 *    product_desc
 *    product_price
 *    product_imageUrl
 * 
 *  table: transactions
 *    transactions_id
 *    transactions_accountid
 *    transactions_productid
 *    transactions_quantity
 *    transactions_total
 *    transactions_shipping
 */