module.exports = {
    "type": "postgres",
    "host": process.env.HOST_POSTGRES,
    "port": 5432,
    "username": process.env.USER_POSTGRES,
    "password": process.env.PASSWORD_POSTGRES,
    "database": process.env.DATABASE_POSTGRES,
    "entities": [
        "./src/models/*.ts"
    ],
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}
