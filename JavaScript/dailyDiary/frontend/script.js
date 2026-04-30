const body = document.querySelector("body");
const scrollingSection = document.querySelector(".scrollingSection");
const createMemory = document.querySelector(".createMemory");
const memoryBox = document.querySelector(".memoryBox");
const mainTitle = document.querySelector(".main-title");
let isBoxOpen = false;

scrollingSection.addEventListener("scroll", () => {
  const scrollTop = scrollingSection.scrollTop;
  const fadeDistance = 150;
  let opacity = 1 - (scrollTop / fadeDistance);
  if (opacity < 0) opacity = 0;
  if (mainTitle) mainTitle.style.opacity = opacity;
});

const API_URL = 'http://localhost:5000/api';

async function fetchEntries() {
  try {
    const res = await fetch(`${API_URL}/entries`);
    const entries = await res.json();
    scrollingSection.innerHTML = '';
    entries.forEach(renderEntry);
  } catch (err) {
    console.error('Error fetching entries:', err);
  }
}

function renderEntry(entry) {
  const post = document.createElement("div");
  post.classList.add("post");

  const postTitle = document.createElement("h3");
  postTitle.innerText = entry.title;

  const postContent = document.createElement("p");
  postContent.innerText = entry.content;

  const postDate = document.createElement("p");
  postDate.innerText = new Date(entry.date).toLocaleString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  postDate.classList.add("post-date");

  post.append(postTitle, postContent, postDate);
  const randomRotate = getSecureRandom() * 4 - 2;
  post.style.transform = `rotate(${randomRotate}deg)`;
  scrollingSection.append(post);
}

fetchEntries();

const weatherMapping = {
  it: {
    0: "Cielo sereno ☀️",
    1: "Prevalentemente sereno 🌤️",
    2: "Parzialmente nuvoloso ⛅",
    3: "Nuvoloso ☁️",
    45: "Nebbia 🌫️",
    48: "Nebbia con brina 🌫️❄️",
    51: "Pioggerellina leggera 🌦️",
    53: "Pioggerellina moderata 🌦️",
    55: "Pioggerellina intensa 🌦️",
    61: "Pioggia leggera 🌧️",
    63: "Pioggia moderata 🌧️",
    65: "Pioggia forte 🌧️",
    71: "Neve leggera 🌨️",
    73: "Neve moderata 🌨️",
    75: "Neve forte 🌨️",
    80: "Rovesci di pioggia leggeri 🌦️",
    81: "Rovesci di pioggia moderati 🌦️",
    82: "Rovesci di pioggia violenti 🌧️",
    95: "Temporale ⛈️",
  },
  en: {
    0: "Clear sky ☀️",
    1: "Mainly clear 🌤️",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Depositing rime fog 🌫️❄️",
    51: "Light drizzle 🌦️",
    53: "Moderate drizzle 🌦️",
    55: "Dense drizzle 🌦️",
    61: "Slight rain 🌧️",
    63: "Moderate rain 🌧️",
    65: "Heavy rain 🌧️",
    71: "Slight snow fall 🌨️",
    73: "Moderate snow fall 🌨️",
    75: "Heavy snow fall 🌨️",
    80: "Slight rain showers 🌦️",
    81: "Moderate rain showers 🌦️",
    82: "Violent rain showers 🌧️",
    95: "Thunderstorm ⛈️",
  },
  es: {
    0: "Cielo despejado ☀️",
    1: "Mayormente despejado 🌤️",
    2: "Parcialmente nublado ⛅",
    3: "Nublado ☁️",
    45: "Niebla 🌫️",
    48: "Niebla con escarcha 🌫️❄️",
    51: "Llovizna ligera 🌦️",
    53: "Llovizna moderada 🌦️",
    55: "Llovizna intensa 🌦️",
    61: "Lluvia ligera 🌧️",
    63: "Lluvia moderada 🌧️",
    65: "Lluvia fuerte 🌧️",
    71: "Nieve ligera 🌨️",
    73: "Nieve moderada 🌨️",
    75: "Nieve fuerte 🌨️",
    80: "Chubascos ligeros 🌦️",
    81: "Chubascos moderados 🌦️",
    82: "Chubascos violentos 🌧️",
    95: "Tormenta ⛈️",
  },
  fr: {
    0: "Ciel dégagé ☀️",
    1: "Plutôt dégagé 🌤️",
    2: "Partiellement nuageux ⛅",
    3: "Couvert ☁️",
    45: "Brouillard 🌫️",
    48: "Brouillard givrant 🌫️❄️",
    51: "Bruine légère 🌦️",
    53: "Bruine modérée 🌦️",
    55: "Bruine dense 🌦️",
    61: "Pluie légère 🌧️",
    63: "Pluie modérée 🌧️",
    65: "Pluie forte 🌧️",
    71: "Chute de neige légère 🌨️",
    73: "Chute de neige modérée 🌨️",
    75: "Chute de neige forte 🌨️",
    80: "Averses de pluie légères 🌦️",
    81: "Averses de pluie modérées 🌦️",
    82: "Averses de pluie violentes 🌧️",
    95: "Orage ⛈️",
  },
  de: {
    0: "Klarer Himmel ☀️",
    1: "Überwiegend klar 🌤️",
    2: "Teilweise bewölkt ⛅",
    3: "Bedeckt ☁️",
    45: "Nebel 🌫️",
    48: "Raureifnebel 🌫️❄️",
    51: "Leichter Nieselregen 🌦️",
    53: "Mäßiger Nieselregen 🌦️",
    55: "Starker Nieselregen 🌦️",
    61: "Leichter Regen 🌧️",
    63: "Mäßiger Regen 🌧️",
    65: "Starker Regen 🌧️",
    71: "Leichter Schneefall 🌨️",
    73: "Mäßiger Schneefall 🌨️",
    75: "Starker Schneefall 🌨️",
    80: "Leichte Regenschauer 🌦️",
    81: "Mäßige Regenschauer 🌦️",
    82: "Heftige Regenschauer 🌧️",
    95: "Gewitter ⛈️",
  },
  zh: {
    0: "晴朗 ☀️",
    1: "大部晴朗 🌤️",
    2: "局部多云 ⛅",
    3: "阴天 ☁️",
    45: "雾 🌫️",
    48: "雾有霜 🌫️❄️",
    51: "毛毛细雨 🌦️",
    53: "中度细雨 🌦️",
    55: "强度细雨 🌦️",
    61: "小雨 🌧️",
    63: "中雨 🌧️",
    65: "大雨 🌧️",
    71: "小雪 🌨️",
    73: "中雪 🌨️",
    75: "大雪 🌨️",
    80: "阵雨 🌦️",
    81: "中度阵雨 🌦️",
    82: "强阵雨 🌧️",
    95: "雷暴 ⛈️",
  },
  pt: {
    0: "Céu limpo ☀️",
    1: "Predominantemente limpo 🌤️",
    2: "Parcialmente nublado ⛅",
    3: "Encoberto ☁️",
    45: "Nevoeiro 🌫️",
    48: "Nevoeiro com geada 🌫️❄️",
    51: "Chuvisco leve 🌦️",
    53: "Chuvisco moderado 🌦️",
    55: "Chuvisco intenso 🌦️",
    61: "Chuva leve 🌧️",
    63: "Chuva moderada 🌧️",
    65: "Chuva forte 🌧️",
    71: "Neve leve 🌨️",
    73: "Neve moderada 🌨️",
    75: "Neve forte 🌨️",
    80: "Aguaceiros leves 🌦️",
    81: "Aguaceiros moderados 🌦️",
    82: "Aguaceiros violentos 🌧️",
    95: "Trovoada ⛈️",
  },
  ru: {
    0: "Ясно ☀️",
    1: "Преимущественно ясно 🌤️",
    2: "Переменная облачность ⛅",
    3: "Пасмурно ☁️",
    45: "Туман 🌫️",
    48: "Осаждающий иней 🌫️❄️",
    51: "Легкая морось 🌦️",
    53: "Умеренная морось 🌦️",
    55: "Плотная морось 🌦️",
    61: "Небольшой дождь 🌧️",
    63: "Умеренный дождь 🌧️",
    65: "Сильный дождь 🌧️",
    71: "Небольшой снегопад 🌨️",
    73: "Умеренный снегопад 🌨️",
    75: "Сильный снегопад 🌨️",
    80: "Небольшой ливень 🌦️",
    81: "Умеренный ливень 🌦️",
    82: "Сильный ливень 🌧️",
    95: "Гроза ⛈️",
  },
  hi: {
    0: "साफ़ आकाश ☀️",
    1: "मुख्य रूप से साफ़ 🌤️",
    2: "आंशिक रूप से बादल ⛅",
    3: "घने बादल ☁️",
    45: "कोहरा 🌫️",
    48: "पाला वाला कोहरा 🌫️❄️",
    51: "हल्की बूंदाबांदी 🌦️",
    53: "मध्यम बूंदाबांदी 🌦️",
    55: "भारी बूंदाबांदी 🌦️",
    61: "हल्की बारिश 🌧️",
    63: "मध्यम बारिश 🌧️",
    65: "भारी बारिश 🌧️",
    71: "हल्की बर्फबारी 🌨️",
    73: "मध्यम बर्फबारी 🌨️",
    75: "भारी बर्फबारी 🌨️",
    80: "हल्की बौछारें 🌦️",
    81: "मध्यम बौछारें 🌦️",
    82: "भारी बौछारें 🌧️",
    95: "गरज के साथ बौछारें ⛈️",
  },
  ar: {
    0: "سماء صافية ☀️",
    1: "صافٍ غالباً 🌤️",
    2: "غائم جزئياً ⛅",
    3: "غائم كلياً ☁️",
    45: "ضباب 🌫️",
    48: "ضباب صقيعي 🌫️❄️",
    51: "رذاذ خفيف 🌦️",
    53: "رذاذ متوسط 🌦️",
    55: "رذاذ كثيف 🌦️",
    61: "مطر خفيف 🌧️",
    63: "مطر متوسط 🌧️",
    65: "مطر غزير 🌧️",
    71: "تساقط ثلوج خفيف 🌨️",
    73: "تساقط ثلوج متوسط 🌨️",
    75: "تساقط ثلوج كثيف 🌨️",
    80: "زخات مطر خفيفة 🌦️",
    81: "زخات مطر متوسطة 🌦️",
    82: "زخات مطر عنيفة 🌧️",
    95: "عاصفة رعدية ⛈️",
  },
};

function getWeatherDescription(code, lang) {
  const userLangMapping = weatherMapping[lang];
  const fallbackMapping = weatherMapping.en;

  return (
    (userLangMapping && userLangMapping[code]) ||
    fallbackMapping[code] ||
    `Meteo sconosciuto (${code}) ❓`
  );
}

function getSecureRandom() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / (0xffffffff + 1);
}

function getActualTime() {
  const clockElement = document.getElementById("live-clock");
  const hour = new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  clockElement.innerText = hour;
}

setInterval(getActualTime, 1000);

getActualTime();

function getLocation() {
  const locationElement = document.getElementById("location");

  const weatherElement = document.getElementById("weather");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const clientLanguage = navigator.language;

        try {
          const geoRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${clientLanguage}`,
          );
          const geoData = await geoRes.json();

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`,
          );
          const weatherData = await weatherRes.json();

          const temp = weatherData.current_weather.temperature;
          const code = weatherData.current_weather.weathercode;
          const lang = navigator.language.split("-")[0];
          const status = getWeatherDescription(code, lang);

          weatherElement.innerText = `${temp}°C - ${status}`;
          locationElement.innerText = `${geoData.city}, ${geoData.principalSubdivision}, ${geoData.countryName}, ${geoData.continent}`;
        } catch (error) {
          locationElement.innerText = `Pos: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
          weatherElement.innerText = "N/D";
        }
      },
      () => {
        locationElement.innerText = "Accesso posizione negato";
      },
    );
  } else {
    locationElement.innerText = "Geo non supportata";
  }
}

getLocation();

createMemory.addEventListener("click", () => {
  if (isBoxOpen) return;
  isBoxOpen = true;

  const memoryBox = document.createElement("div");
  memoryBox.classList.add("memoryBox");

  const intro = document.createElement("h2");
  intro.innerText = "Caro Diario...";

  const title = document.createElement("input");
  title.placeholder = "Titolo del momento";

  const testo = document.createElement("textarea");
  testo.placeholder = "Cosa è successo oggi?";
  testo.rows = 5;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btnContainer");

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "Fissa il ricordo";
  saveBtn.classList.add("createMemory");

  saveBtn.addEventListener("click", async () => {
    if (title.value === "" || testo.value === "") {
      return;
    } else {
      try {
        const res = await fetch(`${API_URL}/entries`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: title.value, content: testo.value })
        });

        if (res.ok) {
          const newEntry = await res.json();
          // Prepend new entry to UI
          const post = document.createElement("div");
          post.classList.add("post");

          const postTitle = document.createElement("h3");
          postTitle.innerText = newEntry.title;

          const postContent = document.createElement("p");
          postContent.innerText = newEntry.content;

          const postDate = document.createElement("p");
          postDate.innerText = new Date().toLocaleString("it-IT", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });
          postDate.classList.add("post-date");

          post.append(postTitle, postContent, postDate);
          const randomRotate = getSecureRandom() * 4 - 2;
          post.style.transform = `rotate(${randomRotate}deg)`;
          scrollingSection.prepend(post);

          memoryBox.remove();
          isBoxOpen = false;
        }
      } catch (err) {
        console.error('Error saving entry:', err);
      }
    }
  });

  const closeBtn = document.createElement("button");
  closeBtn.innerText = "Annulla";
  closeBtn.classList.add("cancelMemory");

  closeBtn.addEventListener("click", () => {
    memoryBox.remove();
    isBoxOpen = false;
  });

  btnContainer.append(closeBtn, saveBtn);
  memoryBox.append(intro, title, testo, btnContainer);
  body.append(memoryBox);
});
