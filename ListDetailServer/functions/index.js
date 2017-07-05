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
        geography: 'Second in South America only to Brazil in size and population, Argentina is a plain, rising from the Atlantic to the Chilean border and the towering Andes peaks. Aconcagua (22,834 ft, 6,960 m) is the highest peak in the world outside Asia. Argentina is also bordered by Bolivia and Paraguay on the north, and by Uruguay and Brazil on the east. The northern area is the swampy and partly wooded Gran Chaco, bordering Bolivia and Paraguay. South of that are the rolling, fertile Pampas, which are rich in agriculture and sheep- and cattle-grazing and support most of the population. Further south is Patagonia, a region of cool, arid steppes with some wooded and fertile sections.',
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
        geography: 'Aruba, island lying southwest of the Lesser Antilles in the Caribbean Sea, some 50 miles (80 km) northwest of Curaçao and 18 miles (29 km) north of the Venezuelan peninsula of Paraguaná. Aruba was formerly a part of the Netherlands Antilles. In 1986 it became a separate self-governing part of the Kingdom of the Netherlands. Tourists flock to Aruba, attracted by its white-sand beaches in the south and west, rugged coastline in the northeast, and desert environment in the interior. The capital is Oranjestad, which also is the main port.',
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
        geography: 'Landlocked Bolivia is equal in size to California and Texas combined. Brazil forms its eastern border; its other neighbors are Peru and Chile on the west and Argentina and Paraguay on the south. The western part, enclosed by two chains of the Andes, is a great plateau—the Altiplano, with an average altitude of 12,000 ft (3,658 m). Almost half the population lives on the plateau, which contains Oruro, Potosí, and La Paz. At an altitude of 11,910 ft (3,630 m), La Paz is the highest administrative capital city in the world. The Oriente, a lowland region ranging from rain forests to grasslands, comprises the northern and eastern two-thirds of the country. Lake Titicaca, at an altitude of 12,507 ft (3,812 m), is the highest commercially navigable body of water in the world.',
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
        geography: 'Bonaire is located in the southern Caribbean Sea, 50 miles north of Venezuela. It is a crescent shaped island, 24 miles long and three to seven miles wide, covering 112 square miles in total. Bonaire is relatively flat. Most of the southern part is less than six feet above sea level, and the highest point on the island, Brandaris, peaks at only 785 feet. The island is surrounded by coral reefs and has a semi-desert landscape. The entire reef-lined coast of Bonaire is protected as a national park. Most of the beaches are narrow and rocky, but there are some pink sand beaches too. The south of the island features salt flats and mangroves inhabited by pink flamingos. There are two main towns on the island—Kralendijk and Rincon—and only 5 percent of the land is developed.',
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
        geography: 'Brazil’s geography is a fascinating one. As the home of the acclaimed Amazon Rainforest, as well as the Brazilian Highlands and vast stretches of coastline, this South American country continues to impress visitors in its natural splendour and complexity. Brazil has a total surface area of 8 514 877 square kilometres (3 287 612 square miles) of which 8 459 417 square kilometres (3 266 199 square miles) is land and 55 460 square kilometres (or 21 410 square miles) is water. As such, Brazil is the fifth largest country in the world (both in terms of area and population) and occupies almost half of the entire South American continent. The coastline stretches for 7 491 kilometres (or 4 655 miles), and continues to be a major tourist attraction for the country. The shore is made up of mangroves, lagoons, dunes and spectacular coral reefs.',
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
        geography: 'Chile is a long narrow country which extends like a ribbon down the west coast of South America. While the coastline is over 4,000 miles (6,437 kilometers) long, it is only about 61 miles (91 kilometers) wide. The country has suffered from many earthquakes, such as the massive 8.8-magnitude quake that struck the country in February 2010. Cape Horn is the southernmost tip of South America. In the past, ships had to round the horn to sail from Pacific to Atlantic ports and to Europe before the Panama Canal was built. Cape Horn is known for high winds and treacherous waves.',
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
        geography: 'Colombia is nicknamed the "gateway to South America" because it sits in the northwestern part of the continent where South America connects with Central and North America. It is the fifth largest country in Latin America and home to the world\'s second largest population of Spanish-speaking people. Colombia is a land of extremes. Through its center run the towering, snow-covered volcanoes and mountains of the Andes. Tropical beaches line the north and west. And there are deserts in the north and vast grasslands, called Los Llanos, in the east. Dense forests fill Colombia\'s Amazon Basin, which takes up nearly the country\'s entire southern half. In northwest Colombia, a warm, wet, jungle-filled area called the Chocó reaches across the Panama border.',
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
        geography: 'Curaçao, island in the Caribbean Sea and a country within the Kingdom of the Netherlands. It is situated some 37 miles (60 km) north of the coast of Venezuela. Although physiographically part of the South American continental shelf, Curaçao and neighbouring islands off the northern coast of South America are usually considered to constitute the southwestern arc of the Lesser Antilles. The capital is Willemstad.',
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
        geography: 'Ecuador is divided into four regions: the coastal lowlands and mountains areas; the central Andes Mountains and its two major chains (Cordillera Occidental in the west) and the (Cordillera Oriental in the east); the lower mountains that fade into rolling hills and lowlands of the east, and the territory of the Galapagos Islands - officially called the Archipiélago de Colón - located about 1,000 km to the west. The Andes includes over 20 peaks at least 13,779 ft. (4,200 m) in height with most located in the Cordillera Occidental. In addition, there are over 30 peaks that are volcanic in nature, including many active ones. Most rivers in Ecuador rise in the upper elevations of the Andes, flowing east toward the Amazon River, or west into the Pacific Ocean. The most significant include the Babahoyo, Chira, Coca, Curaray, Daule, Esmeraldas, Guayas, Napo, Paztaza, and the Putumayo, on its northeastern border with Colombia.',
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
        geography: 'Guyana can be divided into four main geographical regions; there\'s a narrow and swampy coastal plain, a hillier sandy region in the east; the (15,000 sq km) Rupununi Savannah of the south, and the tropical rain forests and interior highlands - central and west. Guyana\'s mountain ranges include the Pakaraima, Kanuku and Acarai. Many of these relatively low mountains are fronted by steep cliffs; waterfalls are plentiful including the massive Kaieteur Falls. (picture) Kaieteur Falls itself is 251 meters (822 ft) in height and is one of the most powerful waterfalls in the world. It is about five times higher than Niagara Falls, and about two times the height of the Victoria Falls. Guyana is a country replete with rivers; some flow in a northerly direction into the Atlantic Ocean, while those in the western parts of the country generally flow east into the Essequibo. The five main rivers are the Essequibo, Berbice, Corentyne, Cuyun and Demerara. ',
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
        geography: 'Many native American peoples occupied the northern edges of South America for centuries. Then, in 1498, this land was visited by Christopher Columbus, on his second voyage to this New World. As word of his discoveries spread across the European continent, intrepid Dutch and French citizens made the arduous ocean journey to this far away place, and attempted to build settlements at the beginnings of the 16th century. They were hopelessly unprepared for the inhospitable jungle conditions, and many died at the hands of territorial Indians and tropical disease.',
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
        geography: 'The Falkland Islands, an archipelago comprised of two large islands and several hundred smaller ones, are ringed by a rugged coastline, and for the most part are hilly, rocky and covered with low shrubs and coarse grass. Hills and low mountains cover the central areas of both large islands, including the Wickham Heights and Hornsby ranges. Shallow streams, ponds and tiny lakes cover a very small percentage of the land. ',
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
        geography: 'South Georgia rises sheer and stark from the sea, a hundred-mile arc of dark Antarctic peaks, ice fields, and hanging glaciers. From the deck of a ship, the island makes a startling apparition, like the Himalaya just emerged from the Flood. For a polar outpost so solid and austere, covered half by permanent snow and ice and half by bare rock and tundralike vegetation, South Georgia is strangely chimerical. Its meanings are contrary and elusive. Its moods are mercurial, brightening one moment, darkening and spitting sleet the next, then brightening again. The island seems marked in some unusual way, simultaneously favored and cursed. Few spots on Earth are so full of ambiguity and paradox.',
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
        geography: 'Paraguay is landlocked and crisscrossed by many rivers. The three largest - the Paraguay, Parana and Pilcomayo - form over 75% of the country\'s borders. Two major regions divide the country; the Paranena, east of the Paraquay River, is a fertile, cultivated landscape, with rolling hills, low mountains and subtropical forests. To the west of the Paraguay River, the hot scrub lands and low plains of the Chaco cover about 60% of Paraguay\'s total land area.',
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
        geography: 'Peru is an extremely diverse country, with 11 ecological regions and 84 of the world’s 117 different types of “life zone”. It has a huge variety of scenery thanks to its geography, which also provides it with a wide range of natural resources. The country has 3 main regions according to the traditional method of dividing the country by altitude: coast, mountains and jungle.',
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
        geography: 'Suriname can be divided into two main geographic regions; the coastal lowlands of the north, and the tropical rainforests and savanna of the west and south. A few small mountain ranges disect the fertile land, with the De Hann and Van Asch Van Wijck the most significant. Suriname is home to the WJ van Bloomenstein Lake, one of the largest reservoir lakes on the planet; created by a river dam, it provides hydro power for many of the country\'s industries. Almost 14% of Suriname is allocated to a series of National Parks (NP) and Nature Reserves (NR). Suriname is a land of rivers, and major ones include the Coppename, Corantyne, Gran, Lucie, Marowijne and Saramacca.',
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
        geography: 'The eastern, southern and western plains in Uruguay eventually flow into the rolling hills and low mountains of the interior. In the southwest, the flat lowlands between the coastline and hills (Littoral) merge more gradually into the hilly interior. Along the Atlantic, near Montevideo, sandy beaches ring the coastline. In the east - from Punta del Este to Cabo Polonio - the coastal plain is sandy, marshy, and broken by a few bays and lagoons. In the north, a series of low mountains run north into the highlands of Brazil. In the east, a narrow band of low mountains extends from the coastal areas through Treinta y Tres.',
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
        geography: 'Venezuela, country located at the northern end of South America. It occupies a roughly triangular area that is larger than the combined areas of France and Germany. Venezuela is bounded by the Caribbean Sea and the Atlantic Ocean to the north, Guyana to the east, Brazil to the south, and Colombia to the southwest and west. The national capital, Caracas, is Venezuela’s primary centre of industry, commerce, education, and tourism.',
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
