var cardContainer = document.querySelector("#cardcontainer");
var stats = document.querySelectorAll("#stats span");
var totalSal = 0;
var avgSal = 0;
var highestSal = 0;


const applications = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    status: "Applied",
    salary: 95000,
    appliedDate: "2026-06-10",
  },
  {
    id: 2,
    company: "Amazon",
    role: "Software Developer",
    status: "Interview",
    salary: 85000,
    appliedDate: "2026-06-01",
  },
  {
    id: 3,
    company: "Microsoft",
    role: "Full Stack Developer",
    status: "Rejected",
    salary: 90000,
    appliedDate: "2026-05-25",
  },
  {
    id: 4,
    company: "Apple",
    role: "UI Engineer",
    status: "Offer",
    salary: 110000,
    appliedDate: "2026-05-18",
  },
  {
    id: 5,
    company: "Meta",
    role: "React Developer",
    status: "Applied",
    salary: 98000,
    appliedDate: "2026-06-12",
  },
  {
    id: 6,
    company: "Shopify",
    role: "Frontend Engineer",
    status: "Interview",
    salary: 87000,
    appliedDate: "2026-06-08",
  },
  {
    id: 7,
    company: "Tesla",
    role: "Software Engineer",
    status: "Applied",
    salary: 92000,
    appliedDate: "2026-06-05",
  },
  {
    id: 8,
    company: "Spotify",
    role: "Frontend Developer",
    status: "Rejected",
    salary: 80000,
    appliedDate: "2026-05-30",
  },
];


applications.forEach((job) => {
  totalSal += job.salary;
  if (job.salary > highestSal) {
    highestSal = job.salary;
  }
});

avgSal = totalSal / applications.length;
stats[0].textContent = "$ " + avgSal;
stats[1].textContent = "$ " + highestSal;

applications.forEach((job) => {
  var card = document.createElement("div");
  card.style.width = "20rem";
  card.style.height = "auto";
  card.style.backgroundColor = "lightgrey";
  card.style.borderRadius = "15px";
  card.innerHTML = `
<div id="cardDetails">
    <div id="cardDetails-left">
        <h4>${job.company}</h4>
        <p class="role-text">${job.role}</p>
        <p class="salary-text">Salary: ${job.salary}</p>
    </div>
    <div id="cardDetails-right">
        <span class="status-tag">${job.status}</span>
        <p class="date-text">${job.appliedDate}</p>
    </div>
</div>
    
`;
  card.style.padding = "1rem";
  cardContainer.append(card);
});
