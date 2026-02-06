<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>promotezWorks</title>

<style>
:root {
  --glass: rgba(255,255,255,0.08);
  --border: rgba(255,255,255,0.18);
  --active: rgba(255,255,255,0.22);
  --accent: #ff3d00;
}
* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #151515, #050505);
  color: #fff;
  overflow-x: hidden;
  opacity: 0;
  animation: pageFade .8s ease forwards;
  position: relative;
  z-index: 1;
}
@keyframes pageFade { to { opacity: 1; } }

/* ---------- COLOR BLUR BACKDROP ---------- */
.color-blur {
  position: fixed;
  inset: -20% -10%;
  z-index: 0;
  pointer-events: none;
  filter: blur(90px) saturate(140%);
  opacity: 0.9;
  transition: transform 0.6s ease;
}
.color-blur span {
  position: absolute;
  border-radius: 45% 55% 60% 40%;
  mix-blend-mode: screen;
  opacity: 0.8;
  transition: transform 0.8s ease;
  animation: blobFloat 18s ease-in-out infinite;
  will-change: transform;
}
.color-blur span:nth-child(1) {
  width: 45vw;
  height: 45vw;
  top: 5%;
  left: -5%;
  background: radial-gradient(circle at 30% 30%, #FFD700, rgba(255,215,0,0.2) 60%, transparent 70%);
  animation-duration: 22s;
}
.color-blur span:nth-child(2) {
  width: 35vw;
  height: 35vw;
  top: 20%;
  right: -10%;
  background: radial-gradient(circle at 40% 40%, #2ECDA7, rgba(46,205,167,0.2) 60%, transparent 70%);
  animation-duration: 26s;
}
.color-blur span:nth-child(3) {
  width: 30vw;
  height: 30vw;
  bottom: -5%;
  left: 10%;
  background: radial-gradient(circle at 35% 35%, #EB563A, rgba(235,86,58,0.2) 60%, transparent 70%);
  animation-duration: 20s;
}
.color-blur span:nth-child(4) {
  width: 25vw;
  height: 25vw;
  bottom: 10%;
  right: 20%;
  background: radial-gradient(circle at 45% 45%, #600473, rgba(96,4,115,0.2) 60%, transparent 70%);
  animation-duration: 28s;
}
.color-blur span:nth-child(5) {
  width: 20vw;
  height: 20vw;
  top: 45%;
  left: 40%;
  background: radial-gradient(circle at 50% 50%, #55584C, rgba(85,88,76,0.2) 60%, transparent 70%);
  animation-duration: 24s;
}
@keyframes blobFloat {
  0% { transform: translate(0, 0) scale(1); border-radius: 45% 55% 60% 40%; }
  33% { transform: translate(20px, -30px) scale(1.1); border-radius: 55% 45% 50% 50%; }
  66% { transform: translate(-25px, 20px) scale(0.95); border-radius: 40% 60% 55% 45%; }
  100% { transform: translate(0, 0) scale(1); border-radius: 45% 55% 60% 40%; }
}

/* ---------- HEADER ---------- */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  transform: translateY(-40px);
  animation: slideDown .8s cubic-bezier(0.68,-0.55,0.27,1.55) forwards;
  animation-delay: .2s;
  backdrop-filter: blur(12px);
}
@keyframes slideDown { to { opacity: 1; transform: translateY(0); } }

.brand { font-weight: 700; font-size: 1.8rem; position: relative; }
.brand span {
  color: #888;
  text-shadow: 0 0 8px rgba(255,255,255,0.2);
  animation: glow 2s infinite alternate;
}
@keyframes glow {
@@ -207,53 +273,54 @@ button:active, .variant:active {
  border-radius: 20px;
  border: none;
  background: #fff;
  color: #000;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.auth-box button::before {
  content:'';
  position:absolute;
  inset:0;
  background: radial-gradient(circle, var(--accent) 10%, transparent 80%);
  opacity:0;
  transition: opacity 0.4s ease;
  border-radius:20px;
}
.auth-box button:hover::before { opacity:0.2; }

/* ---------- SECTIONS ---------- */
.section {
  opacity: 0;
  transform: translateY(30px);
  text-align: center;
  padding: 80px 15%;
  background: radial-gradient(circle at top, #111111, #050505);
  background: radial-gradient(circle at top, rgba(17,17,17,0.9), rgba(5,5,5,0.9));
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.section::before {
  content:'';
  position:absolute;
  inset:0;
  background: radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: moveBG 60s linear infinite;
  pointer-events:none;
}
@keyframes moveBG { from { background-position:0 0 } to { background-position:200px 200px } }
.section.visible { opacity: 1; transform: translateY(0); }

.features, .techniques { display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; }
.feature, .technique {
  max-width: 300px;
  background: rgba(255,255,255,0.05);
  padding: 24px;
  border-radius: 18px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
}
.feature.visible, .technique.visible { opacity: 1; transform: translateY(0); }
@@ -265,50 +332,58 @@ button:active, .variant:active {
.page-element { opacity: 0; transform: translateY(30px); transition: opacity 1s ease, transform 1s ease; }
.page-element.visible { opacity: 1; transform: translateY(0); }

/* ---------- DASHBOARD CARDS STYLE ---------- */
.course-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(12px);
}
.course-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 25px rgba(255,61,0,0.3);
  background: rgba(255,255,255,0.12);
}
.course-card h3 { font-size: 1.5rem; margin-bottom: 8px; }
.course-card p { color: #ccc; margin-bottom: 12px; }
</style>

<body>

<div class="color-blur" id="colorBlur">
  <span data-speed="24"></span>
  <span data-speed="18"></span>
  <span data-speed="22"></span>
  <span data-speed="16"></span>
  <span data-speed="12"></span>
</div>

<div class="header">
  <div class="brand">promotez<span>Works</span></div>
  <div class="header-actions" id="headerActions"></div>
</div>

<div class="main page-element">
  <div>
    <h1>Personal Coaching That Actually Improves Your Game</h1>
    <p>One-on-one training sessions focused on mechanics, decision-making, and long-term improvement.</p>
  </div>
</div>

<div class="section page-element" id="infoSection">
  <h2>Courses for Every Rank</h2>
  <div class="features">
    <div class="feature"><h3>Learn from a Top 100</h3><p>Our trainers are among the top 100 in Beetleball, ensuring the highest quality coaching.</p></div>
    <div class="feature"><h3>Rank Up Faster</h3><p>Each session is designed to help you improve quickly and efficiently, reaching higher ranks sooner.</p></div>
    <div class="feature"><h3>Proven Results</h3><p>Players who train with us see measurable improvement in gameplay, mechanics, and decision-making.</p></div>
  </div>
</div>

<div class="section page-element" id="techniquesSection">
  <h2>Learn the Best Techniques</h2>
  <div class="techniques">
    <div class="technique"><h3>Settings Guide</h3><p>Optimize your settings for peak performance, responsiveness, and comfort.</p></div>
@@ -575,33 +650,55 @@ document.head.appendChild(style)
dashboardModal.addEventListener('transitionend', ()=>{
  if(dashboardModal.classList.contains('show')) animateDashboardCards()
})

// ---------- INITIALIZE ----------
window.addEventListener('load',()=>{
  document.querySelectorAll('.page-element').forEach((el,i)=>setTimeout(()=>el.classList.add('visible'),i*300))
  animateSections()
  updateHeader()
  createParticles(60)
})
window.addEventListener('scroll',animateSections)
document.addEventListener('click',(event)=>{
  if(activeDropdown){
    const clickedInsideDropdown=activeDropdown.contains(event.target)
    const clickedToggle=activeDropdownToggle?.contains(event.target)
    if(clickedInsideDropdown||clickedToggle){
      return
    }
    activeDropdown.style.display='none'
    activeDropdown=null
    activeDropdownToggle=null
  }
})

// ---------- COLOR BLUR INTERACTION ----------
const colorBlur = document.getElementById('colorBlur')
const blurLayers = colorBlur ? Array.from(colorBlur.querySelectorAll('span')) : []

function updateBlurPosition(event){
  if(!colorBlur) return
  const bounds = document.body.getBoundingClientRect()
  const x = (event.clientX / bounds.width) * 2 - 1
  const y = (event.clientY / bounds.height) * 2 - 1
  blurLayers.forEach(layer=>{
    const speed = Number(layer.dataset.speed || 10)
    layer.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)'
  })
}

function resetBlurPosition(){
  blurLayers.forEach(layer=>{ layer.style.transform = 'translate(0, 0)' })
}

document.addEventListener('mousemove', updateBlurPosition)
document.addEventListener('mouseleave', resetBlurPosition)

</script>

</body>
</html>`,
{ headers: { "content-type": "text/html;charset=UTF-8" } }
);
  }
};
