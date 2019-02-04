

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/reminders'
},

production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}

};
