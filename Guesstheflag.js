const flags = [
  // Existing entries
  {
    country: "Algeria",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
  },
  {
    country: "Canada",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    country: "France",
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    country: "Germany",
    src: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    country: "Japan",
    src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
  {
    country: "United States",
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    country: "United Kingdom",
    src: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    country: "India",
    src: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    country: "Brazil",
    src: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  },
  {
    country: "China",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
  },
  {
    country: "Iran",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Iran_%28official%29.svg",
  },

  // European countries
  {
    country: "Albania",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
  },
  {
    country: "Andorra",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
  },
  {
    country: "Armenia",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_Armenia.svg",
  },
  {
    country: "Austria",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
  },
  {
    country: "Azerbaijan",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
  },
  {
    country: "Belarus",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Belarus.svg",
  },
  {
    country: "Belgium",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
  },
  {
    country: "Bosnia and Herzegovina",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Bosnia_and_Herzegovina.svg",
  },
  {
    country: "Bulgaria",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
  },
  {
    country: "Croatia",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
  },
  {
    country: "Cyprus",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
  },
  {
    country: "Czech Republic",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
  },
  {
    country: "Denmark",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
  },
  {
    country: "Estonia",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
  },
  {
    country: "Finland",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  },
  {
    country: "Greece",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
  },
  {
    country: "Hungary",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Hungary.svg",
  },
  {
    country: "Iceland",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Iceland.svg",
  },
  {
    country: "Ireland",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    country: "Italy",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  },
  {
    country: "Kazakhstan",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Kazakhstan.svg",
  },
  {
    country: "Kosovo",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_Kosovo.svg",
  },
  {
    country: "Latvia",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
  },
  {
    country: "Liechtenstein",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Liechtenstein.svg",
  },
  {
    country: "Lithuania",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Lithuania.svg",
  },
  {
    country: "Luxembourg",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
  },
  {
    country: "Malta",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Malta.svg",
  },
  {
    country: "Moldova",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
  },
  {
    country: "Monaco",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_Monaco.svg",
  },
  {
    country: "Montenegro",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag_of_Montenegro.svg",
  },
  {
    country: "Netherlands",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    country: "North Macedonia",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_North_Macedonia.svg",
  },
  {
    country: "Norway",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    country: "Poland",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
  },
  {
    country: "Portugal",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    country: "Romania",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  },
  {
    country: "Russia",
    src: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
  },
  {
    country: "San Marino",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_San_Marino.svg",
  },
  {
    country: "Serbia",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Serbia.svg",
  },
  {
    country: "Slovakia",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Slovakia.svg",
  },
  {
    country: "Slovenia",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
  },
  {
    country: "Spain",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    country: "Sweden",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
  },
  {
    country: "Switzerland",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Switzerland.svg",
  },
  {
    country: "Turkey",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    country: "Ukraine",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    country: "Vatican City",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_Vatican_City.svg",
  },

  // List of all other countries
  {
    country: "Afghanistan",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Afghanistan.svg",
  },
  {
    country: "Angola",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
  },
  {
    country: "Antigua and Barbuda",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Antigua_and_Barbuda.svg",
  },
  {
    country: "Argentina",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
  },
  {
    country: "Australia",
    src: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
  },
  {
    country: "Bahamas",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
  },
  {
    country: "Bahrain",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
  },
  {
    country: "Barbados",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Barbados.svg",
  },
  {
    country: "Belize",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Belize.svg",
  },
  {
    country: "Benin",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
  },
  {
    country: "Bhutan",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_Bhutan.svg",
  },
  {
    country: "Bolivia",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
  },
  {
    country: "Botswana",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Botswana.svg",
  },
  {
    country: "Brunei",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
  },
  {
    country: "Burkina Faso",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Burkina_Faso.svg",
  },
  {
    country: "Burundi",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
  },
  {
    country: "Cabo Verde",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cabo_Verde.svg",
  },
  {
    country: "Cambodia",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
  },
  {
    country: "Cameroon",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
  },
  {
    country: "Central African Republic",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Central_African_Republic.svg",
  },
  {
    country: "Chad",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
  },
  {
    country: "Comoros",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Comoros.svg",
  },
  {
    country: "Congo",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_the_Republic_of_the_Congo.svg",
  },
  {
    country: "Costa Rica",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Costa_Rica.svg",
  },
  {
    country: "Cuba",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flag_of_Cuba.svg",
  },
  {
    country: "Djibouti",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Djibouti.svg",
  },
  {
    country: "Dominica",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Dominica.svg",
  },
  {
    country: "Dominican Republic",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_Dominican_Republic.svg",
  },
  {
    country: "East Timor",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_East_Timor.svg",
  },
  {
    country: "Ecuador",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Flag_of_Ecuador.svg",
  },
  {
    country: "Egypt",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Egypt.svg",
  },
  {
    country: "El Salvador",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_El_Salvador.svg",
  },
  {
    country: "Equatorial Guinea",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
  },
  {
    country: "Eritrea",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
  },
  {
    country: "Estonia",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
  },
  {
    country: "Eswatini",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Eswatini.svg",
  },
  {
    country: "Ethiopia",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Ethiopia.svg",
  },
  {
    country: "Fiji",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Fiji.svg",
  },
  {
    country: "Gabon",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gabon.svg",
  },
  {
    country: "Gambia",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Gambia.svg",
  },
  {
    country: "Georgia",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Georgia.svg",
  },
  {
    country: "Ghana",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
  },
  {
    country: "Grenada",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Grenada.svg",
  },
  {
    country: "Guatemala",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Guatemala.svg",
  },
  {
    country: "Guinea",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Guinea.svg",
  },
  {
    country: "Guinea-Bissau",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Guinea-Bissau.svg",
  },
  {
    country: "Guyana",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
  },
  {
    country: "Haiti",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Haiti.svg",
  },
  {
    country: "Honduras",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
  },
  {
    country: "Hungary",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Hungary.svg",
  },
  {
    country: "Iceland",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Flag_of_Iceland.svg",
  },
  {
    country: "Indonesia",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
  },
  {
    country: "Iran",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Iran_%28official%29.svg",
  },
  {
    country: "Iraq",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
  },
  {
    country: "Ireland",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
  {
    country: "Israel",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
  },
  {
    country: "Italy",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
  },
  {
    country: "Jamaica",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Flag_of_Jamaica.svg",
  },
  {
    country: "Jordan",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
  },
  {
    country: "Kazakhstan",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Kazakhstan.svg",
  },
  {
    country: "Kenya",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
  },
  {
    country: "Kiribati",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Kiribati.svg",
  },
  {
    country: "Kuwait",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Kuwait.svg",
  },
  {
    country: "Kyrgyzstan",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
  },
  {
    country: "Laos",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
  },
  {
    country: "Latvia",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
  },
  {
    country: "Lebanon",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
  },
  {
    country: "Lesotho",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Lesotho.svg",
  },
  {
    country: "Liberia",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
  },
  {
    country: "Libya",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
  },
  {
    country: "Liechtenstein",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Liechtenstein.svg",
  },
  {
    country: "Lithuania",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Lithuania.svg",
  },
  {
    country: "Luxembourg",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
  },
  {
    country: "Madagascar",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
  },
  {
    country: "Malawi",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Malawi.svg",
  },
  {
    country: "Malaysia",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  },
  {
    country: "Maldives",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Maldives.svg",
  },
  {
    country: "Mali",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Mali.svg",
  },
  {
    country: "Malta",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Malta.svg",
  },
  {
    country: "Marshall Islands",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Marshall_Islands.svg",
  },
  {
    country: "Mauritania",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
  },
  {
    country: "Mauritius",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
  },
  {
    country: "Mexico",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Mexico.svg",
  },
  {
    country: "Micronesia",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Federated_States_of_Micronesia.svg",
  },
  {
    country: "Moldova",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
  },
  {
    country: "Monaco",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_Monaco.svg",
  },
  {
    country: "Mongolia",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
  },
  {
    country: "Montenegro",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag_of_Montenegro.svg",
  },
  {
    country: "Morocco",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
  },
  {
    country: "Mozambique",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Mozambique.svg",
  },
  {
    country: "Myanmar",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
  },
  {
    country: "Namibia",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
  },
  {
    country: "Nauru",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
  },
  {
    country: "Nepal",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
  },
  {
    country: "Netherlands",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    country: "New Zealand",
    src: "https://upload.wikimedia.org/wikipedia/en/3/3d/Flag_of_New_Zealand.svg",
  },
  {
    country: "Nicaragua",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Nicaragua.svg",
  },
  {
    country: "Niger",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Niger.svg",
  },
  {
    country: "Nigeria",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
  },
  {
    country: "North Korea",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg",
  },
  {
    country: "North Macedonia",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_North_Macedonia.svg",
  },
  {
    country: "Norway",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    country: "Oman",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
  },
  {
    country: "Pakistan",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
  },
  {
    country: "Palau",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Palau.svg",
  },
  {
    country: "Panama",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_Panama.svg",
  },
  {
    country: "Papua New Guinea",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Papua_New_Guinea.svg",
  },
  {
    country: "Paraguay",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Paraguay.svg",
  },
  {
    country: "Peru",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
  },
  {
    country: "Philippines",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
  },
  {
    country: "Poland",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
  },
  {
    country: "Portugal",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
  },
  {
    country: "Qatar",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
  },
  {
    country: "Romania",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
  },
  {
    country: "Russia",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
  },
  {
    country: "Rwanda",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
  },
  {
    country: "Saint Kitts and Nevis",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Saint_Kitts_and_Nevis.svg",
  },
  {
    country: "Saint Lucia",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
  },
  {
    country: "Saint Vincent and the Grenadines",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
  },
  {
    country: "Samoa",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Samoa.svg",
  },
  {
    country: "San Marino",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_San_Marino.svg",
  },
  {
    country: "Sao Tome and Principe",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Flag_of_Sao_Tome_and_Principe.svg",
  },
  {
    country: "Saudi Arabia",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Saudi_Arabia.svg",
  },
  {
    country: "Senegal",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
  },
  {
    country: "Serbia",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Serbia.svg",
  },
  {
    country: "Seychelles",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_Seychelles.svg",
  },
  {
    country: "Sierra Leone",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
  },
  {
    country: "Singapore",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Singapore.svg",
  },
  {
    country: "Slovakia",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Slovakia.svg",
  },
  {
    country: "Slovenia",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
  },
  {
    country: "Solomon Islands",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_the_Solomon_Islands.svg",
  },
  {
    country: "Somalia",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
  },
  {
    country: "South Africa",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_South_Africa.svg",
  },
  {
    country: "South Sudan",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_South_Sudan.svg",
  },
  {
    country: "Spain",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
  },
  {
    country: "Sri Lanka",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
  },
  {
    country: "Sudan",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
  },
  {
    country: "Suriname",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
  },
  {
    country: "Sweden",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
  },
  {
    country: "Switzerland",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Switzerland.svg",
  },
  {
    country: "Syria",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
  },
  {
    country: "Taiwan",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Taiwan.svg",
  },
  {
    country: "Tajikistan",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Flag_of_Tajikistan.svg",
  },
  {
    country: "Tanzania",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flag_of_Tanzania.svg",
  },
  {
    country: "Thailand",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
  },
  {
    country: "Togo",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Togo.svg",
  },
  {
    country: "Tonga",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
  },
  {
    country: "Trinidad and Tobago",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
  },
  {
    country: "Tunisia",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Flag_of_Tunisia.svg",
  },
  {
    country: "Turkey",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
  },
  {
    country: "Turkmenistan",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Flag_of_Turkmenistan.svg",
  },
  {
    country: "Tuvalu",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Tuvalu.svg",
  },
  {
    country: "Uganda",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Uganda.svg",
  },
  {
    country: "Ukraine",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
  },
  {
    country: "United Arab Emirates",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    country: "United Kingdom",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_Kingdom.svg",
  },
  {
    country: "United States",
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    country: "Uruguay",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Uruguay.svg",
  },
  {
    country: "Uzbekistan",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Uzbekistan.svg",
  },
  {
    country: "Vanuatu",
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Vanuatu.svg",
  },
  {
    country: "Vatican City",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Vatican_City.svg",
  },
  {
    country: "Venezuela",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
  },
  {
    country: "Vietnam",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
  },
  {
    country: "Yemen",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Yemen.svg",
  },
  {
    country: "Zambia",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Zambia.svg",
  },
  {
    country: "Zimbabwe",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
  },
];

let currentFlagIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  loadFlag();
});

function loadFlag() {
  if (currentFlagIndex < flags.length) {
    document.getElementById("flag-img").src = flags[currentFlagIndex].src;
    document.getElementById("guess-input").value = "";
    document.getElementById("result").textContent = "";
  } else {
    document.getElementById("flag-img").src = "";
    document.getElementById("result").textContent =
      "Game over! Your final score is " + score;
    document.getElementById("guess-input").disabled = true;
    document.querySelector("button").disabled = true;
  }
}

function checkGuess() {
  const guess = document.getElementById("guess-input").value.trim();
  const result = document.getElementById("result");

  if (guess.toLowerCase() === flags[currentFlagIndex].country.toLowerCase()) {
    result.textContent = "Correct!";
    score++;
  } else {
    result.textContent =
      "Wrong! The correct answer was " + flags[currentFlagIndex].country;
  }

  document.getElementById("score").textContent = score;
  currentFlagIndex++;
  setTimeout(loadFlag, 1000);
}
