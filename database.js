require('dotenv').config();

const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL,
})

async function main() {
  await client.connect()

  // Create a new users table
  await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(50)
    )
  `)

  console.log('Users table created.')

  await client.end()
}


main().catch(console.error)
