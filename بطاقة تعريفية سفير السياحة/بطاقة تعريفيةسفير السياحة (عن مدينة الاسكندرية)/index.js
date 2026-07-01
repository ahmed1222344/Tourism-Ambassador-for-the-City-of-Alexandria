
function showTab(tabName, btn){
  document.querySelectorAll('.tab').forEach(tab=>{
    tab.classList.remove('active');
  });

  document.querySelectorAll('.tab-panel').forEach(panel=>{
    panel.classList.remove('active');
  });

  btn.classList.add('active');
  document.getElementById('tab-' + tabName).classList.add('active');
}

const stars = document.getElementById("stars");

for(let i=0;i<45;i++){
  const star = document.createElement("span");
  star.classList.add("star");

  let size = Math.random()*3+1;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.top = Math.random()*100 + "%";
  star.style.left = Math.random()*100 + "%";
  star.style.setProperty('--d', (Math.random()*4+2)+'s');
  star.style.setProperty('--delay', (Math.random()*3)+'s');

  stars.appendChild(star);
}

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.className = "top-btn";
document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
  if(window.scrollY > 300){
    topBtn.classList.add("show");
  }else{
    topBtn.classList.remove("show");
  }
});

topBtn.onclick = ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};

const quotes = [
"الإسكندرية مدينة لا يشيخ جمالها.",
"عروس البحر الأبيض المتوسط.",
"حيث يلتقي التاريخ بنسيم البحر.",
"مدينة الحضارات المتعانقة."
];

let q = 0;

setInterval(()=>{
  const quote = document.querySelector(".rotating-quote");
  if(quote){
    quote.style.opacity = 0;
    setTimeout(()=>{
      q = (q+1)%quotes.length;
      quote.textContent = quotes[q];
      quote.style.opacity = 1;
    },400);
  }
},3000);


const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = "إعداد الطالب : أحمد عصام محمد توفيق";
document.querySelector(".card").appendChild(footer);


function showTab(tabName, btn) {
  const panels = document.querySelectorAll('.tab-panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById('tab-' + tabName);
  if (activePanel) {
    activePanel.classList.add('active');
  }

  const buttons = document.querySelectorAll('.tab');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  btn.classList.add('active');
}

function nextTab() {
  const tabs = ['sites', 'culture', 'food', 'customs'];

  const current = document.querySelector('.tab-panel.active');
  if (!current) return;

  let currentId = current.id.replace('tab-', '');
  let index = tabs.indexOf(currentId);

  let nextIndex = index + 1;

  if (nextIndex >= tabs.length) {
    nextIndex = 0; 
  }

  const nextTabName = tabs[nextIndex];

  const target = document.getElementById('tab-' + nextTabName);
  const btn = document.querySelectorAll('.tab')[nextIndex];

  if (typeof showTab === "function") {
    showTab(nextTabName, btn);
  } else {
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    target.classList.add('active');
  }
}

function openPage() {
  window.location.href = "Alexandria.html";
}