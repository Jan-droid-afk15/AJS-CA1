//File requires code from DB.js and .env to connect to my cluster in mongoDB.
const mongoose = require('mongoose');
const Internet = require('./models/internet_schema');
require('dotenv').config();
require('./utils/db.js')();

const connect = async () => {
  let db = null;

  try {
      await mongoose.connect(process.env.DB_ATLAS_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });

      console.log("Connected successfully to db");
      db = mongoose.connection;
  }
  catch(error) {
      console.log(error);
  }
  finally {
      if(db !== null && db.readyState === 1) {
          // await db.close();
          // console.log("Disconnected successfully from db");
      }
  }
};

/*Function used to seed the database, 
contains the whole json array from my dataset*/

const seedInternets = [
    {
      "country": "Monaco",
      "broadband": 261.82,
      "mobile": ""
    },
    {
      "country": "Singapore",
      "broadband": 255.83,
      "mobile": 105.01
    },
    {
      "country": "Hong Kong",
      "broadband": 254.7,
      "mobile": 83.58
    },
    {
      "country": "Romania",
      "broadband": 232.17,
      "mobile": 59.67
    },
    {
      "country": "Switzerland",
      "broadband": 229.96,
      "mobile": 135.7
    },
    {
      "country": "Denmark",
      "broadband": 227.91,
      "mobile": 112.03
    },
    {
      "country": "Thailand",
      "broadband": 225.17,
      "mobile": 56.9
    },
    {
      "country": "Chile",
      "broadband": 217.6,
      "mobile": 21.23
    },
    {
      "country": "France",
      "broadband": 214.04,
      "mobile": 86.51
    },
    {
      "country": "South Korea",
      "broadband": 212.57,
      "mobile": 202.61
    },
    {
      "country": "Hungary",
      "broadband": 210.55,
      "mobile": 60.16
    },
    {
      "country": "Liechtenstein",
      "broadband": 204.78,
      "mobile": ""
    },
    {
      "country": "United States",
      "broadband": 203.81,
      "mobile": 110.07
    },
    {
      "country": "Spain",
      "broadband": 201.47,
      "mobile": 61.62
    },
    {
      "country": "China",
      "broadband": 196.57,
      "mobile": 165.38
    },
    {
      "country": "United Arab Emirates",
      "broadband": 189.07,
      "mobile": 238.06
    },
    {
      "country": "Canada",
      "broadband": 183.81,
      "mobile": 95.78
    },
    {
      "country": "Macau",
      "broadband": 178.9,
      "mobile": 62.31
    },
    {
      "country": "Japan",
      "broadband": 178.76,
      "mobile": 69.02
    },
    {
      "country": "Sweden",
      "broadband": 174.9,
      "mobile": 103.08
    },
    {
      "country": "Luxembourg",
      "broadband": 172.05,
      "mobile": 116.76
    },
    {
      "country": "Andorra",
      "broadband": 171.44,
      "mobile": ""
    },
    {
      "country": "New Zealand",
      "broadband": 170.51,
      "mobile": 75.91
    },
    {
      "country": "Norway",
      "broadband": 168.25,
      "mobile": 177.72
    },
    {
      "country": "Netherlands",
      "broadband": 165,
      "mobile": 106.98
    },
    {
      "country": "Israel",
      "broadband": 162.66,
      "mobile": 48.3
    },
    {
      "country": "Portugal",
      "broadband": 162.55,
      "mobile": 59.91
    },
    {
      "country": "Poland",
      "broadband": 156.33,
      "mobile": 57.23
    },
    {
      "country": "Moldova",
      "broadband": 154.56,
      "mobile": 42.99
    },
    {
      "country": "Taiwan",
      "broadband": 152.01,
      "mobile": 95.51
    },
    {
      "country": "Kuwait",
      "broadband": 149.37,
      "mobile": 157.18
    },
    {
      "country": "Lithuania",
      "broadband": 147.05,
      "mobile": 66.25
    },
    {
      "country": "Malta",
      "broadband": 144.06,
      "mobile": 70.73
    },
    {
      "country": "Panama",
      "broadband": 137.38,
      "mobile": 20.44
    },
    {
      "country": "Germany",
      "broadband": 136.66,
      "mobile": 83.06
    },
    {
      "country": "Latvia",
      "broadband": 135.22,
      "mobile": 50.07
    },
    {
      "country": "Finland",
      "broadband": 135.05,
      "mobile": 88.23
    },
    {
      "country": "Belgium",
      "broadband": 125.12,
      "mobile": 69.76
    },
    {
      "country": "Ireland",
      "broadband": 122.55,
      "mobile": 62.66
    },
    {
      "country": "San Marino",
      "broadband": 121.4,
      "mobile": ""
    },
    {
      "country": "Slovenia",
      "broadband": 115.61,
      "mobile": 74.84
    },
    {
      "country": "Slovakia",
      "broadband": 115.11,
      "mobile": 56.01
    },
    {
      "country": "Qatar",
      "broadband": 113.88,
      "mobile": 172.18
    },
    {
      "country": "Brazil",
      "broadband": 113.09,
      "mobile": 33.92
    },
    {
      "country": "Barbados",
      "broadband": 109.41,
      "mobile": ""
    },
    {
      "country": "Malaysia",
      "broadband": 107.55,
      "mobile": 31.34
    },
    {
      "country": "Italy",
      "broadband": 104.09,
      "mobile": 55.41
    },
    {
      "country": "United Kingdom",
      "broadband": 102.24,
      "mobile": 86.56
    },
    {
      "country": "Russia",
      "broadband": 95.96,
      "mobile": 28.99
    },
    {
      "country": "Saudi Arabia",
      "broadband": 94.64,
      "mobile": 155.97
    },
    {
      "country": "Austria",
      "broadband": 94.31,
      "mobile": 71.81
    },
    {
      "country": "Estonia",
      "broadband": 88.49,
      "mobile": 75.29
    },
    {
      "country": "Serbia",
      "broadband": 86.77,
      "mobile": 53.82
    },
    {
      "country": "Bulgaria",
      "broadband": 86.75,
      "mobile": 142.27
    },
    {
      "country": "Trinidad and Tobago",
      "broadband": 85.8,
      "mobile": 41.12
    },
    {
      "country": "Jordan",
      "broadband": 84.12,
      "mobile": 27.61
    },
    {
      "country": "Australia",
      "broadband": 82.73,
      "mobile": 135.3
    },
    {
      "country": "Vietnam",
      "broadband": 78.34,
      "mobile": 43.32
    },
    {
      "country": "Ukraine",
      "broadband": 76.82,
      "mobile": 31.95
    },
    {
      "country": "Bahrain",
      "broadband": 73.95,
      "mobile": 86.04
    },
    {
      "country": "Paraguay",
      "broadband": 72.5,
      "mobile": 20.65
    },
    {
      "country": "Colombia",
      "broadband": 72.19,
      "mobile": 18.33
    },
    {
      "country": "Philippines",
      "broadband": 71.85,
      "mobile": 35.03
    },
    {
      "country": "Uruguay",
      "broadband": 69.91,
      "mobile": 38.08
    },
    {
      "country": "Belarus",
      "broadband": 69.41,
      "mobile": 19.41
    },
    {
      "country": "Croatia",
      "broadband": 69.09,
      "mobile": 114.76
    },
    {
      "country": "Oman",
      "broadband": 68.28,
      "mobile": 91.21
    },
    {
      "country": "Guyana",
      "broadband": 65.93,
      "mobile": ""
    },
    {
      "country": "India",
      "broadband": 64.03,
      "mobile": 17.89
    },
    {
      "country": "Kazakhstan",
      "broadband": 63.28,
      "mobile": 31.74
    },
    {
      "country": "Bahamas",
      "broadband": 61.75,
      "mobile": ""
    },
    {
      "country": "Montenegro",
      "broadband": 60.03,
      "mobile": 44.48
    },
    {
      "country": "Argentina",
      "broadband": 58.87,
      "mobile": 29.77
    },
    {
      "country": "Peru",
      "broadband": 58.73,
      "mobile": 24.82
    },
    {
      "country": "Grenada",
      "broadband": 57.07,
      "mobile": ""
    },
    {
      "country": "Costa Rica",
      "broadband": 56.39,
      "mobile": 34.01
    },
    {
      "country": "Cyprus",
      "broadband": 55.11,
      "mobile": 144.64
    },
    {
      "country": "Mexico",
      "broadband": 54.88,
      "mobile": 34.33
    },
    {
      "country": "South Africa",
      "broadband": 54.75,
      "mobile": 52.19
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "broadband": 53.77,
      "mobile": ""
    },
    {
      "country": "Mongolia",
      "broadband": 53.53,
      "mobile": 21.34
    },
    {
      "country": "Saint Lucia",
      "broadband": 52.3,
      "mobile": ""
    },
    {
      "country": "Ghana",
      "broadband": 52.1,
      "mobile": 12.9
    },
    {
      "country": "Kyrgyzstan",
      "broadband": 51.07,
      "mobile": 24.71
    },
    {
      "country": "Bosnia and Herzegovina",
      "broadband": 48.51,
      "mobile": 36.61
    },
    {
      "country": "Laos",
      "broadband": 48.16,
      "mobile": 30.93
    },
    {
      "country": "Uzbekistan",
      "broadband": 45.88,
      "mobile": 19.29
    },
    {
      "country": "Albania",
      "broadband": 45.55,
      "mobile": 61.56
    },
    {
      "country": "Turkey",
      "broadband": 43.48,
      "mobile": 48.85
    },
    {
      "country": "North Macedonia",
      "broadband": 43.24,
      "mobile": 64.02
    },
    {
      "country": "Madagascar",
      "broadband": 42.84,
      "mobile": ""
    },
    {
      "country": "Ivory Coast",
      "broadband": 40.64,
      "mobile": 18.36
    },
    {
      "country": "Belize",
      "broadband": 40.62,
      "mobile": ""
    },
    {
      "country": "Bangladesh",
      "broadband": 40.31,
      "mobile": 13.43
    },
    {
      "country": "Egypt",
      "broadband": 39.97,
      "mobile": 24.95
    },
    {
      "country": "Mauritius",
      "broadband": 39.85,
      "mobile": 30.28
    },
    {
      "country": "Greece",
      "broadband": 39.08,
      "mobile": 92.54
    },
    {
      "country": "Ecuador",
      "broadband": 39.07,
      "mobile": 24.62
    },
    {
      "country": "Armenia",
      "broadband": 38.95,
      "mobile": 34.53
    },
    {
      "country": "Jamaica",
      "broadband": 37.84,
      "mobile": 44.23
    },
    {
      "country": "Tajikistan",
      "broadband": 35.45,
      "mobile": 16.15
    },
    {
      "country": "Saint Kitts and Nevis",
      "broadband": 35.45,
      "mobile": ""
    },
    {
      "country": "Senegal",
      "broadband": 35.01,
      "mobile": 23.59
    },
    {
      "country": "Dominica",
      "broadband": 34.9,
      "mobile": ""
    },
    {
      "country": "Brunei",
      "broadband": 34.59,
      "mobile": 67.32
    },
    {
      "country": "Nepal",
      "broadband": 33.87,
      "mobile": 22.39
    },
    {
      "country": "Dominican Republic",
      "broadband": 32.26,
      "mobile": 31.45
    },
    {
      "country": "Iraq",
      "broadband": 31.66,
      "mobile": 42.33
    },
    {
      "country": "Marshall Islands",
      "broadband": 31.64,
      "mobile": ""
    },
    {
      "country": "Nicaragua",
      "broadband": 29.94,
      "mobile": 26.59
    },
    {
      "country": "Palestine",
      "broadband": 29.46,
      "mobile": 7.57
    },
    {
      "country": "Georgia",
      "broadband": 28.61,
      "mobile": 39.84
    },
    {
      "country": "Cambodia",
      "broadband": 28.32,
      "mobile": 23.75
    },
    {
      "country": "Indonesia",
      "broadband": 27.83,
      "mobile": 23.12
    },
    {
      "country": "Bolivia",
      "broadband": 27.8,
      "mobile": 22.57
    },
    {
      "country": "Maldives",
      "broadband": 27.42,
      "mobile": 66.9
    },
    {
      "country": "Morocco",
      "broadband": 27.21,
      "mobile": 39.52
    },
    {
      "country": "El Salvador",
      "broadband": 27.04,
      "mobile": 26.85
    },
    {
      "country": "Cape Verde",
      "broadband": 26.94,
      "mobile": ""
    },
    {
      "country": "Honduras",
      "broadband": 26.93,
      "mobile": 30.84
    },
    {
      "country": "Rwanda",
      "broadband": 26.26,
      "mobile": ""
    },
    {
      "country": "Sri Lanka",
      "broadband": 26.08,
      "mobile": 16.58
    },
    {
      "country": "Liberia",
      "broadband": 25.68,
      "mobile": ""
    },
    {
      "country": "Burkina Faso",
      "broadband": 25.54,
      "mobile": ""
    },
    {
      "country": "Azerbaijan",
      "broadband": 25.1,
      "mobile": 40.69
    },
    {
      "country": "Seychelles",
      "broadband": 24.9,
      "mobile": ""
    },
    {
      "country": "Bhutan",
      "broadband": 24.76,
      "mobile": ""
    },
    {
      "country": "Lesotho",
      "broadband": 24.64,
      "mobile": ""
    },
    {
      "country": "Venezuela",
      "broadband": 23.92,
      "mobile": 7.68
    },
    {
      "country": "Guatemala",
      "broadband": 23.72,
      "mobile": 29.69
    },
    {
      "country": "Western Sahara",
      "broadband": 23.02,
      "mobile": ""
    },
    {
      "country": "Micronesia",
      "broadband": 22.54,
      "mobile": ""
    },
    {
      "country": "Gabon",
      "broadband": 22.5,
      "mobile": ""
    },
    {
      "country": "Iran",
      "broadband": 21.36,
      "mobile": 35.48
    },
    {
      "country": "Antigua and Barbuda",
      "broadband": 21.24,
      "mobile": ""
    },
    {
      "country": "Mali",
      "broadband": 20.82,
      "mobile": 29.79
    },
    {
      "country": "Togo",
      "broadband": 20.76,
      "mobile": 36.08
    },
    {
      "country": "Fiji",
      "broadband": 20.76,
      "mobile": 28.51
    },
    {
      "country": "Myanmar",
      "broadband": 20.69,
      "mobile": 28.19
    },
    {
      "country": "Haiti",
      "broadband": 20.67,
      "mobile": 19.71
    },
    {
      "country": "Tanzania",
      "broadband": 19.77,
      "mobile": 13.23
    },
    {
      "country": "Namibia",
      "broadband": 19.58,
      "mobile": 23.18
    },
    {
      "country": "Kenya",
      "broadband": 19.35,
      "mobile": 22.14
    },
    {
      "country": "Somalia",
      "broadband": 18.98,
      "mobile": 14.74
    },
    {
      "country": "Djibouti",
      "broadband": 18.27,
      "mobile": ""
    },
    {
      "country": "Lebanon",
      "broadband": 18.22,
      "mobile": 32.64
    },
    {
      "country": "Zimbabwe",
      "broadband": 17.81,
      "mobile": ""
    },
    {
      "country": "Nigeria",
      "broadband": 17.65,
      "mobile": 24.74
    },
    {
      "country": "Zambia",
      "broadband": 17.24,
      "mobile": 18.98
    },
    {
      "country": "Benin",
      "broadband": 16.23,
      "mobile": ""
    },
    {
      "country": "Vanuatu",
      "broadband": 16.18,
      "mobile": ""
    },
    {
      "country": "Libya",
      "broadband": 16.12,
      "mobile": 16.03
    },
    {
      "country": "Suriname",
      "broadband": 15.93,
      "mobile": 42.97
    },
    {
      "country": "Angola",
      "broadband": 14.86,
      "mobile": 25.87
    },
    {
      "country": "Ethiopia",
      "broadband": 14.17,
      "mobile": 26.17
    },
    {
      "country": "Cameroon",
      "broadband": 13.94,
      "mobile": 31.18
    },
    {
      "country": "Pakistan",
      "broadband": 13.84,
      "mobile": 19.82
    },
    {
      "country": "Papua New Guinea",
      "broadband": 13.68,
      "mobile": ""
    },
    {
      "country": "Sierra Leone",
      "broadband": 13.56,
      "mobile": ""
    },
    {
      "country": "Uganda",
      "broadband": 13.55,
      "mobile": 19.02
    },
    {
      "country": "Syria",
      "broadband": 12.72,
      "mobile": 19.21
    },
    {
      "country": "Malawi",
      "broadband": 12.7,
      "mobile": ""
    },
    {
      "country": "Gambia",
      "broadband": 12.24,
      "mobile": ""
    },
    {
      "country": "Niger",
      "broadband": 11.68,
      "mobile": ""
    },
    {
      "country": "Mauritania",
      "broadband": 11.55,
      "mobile": 19.96
    },
    {
      "country": "Botswana",
      "broadband": 11.21,
      "mobile": ""
    },
    {
      "country": "Burundi",
      "broadband": 11.18,
      "mobile": ""
    },
    {
      "country": "Tunisia",
      "broadband": 11.13,
      "mobile": 35.57
    },
    {
      "country": "Algeria",
      "broadband": 10.43,
      "mobile": 18.1
    },
    {
      "country": "Mozambique",
      "broadband": 9.27,
      "mobile": 25.02
    },
    {
      "country": "Guinea",
      "broadband": 8.84,
      "mobile": ""
    },
    {
      "country": "Afghanistan",
      "broadband": 8.26,
      "mobile": 7.27
    },
    {
      "country": "Equatorial Guinea",
      "broadband": 7.95,
      "mobile": ""
    },
    {
      "country": "Sudan",
      "broadband": 7.92,
      "mobile": 14.51
    },
    {
      "country": "Yemen",
      "broadband": 7.59,
      "mobile": ""
    },
    {
      "country": "Turkmenistan",
      "broadband": 4.11,
      "mobile": ""
    },
    {
      "country": "Cuba",
      "broadband": 4.01,
      "mobile": 25.02
    }
  ];

  /*Seeds the Database asynchronously, 
  deletes existing records first then replaces them by inserting new records.*/

  const seedDB = async () => {
    await Internet.deleteMany({});
    await Internet.insertMany(seedInternets);
  };
//Closes connection with DB
seedDB().then(() => {
    mongoose.connection.close();
});

module.exports = connect;