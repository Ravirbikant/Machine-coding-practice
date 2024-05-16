const searchInput = document.getElementById("search-input");
const results = document.getElementById("autocomplete-results");

const dataBase = [
  "Sachin Tendulkar",
  "Rahul Dravid",
  "Sourav Ganguly",
  "Virender Sehwag",
  "Anil Kumble",
  "VVS Laxman",
  "Harbhajan Singh",
  "Zaheer Khan",
  "MS Dhoni",
  "Yuvraj Singh",
  "Gautam Gambhir",
  "Virat Kohli",
  "Ravichandran Ashwin",
  "Ajinkya Rahane",
  "Rohit Sharma",
  "Shikhar Dhawan",
  "Suresh Raina",
  "Ravindra Jadeja",
  "Ishant Sharma",
  "Mohammed Shami",
  "Umesh Yadav",
  "Praveen Kumar",
  "Amit Mishra",
  "Ashish Nehra",
  "Piyush Chawla",
  "Munaf Patel",
  "Murali Vijay",
  "Dinesh Karthik",
  "Bhuvneshwar Kumar",
  "Rahul Sharma",
  "Yusuf Pathan",
  "Ravindra Jadeja",
  "Ambati Rayudu",
  "Manoj Tiwary",
  "Vinay Kumar",
  "Parthiv Patel",
  "Ajit Agarkar",
  "Ramesh Powar",
  "RP Singh",
  "S Badrinath",
  "Robin Uthappa",
  "Irfan Pathan",
  "Varun Aaron",
  "Shanthakumaran Sreesanth",
  "Cheteshwar Pujara",
  "Stuart Binny",
  "Wriddhiman Saha",
  "Dinesh Mongia",
  "Abhinav Mukund",
  "Amit Mishra",
];

function search(query) {
  let filteredData = dataBase.filter((data) => {
    return data.toLowerCase().includes(query.toLowerCase());
  });

  return filteredData;
}

function handleSearch(e) {
  let text = e.target.value;
  let filteredData = search(text);
  results.innerHTML = "";
  if (text.length > 0 && filteredData.length > 0) {
    for (let i = 0; i < filteredData.length; i++) {
      const li = document.createElement("li");
      li.innerText = filteredData[i];
      results.appendChild(li);
    }
    results.style.display = "block";
  } else results.style.display = "none";
}

searchInput.addEventListener("input", (e) => {
  debouncedSearch(e);
});

const debouncedSearch = debounce(handleSearch);

function debounce(func, timeout = 500) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
