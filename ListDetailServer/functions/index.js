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
        key: 'ARG',
        name: 'Argentina',
        colors: [
          'lightblue',
          'white',
        ],
        area: 2791810,
        population: 39745613,
        capital: 'Buenos Aires',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '50_Pesos_(AR)_Islas_Malvinas.jpeg',
        flag: '73_bandeira_argentina_2000px.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Cataratas do Iguaçu',
            moreUrl: 'https://pt.wikipedia.org/wiki/Cataratas_do_Iguaçu',
            photo: 'Iguacufromair.jpg'
          }
        ]
      },
      {
        key: 'ABW',
        name: 'Aruba',
        colors: [
          '#4189dd',
          '#f9d616',
          '#d21034',
          'white'
        ],
        area: 193,
        population: 102695,
        capital: 'Oranjestad',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Aruban_10_florin_banknote_front.jpg',
        flag: 'aruba.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Farol California',
            moreUrl: 'https://guia.melhoresdestinos.com.br/farol-california-aruba-83-1339-l.html',
            photo: 'pqhmdhlc-1374775236-bg.jpg'
          }
        ]
      },
      {
        key: 'BOL',
        name: 'Bolivia',
        colors: [
          '#D52B1E',
          '#FCD116',
          '#007934'
        ],
        area: 1098581,
        population: 9627269,
        capital: 'La Paz',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'BOL0207bo.jpg',
        flag: '86_download_3.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Salar de Tunupa',
            moreUrl: 'https://pt.wikipedia.org/wiki/Salar_de_Uyuni',
            photo: 'Salar_Uyuni_au01.jpg'
          }
        ]
      },
      {
        key: '001',
        name: 'Bonaire',
        colors: [
          'blue',
          'red',
          'white',
          'yellow'
        ],
        area: 294,
        population: 15800,
        capital: 'Kralendijk',
        dependentTerritory: false,
        municipalityTerritory: true,
        currencySample: 'New100back.jpg',
        flag: 'Bonaire_Icon.svg.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Ilha ABC',
            moreUrl: 'https://pt.wikipedia.org/wiki/Ilhas_ABC',
            photo: 'img_2809.jpg'
          }
        ]
      },
      {
        key: 'BRA',
        name: 'Brasil',
        colors: [
          'green',
          'yellow',
          'blue',
          'white'
        ],
        area: 8515767,
        population: 200104749,
        capital: 'Brasília',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Newreal.jpeg',
        flag: 'bandeira_do_brasil_thumb[3].png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Cristo Redentor',
            moreUrl: 'https://pt.wikipedia.org/wiki/Cristo_Redentor',
            photo: 'Cristo_Redentor_-_Rio_de_Janeiro,_Brasil-crop.jpg'
          }
        ]
      },
      {
        key: 'CHL',
        name: 'Chile',
        colors: [
          'red',
          'white',
          'blue',
        ],
        area: 756950,
        population: 16598074,
        capital: 'Santiago',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Chilean_notes.jpg',
        flag: '98_bandeira_do_chile.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Parque Nacional Torres del Paine',
            moreUrl: 'https://pt.wikipedia.org/wiki/Parque_Nacional_Torres_del_Paine',
            photo: 'Torres_del_Paine_cropped.jpg'
          }
        ]
      },
      {
        key: 'COL',
        name: 'Colombia',
        colors: [
          '#FCD116',
          '#003893',
          '#CE1126',
        ],
        area: 1141748,
        population: 44379598,
        capital: 'Bogota',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Billete_de_100_mil_pesos_colombianos_anverso.png',
        flag: '99_2da32225a0e12610f46b.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Museu do Ouro',
            moreUrl: 'https://pt.wikipedia.org/wiki/Museu_do_Ouro_(Bogotá)',
            photo: 'Muisca_raft_Legend_of_El_Dorado_Offerings_of_gold.jpg'
          }
        ]
      },
      {
        key: 'CUW',
        name: 'Curacao',
        colors: [
          '#002b7f',
          '#f9e814',
          '#ffffff',
        ],
        area: 444,
        population: 142180,
        capital: 'Willemstad',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: '100-guilder_bill_(Netherlands_Antilles).jpg',
        flag: 'Curaçao_Icon.svg.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Klein Curaçao',
            moreUrl: 'https://pt.wikipedia.org/wiki/Klein_Curaçao',
            photo: 'Klein_curacao_lighthouse_areal.jpg'
          }
        ]
      },
      {
        key: 'ECU',
        name: 'Equador',
        colors: [
          'red',
          'blue',
          'yellow',
        ],
        area: 256370,
        population: 13810000,
        capital: 'Quito',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '50_USD_Series_2004_Note_Back.jpg',
        flag: 'National_Standard_of_Ecuador.svg.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Cotopaxi',
            moreUrl: 'https://pt.wikipedia.org/wiki/Cotopaxi',
            photo: 'Cotopaxi_mini.jpg'
          }
        ]
      },
      {
        key: 'GUY',
        name: 'Guyana',
        colors: [
          '#009e49',
          '#fcd116',
          '#ce1126',
          'white',
          'black'
        ],
        area: 214970,
        population: 751000,
        capital: 'Georgetown',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'GYDnotes.png',
        flag: 'Bandera-Guyana.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Cataratas de Kaieteur',
            moreUrl: 'https://pt.wikipedia.org/wiki/Cataratas_de_Kaieteur',
            photo: 'GuyanaKaieteurFalls2004.jpg'
          }
        ]
      },
      {
        key: '002',
        name: 'Guyana Francesa',
        colors: [
          '#078930',
          '#FCDD09',
          '#DA121A',
        ],
        area: 86504,
        population: 209000,
        capital: 'Caiena',
        dependentTerritory: false,
        municipalityTerritory: true,
        currencySample: '',
        flag: '133_french_guiana.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Place des Palmistes',
            moreUrl: 'https://fr.wikipedia.org/wiki/Place_des_Palmistes',
            photo: 'place2.jpg'
          }
        ]
      },
      {
        key: 'FLK',
        name: 'Ilhas Malvinas',
        colors: [
          '#00247d',
          '#cf142b',
          'white',
        ],
        area: 12200,
        population: 3060,
        capital: 'Port Stanley',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Falklands_£2.png',
        flag: 'falkland-islands.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Catedral de Stanley',
            moreUrl: 'https://pt.wikipedia.org/wiki/Catedral_de_Stanley',
            photo: 'WhaleboneArchCathedral.jpg'
          }
        ]
      },
      {
        key: '003',
        name: 'Ilhas da Geórgia do Sul',
        colors: [
          '#00247d',
          '#cf142b',
          'white',
        ],
        area: 4057,
        population: 100,
        capital: 'Ponto Rei Eduardo',
        dependentTerritory: true,
        municipalityTerritory: false,
        currencySample: 'Bank_of_England_£5_reverse.jpg',
        flag: '120_fiji.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Museu de Geórgia do Sul',
            moreUrl: 'https://pt.wikipedia.org/wiki/Museu_de_Geórgia_do_Sul',
            photo: 'Grytviken_museum.jpg'
          }
        ]
      },
      {
        key: 'PRY',
        name: 'Paraguay',
        colors: [
          '#0038a8',
          '#d52b1e',
          'white',
        ],
        area: 406750,
        population: 6100000,
        capital: 'Assunção',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Anverso10000.png',
        flag: 'py-240x240.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Museu Casa da Independência',
            moreUrl: 'https://pt.wikipedia.org/wiki/Museu_Casa_da_Independência',
            photo: 'Asunción_-_Casa_de_la_Independencia.jpg'
          }
        ]
      },
      {
        key: 'PER',
        name: 'Peru',
        colors: [
          '#d91023',
          '#00a854',
          'white',
        ],
        area: 1285220,
        population: 28674757,
        capital: 'Lima',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'Coin_Peru_1_Nuevo_Sol.jpg',
        flag: 'Flag_of_Peru_1825-1950.svg_.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Machu Picchu',
            moreUrl: 'https://pt.wikipedia.org/wiki/Machu_Picchu',
            photo: 'Sunset_across_Machu_Picchu.jpg'
          }
        ]
      },
      {
        key: 'SUR',
        name: 'Suriname',
        colors: [
          '#377e3f',
          '#b40a2d',
          '#ecc81d',
          'white',
        ],
        area: 163270,
        population: 470000,
        capital: 'Paramaribo',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '20surinamedollar.jpg',
        flag: '222_suriname.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Parque Natural Brownsberg',
            moreUrl: 'https://www.expedia.com.br/Parque-Natural-Brownsberg-Brownsweg.d6120888.Guia-de-Viagem',
            photo: '220px-Leo_val_brownsberg.jpg'
          }
        ]
      },
      {
        key: 'URY',
        name: 'Uruguay',
        colors: [
          '#0038a8',
          '#fcd116',
          'white',
        ],
        area: 916445,
        population: 27934783,
        capital: 'Caracas',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: 'URU0092o.jpg',
        flag: 'uruguay-flag-240.jpg',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Praça Independência',
            moreUrl: 'https://pt.wikipedia.org/wiki/Praça_Independência_(Montevidéu)',
            photo: 'PlazaIndependencia2.jpg'
          }
        ]
      },
      {
        key: 'VEN',
        name: 'Venezuela',
        colors: [
          '#cf142b',
          '#00247d',
          '#ffcc00',
          'white',
        ],
        area: 176220,
        population: 3399237,
        capital: 'Montevidéo',
        dependentTerritory: false,
        municipalityTerritory: false,
        currencySample: '1995_20_bolívares_Obverse.jpg',
        flag: '248_download_13.png',
        pointsOfInterest: [
          {
            key: 0,
            name: 'Salto Ángel',
            moreUrl: 'https://pt.wikipedia.org/wiki/Salto_Ángel',
            photo: '1200px-SaltoAngel4.jpg'
          }
        ]
      },
    ];
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.set('Vary', 'Accept-Encoding, X-South-America');
    res.status(200).json(countries);
});
// [END all]
