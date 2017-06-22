/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// [START all]
const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest((req, res) => {
  const hours = (new Date().getHours() % 12) + 1; // london is UTC + 1hr;
  // [START_EXCLUDE silent]
  // [START cachecontrol]
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  // [END cachecontrol]
  // [START vary]
  res.set('Vary', 'Accept-Encoding, X-My-Custom-Header');
  // [END vary]
  // [END_EXCLUDE]
  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      <h1>Text</h1>
      ${hours}
    </body>
  </html>`);
});

exports.oauth = functions.https.onRequest((req, res) => {
  const r = {
    oauth: 0
  };
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  res.set('Vary', 'Accept-Encoding, X-My-Custom-Header');
  res.status(200).json(r);
});

exports.southAmerica = functions.https.onRequest((req, res) => {
    const countries = [
      {
        id: 'ARG',
        name: 'Argentina',
        area: 2791810,
        population: 39745613,
        capital: 'Buenos Aires',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '50_Pesos_(AR)_Islas_Malvinas.jpeg'
      },
      {
        id: 'ABW',
        name: 'Aruba',
        area: 193,
        population: 102695,
        capital: 'Oranjestad',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Aruban_10_florin_banknote_front.jpg'
      },
      {
        id: 'BOL',
        name: 'Bolivia',
        area: 1098581,
        population: 9627269,
        capital: 'La Paz',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'BOL0207bo.jpg'
      },
      {
        id: 'BON',
        name: 'Bonaire',
        area: 294,
        population: 15800,
        capital: 'Kralendijk',
        dependentTerritory: false,
        municipalityTerritory: true,
        currencySample: 'New100back.jpg'
      },
      {
        id: 'BRA',
        name: 'Brasil',
        area: 8515767,
        population: 200104749,
        capital: 'Brasília',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Newreal.jpeg'
      },
      {
        id: 'CHL',
        name: 'Chile',
        area: 756950,
        population: 16598074,
        capital: 'Santiago',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Chilean_notes.jpg'
      },
      {
        id: 'COL',
        name: 'Colombia',
        area: 1141748,
        population: 44379598,
        capital: 'Bogota',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Billete_de_100_mil_pesos_colombianos_anverso.png'
      },
      {
        id: 'CUW',
        name: 'Curacao',
        area: 444,
        population: 142180,
        capital: 'Willemstad',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: '100-guilder_bill_(Netherlands_Antilles).jpg'
      },
      {
        id: 'ECU',
        name: 'Equador',
        area: 256370,
        population: 13810000,
        capital: 'Quito',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '50_USD_Series_2004_Note_Back.jpg'
      },
      {
        id: 'GUY',
        name: 'Guyana',
        area: 214970,
        population: 751000,
        capital: 'Georgetown',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'GYDnotes.png'
      },
      {
        id: 'GUY',
        name: 'Guyana',
        area: 214970,
        population: 751000,
        capital: 'Georgetown',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'GYDnotes.png'
      },
      {
        id: 'GFR',
        name: 'Guyana Francesa',
        area: 86504,
        population: 209000,
        capital: 'Caiena',
        dependentTerritory: false,
        municipalityTerritory: true,
        currencySample: ''
      },
      {
        id: 'FLK',
        name: 'Ilhas Malvinas',
        area: 12200,
        population: 3060,
        capital: 'Port Stanley',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Falklands_£2.png'
      },
      {
        id: '003',
        name: 'Ilhas da Geórgia do Sul',
        area: 4057,
        population: 100,
        capital: 'Ponto Rei Eduardo',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Bank_of_England_£5_reverse.jpg'
      },
      {
        id: 'PRY',
        name: 'Paraguay',
        area: 406750,
        population: 6100000,
        capital: 'Assunção',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Anverso10000.png'
      },
      {
        id: 'PER',
        name: 'Peru',
        area: 1285220,
        population: 28674757,
        capital: 'Lima',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Coin_Peru_1_Nuevo_Sol.jpg'
      },
      {
        id: 'SUR',
        name: 'Suriname',
        area: 163270,
        population: 470000,
        capital: 'Paramaribo',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '20surinamedollar.jpg'
      },
      {
        id: 'URY',
        name: 'Uruguay',
        area: 916445,
        population: 27934783,
        capital: 'Caracas',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'URU0092o.jpg'
      },
      {
        id: 'VEN',
        name: 'Venezuela',
        area: 176220,
        population: 3399237,
        capital: 'Montevidéo',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '1995_20_bolívares_Obverse.jpg'
      },
    ];
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.set('Vary', 'Accept-Encoding, X-South-America');
    res.status(200).json(countries);
});
// [END all]
