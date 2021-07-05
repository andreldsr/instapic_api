module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL + "&ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory",
   "logging": false,
   "entities": [
      //"src/entities/**/*.ts",
      "dist/entities/**/*.js"
   ],
   "migrations": [
      //"src/database/migrations/**/*.ts",
      "dist/database/migrations/**/*.js"
   ],
   "cli": {
      "migrationsDir": "src/database/migrations",
      "entitiesDir": "src/entities"
   },
   "extra": {
      "ssl": true
   }
}