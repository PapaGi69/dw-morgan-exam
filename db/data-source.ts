import { DataSource, DataSourceOptions } from "typeorm";
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: parseInt(<string>process.env.DATABASE_PORT),
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js']
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;