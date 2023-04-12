import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require("fs");
const fastcsv = require("fast-csv");
require('dotenv').config();

const Pool = require("pg").Pool;

let stream = fs.createReadStream("covid_19_data.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    console.log(process.env.DATABASE_PASSWORD);
    // create a new connection to the database
    const pool = new Pool({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(<string>process.env.DATABASE_PORT),
      idleTimeoutMillis: 0,
      conenctionTimeoutMillis: 0,
    });

    const query =
      "INSERT INTO public.covid_observations (id, observation_date, province_state, country_region, last_update, confirmed, deaths, recovered) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)";

    pool.connect((err, client, done) => {
      if (err) throw err;
      
      try {
        csvData.forEach(row => {
          client.query(query, row, (err, res) => {
            if (err) {
              console.log(err.stack);
            } else {
              console.log("inserted " + res.rowCount + " row:", row);
            }
          });
        });
      } finally {
        console.log("All available data has been inserted.");
        done();
      }
    });
  });

stream.pipe(csvStream);


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
