export default {
  async fetch() {
    return new Response(
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
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
  filter: blur(80px);
  opacity: 0.8;
  transition: transform 0.6s ease;
}
.color-blur span {
  position: absolute;
  border-radius: 50%;
  mix-blend-mode: screen;
  opacity: 0.75;
  transition: transform 0.8s ease;
}
.color-blur span:nth-child(1) {
  width: 45vw;
  height: 45vw;
  top: 5%;
  left: -5%;
  background: #FFD700;
}
.color-blur span:nth-child(2) {
  width: 35vw;
  height: 35vw;
  top: 20%;
  right: -10%;
  background: #2ECDA7;
}
.color-blur span:nth-child(3) {
  width: 30vw;
  height: 30vw;
  bottom: -5%;
  left: 10%;
  background: #EB563A;
}
.color-blur span:nth-child(4) {
  width: 25vw;
  height: 25vw;
  bottom: 10%;
  right: 20%;
  background: #600473;
}
.color-blur span:nth-child(5) {
  width: 20vw;
  height: 20vw;
  top: 45%;
  left: 40%;
  background: #55584C;
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
  0% { text-shadow: 0 0 4px rgba(255,255,255,0.1); }
  50% { text-shadow: 0 0 12px rgba(255,255,255,0.4), 0 0 24px rgba(255,61,0,0.3); }
  100% { text-shadow: 0 0 6px rgba(255,255,255,0.2); }
}

.header-actions { display: flex; gap: 12px; animation: fadeInButtons .6s ease forwards; }
@keyframes fadeInButtons { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

button, .variant {
  font-family: inherit;
  transition: all 0.25s ease, box-shadow 0.3s ease, transform 0.3s ease;
}
button:hover, .variant:hover, button:focus, .variant:focus {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 28px rgba(255,255,255,0.35);
}
button:active, .variant:active {
  transform: translateY(1px) scale(0.98);
  box-shadow: 0 6px 15px rgba(255,255,255,0.2);
}

.purchase-top,
.login-btn {
  padding: 12px 22px;
  border-radius: 28px;
  border: 1px solid var(--border);
  background: var(--glass);
  color: #fff;
  backdrop-filter: blur(18px);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.purchase-top::before,
.login-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(255,61,0,0.2), rgba(255,255,255,0.1));
  transform: translateX(-100%);
  transition: transform 0.5s ease;
  border-radius: 28px;
}
.purchase-top:hover::before,
.login-btn:hover::before { transform: translateX(0%); }

/* ---------- MAIN ---------- */
.main {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10%;
  position: relative;
  z-index: 1;
}
.main h1 { font-size: 3rem; line-height: 1.2; text-shadow: 0 0 12px rgba(0,0,0,0.6); }
.main p { max-width: 620px; margin: 20px auto 0; color: #cfcfcf; }

/* ---------- PARTICLES ---------- */
.particle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  pointer-events: none;
  animation: floatParticles linear infinite;
}
@keyframes floatParticles { 
  0% { transform: translateY(0) translateX(0) rotate(0deg); }
  50% { transform: translateY(-30px) translateX(20px) rotate(45deg); }
  100% { transform: translateY(0) translateX(0) rotate(360deg); }
}

/* ---------- MODALS ---------- */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease;
  z-index: 2000;
}
.modal.show { opacity: 1; pointer-events: auto; }

.modal-box {
  width: 95%;
  max-width: 900px;
  background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.04));
  border-radius: 26px;
  border: 1px solid var(--border);
  backdrop-filter: blur(30px);
  padding: 36px;
  transform: scale(.95) rotateX(5deg);
  opacity: 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
  transition: transform 0.4s ease, opacity 0.4s ease, box-shadow 0.4s ease;
  position: relative;
}
.modal.show .modal-box {
  transform: scale(1) rotateX(0deg);
  opacity: 1;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

/* ---------- COURSES LAYOUT ---------- */
.courses-layout {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 40px;
  height: 70vh;
}
.product { display: flex; flex-direction: column; justify-content: center; gap: 16px; }
.product h2 { font-size: 2.4rem; margin: 0; }
.price { font-size: 2.2rem; font-weight: 700; }
.variants { display: flex; flex-direction: column; gap: 14px; justify-content: center; }
.variant {
  padding: 18px 22px;
  border-radius: 18px;
  background: var(--glass);
  border: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  perspective: 800px;
}
.variant.active { border: 2px solid #fff; transform: scale(1.03); }

/* ---------- AUTH ---------- */
.auth-box { max-width: 420px; width: 100%; text-align: center; }
.auth-box input {
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: var(--glass);
  color: #fff;
}
.auth-box input:focus { border-color: #fff; outline: none; }
.auth-box button {
  width: 100%;
  margin-top: 14px;
  padding: 14px;
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
  position: relative;
  overflow: hidden;
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
.feature:hover, .technique:hover { transform: translateY(-5px) rotateX(2deg) scale(1.02); box-shadow:0 12px 20px rgba(255,61,0,0.3); }

.feature h3, .technique h3 { font-size: 1.5rem; margin-bottom: 12px; }
.feature p, .technique p { color: #ccc; line-height: 1.6; }

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
    <div class="technique"><h3>Movement Techniques</h3><p>Master advanced movement strategies to outplay your opponents efficiently.</p></div>
    <div class="technique"><h3>Beetle Abilities & Types</h3><p>Learn which beetle abilities and types go best together, and understand what each ability does in a match.</p></div>
  </div>
</div>

<!-- COURSES MODAL -->
<div class="modal" id="coursesModal">
  <div class="modal-box">
    <div id="closeCoursesBtn" class="close-x" style="position:absolute; top:16px; right:16px;">×</div>
    <div class="courses-layout">
      <div class="product" id="product"></div>
      <div class="variants" id="variants"></div>
    </div>
    <div class="controls">
      <button class="login-btn" id="continueCourses">Continue</button>
    </div>
  </div>
</div>

<!-- LOGIN MODAL -->
<div class="modal" id="loginModal">
  <div class="modal-box auth-box">
    <h2 id="authTitle">Welcome Back</h2>
    <input placeholder="Name" id="nameField" style="display:none;">
    <input id="emailField" placeholder="Email">
    <input id="passwordField" placeholder="Password" type="password">
    <button id="authContinueBtn">Continue</button>
    <div class="forgot" id="forgotPassword">Forgot password?</div>
    <div class="toggle" id="toggleAuth">Don’t have an account? Sign up</div>
  </div>
</div>

<!-- DASHBOARD MODAL -->
<div class="modal" id="dashboardModal">
  <div class="modal-box">
    <div class="dashboard-header">
      <h2>Your Courses</h2>
      <div id="closeDashboardBtn" class="close-x">×</div>
    </div>
    <div class="dashboard-courses" id="dashboardContent"></div>
  </div>
</div>

<script type="module">
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl='https://uuipuknobdddrmpcpthr.supabase.co'
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1aXB1a25vYmRkZHJtcGNwdGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjM2MzIsImV4cCI6MjA4NTg5OTYzMn0.DHlpPnxRFOXv7gT59LNNTpxB7dn8G8C7Ii6go-S_-O0'
const supabase=createClient(supabaseUrl,supabaseKey)

// ---------- ELEMENTS ----------
const coursesModal=document.getElementById('coursesModal')
const loginModal=document.getElementById('loginModal')
const dashboardModal=document.getElementById('dashboardModal')
const headerActions=document.getElementById('headerActions')
const product=document.getElementById('product')
const variants=document.getElementById('variants')
const authTitle=document.getElementById('authTitle')
const toggleAuth=document.getElementById('toggleAuth')
const nameField=document.getElementById('nameField')
const emailField=document.getElementById('emailField')
const passwordField=document.getElementById('passwordField')
const forgotPassword=document.getElementById('forgotPassword')
const closeDashboardBtn=document.getElementById('closeDashboardBtn')
const dashboardContent=document.getElementById('dashboardContent')
const authContinueBtn=document.getElementById('authContinueBtn')
const closeCoursesBtn=document.getElementById('closeCoursesBtn')
let activeDropdown=null
let activeDropdownToggle=null

// ---------- COURSES DATA ----------
const courses=[
  {id:1,name:'Offensive Training (1 hour)',price:'$5'},
  {id:2,name:'Defensive Training (2 hours)',price:'$10'},
  {id:3,name:'The Whole Package (3 hours)',price:'$15'}
]

// ---------- FUNCTIONS ----------
function loadCourses(){
  product.innerHTML='<h2>Available Courses</h2><div class="price">Select a course</div>'
  variants.innerHTML=''
  courses.forEach(c=>{
    const el=document.createElement('div')
    el.className='variant'
    el.innerHTML=c.name+'<span>'+c.price+'</span>'
    el.onclick=()=>{ document.querySelectorAll('.variant').forEach(x=>x.classList.remove('active')); el.classList.add('active'); product.querySelector('.price').textContent=c.price }
    variants.appendChild(el)
  })
}

function closeAll(){ coursesModal.classList.remove('show'); loginModal.classList.remove('show'); dashboardModal.classList.remove('show') }

// ---------- DASHBOARD CONTENT ----------
async function loadDashboardContent(){
  const { data:{ session } } = await supabase.auth.getSession()
  if(!session) return
  const { data: purchases, error } = await supabase.from('purchases').select('*').eq('user_id', session.user.id)
  if(error) return alert('Error loading dashboard: '+error.message)
  dashboardContent.innerHTML=''
  purchases.forEach(p=>{
    const card=document.createElement('div')
    card.className='course-card'
    card.innerHTML=\`<h3>\${p.course_name}</h3><p>Price: \${p.price}</p>\`
    dashboardContent.appendChild(card)
  })
}

// ---------- AUTH ----------
async function login(email,password){ const {data,error}=await supabase.auth.signInWithPassword({email,password}); if(error) throw error; return data }
async function signUp(email,password,name){ const {data,error}=await supabase.auth.signUp({email,password,options:{data:{full_name:name}}}); if(error) throw error; return data }
async function logout(){ await supabase.auth.signOut(); updateHeader() }

async function updateHeader(){
  const { data: { session } } = await supabase.auth.getSession()
  headerActions.innerHTML=''
  activeDropdown=null
  activeDropdownToggle=null

  const browseBtn=document.createElement('button')
  browseBtn.className='purchase-top'
  browseBtn.textContent='Browse Courses'
  browseBtn.onclick=()=> session?(loadCourses(),coursesModal.classList.add('show')):loginModal.classList.add('show')
  headerActions.appendChild(browseBtn)

  if(session){
    const accountWrapper=document.createElement('div')
    accountWrapper.style.position='relative'
    accountWrapper.style.display='flex'

    const nameBtn=document.createElement('button')
    nameBtn.className='login-btn'
    nameBtn.textContent=session.user.user_metadata.full_name||'User'

    const dropdown=document.createElement('div')
    dropdown.style.position='absolute'
    dropdown.style.top='110%'
    dropdown.style.right='0'
    dropdown.style.background='rgba(0,0,0,0.9)'
    dropdown.style.border='1px solid var(--border)'
    dropdown.style.borderRadius='12px'
    dropdown.style.display='none'
    dropdown.style.flexDirection='column'
    dropdown.style.minWidth='140px'
    dropdown.style.zIndex='100'
    dropdown.style.backdropFilter='blur(10px)'

    const dashOption=document.createElement('button')
    dashOption.textContent='Dashboard'
    dashOption.style.padding='10px'
    dashOption.style.background='none'
    dashOption.style.border='none'
    dashOption.style.color='#fff'
    dashOption.style.cursor='pointer'
    dashOption.onclick=()=>{ loadDashboardContent(); dashboardModal.classList.add('show'); dropdown.style.display='none' }

    const logoutOption=document.createElement('button')
    logoutOption.textContent='Logout'
    logoutOption.style.padding='10px'
    logoutOption.style.background='none'
    logoutOption.style.border='none'
    logoutOption.style.color='#fff'
    logoutOption.style.cursor='pointer'
    logoutOption.onclick=async()=>{ await logout(); dropdown.style.display='none' }

    dropdown.appendChild(dashOption)
    dropdown.appendChild(logoutOption)
    accountWrapper.appendChild(nameBtn)
    accountWrapper.appendChild(dropdown)

    nameBtn.onclick=(e)=>{
      e.stopPropagation()
      const shouldShow=dropdown.style.display!=='flex'
      dropdown.style.display=shouldShow?'flex':'none'
      activeDropdown=shouldShow?dropdown:null
      activeDropdownToggle=shouldShow?nameBtn:null
    }

    dropdown.addEventListener('click',(event)=>event.stopPropagation())
    headerActions.appendChild(accountWrapper)
  } else {
    const loginBtn=document.createElement('button')
    loginBtn.className='login-btn'
    loginBtn.textContent='Login'
    loginBtn.onclick=()=>loginModal.classList.add('show')
    headerActions.appendChild(loginBtn)
  }
}

// ---------- AUTH HANDLERS ----------
supabase.auth.onAuthStateChange((event, session)=>{ if(event==='SIGNED_IN'||event==='SIGNED_UP') closeAll(); updateHeader() })

let isSignup=false
authContinueBtn.onclick=async()=>{
  const name=nameField.value.trim(), email=emailField.value.trim(), password=passwordField.value.trim()
  if(!email||!password||(isSignup&&!name)) return alert('Please fill in all required fields')
  try{ isSignup?await signUp(email,password,name):await login(email,password) }catch(e){alert('Error: '+e.message)}
}
toggleAuth.onclick=()=>{
  isSignup=!isSignup
  authTitle.textContent=isSignup?'Create Account':'Welcome Back'
  nameField.style.display=isSignup?'block':'none'
  forgotPassword.style.display=isSignup?'none':'block'
  toggleAuth.textContent=isSignup?'Already have an account? Login':'Don’t have an account? Sign up'
}

// ---------- EVENTS ----------
closeCoursesBtn.onclick=()=>coursesModal.classList.remove('show')
document.getElementById('continueCourses').onclick=async()=>{
  const active=document.querySelector('.variant.active')
  if(!active)return alert('Please select a course')
  const courseName=active.textContent.split('$')[0].trim()
  const coursePrice='$'+active.textContent.split('$')[1].trim()
  const { data:{ session } } = await supabase.auth.getSession()
  if(!session) return loginModal.classList.add('show')
  const { error }=await supabase.from('purchases').insert([{user_id:session.user.id,course_name:courseName,price:coursePrice}])
  if(error) alert('Error saving purchase: '+error.message)
  else { alert('Purchase saved!'); coursesModal.classList.remove('show'); updateHeader() }
}

closeDashboardBtn.onclick=()=>dashboardModal.classList.remove('show')
dashboardModal.onclick=e=>{ if(e.target===dashboardModal) dashboardModal.classList.remove('show') }

// ---------- ANIMATIONS ----------
function animateSections(){
  const trigger=window.innerHeight*0.8
  const sections=[
    {el:document.getElementById('infoSection'),items:document.querySelectorAll('.feature')},
    {el:document.getElementById('techniquesSection'),items:document.querySelectorAll('.technique')}
  ]
  sections.forEach(s=>{
    const rect=s.el.getBoundingClientRect()
    if(rect.top<trigger){ s.el.classList.add('visible'); s.items.forEach((item,i)=>setTimeout(()=>item.classList.add('visible'),i*200)) }
    else{ s.el.classList.remove('visible'); s.items.forEach(item=>item.classList.remove('visible')) }
  })
}

function createParticles(count=50){
  for(let i=0;i<count;i++){
    const p=document.createElement('div')
    p.className='particle'
    const size=Math.random()*4+2
    p.style.width=p.style.height=size+'px'
    p.style.left=Math.random()*100+'%'
    p.style.top=Math.random()*100+'%'
    p.style.animationDuration=(Math.random()*40+20)+'s'
    document.body.appendChild(p)
  }
}

// ---------- DASHBOARD ANIMATION ----------
function animateDashboardCards(){
  const cards = document.querySelectorAll('.course-card')
  cards.forEach((card,i)=>setTimeout(()=>card.classList.add('visible'), i*150))
}
const style = document.createElement('style')
style.innerHTML = \`
.course-card { opacity:0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
.course-card.visible { opacity:1; transform: translateY(0); }
\`
document.head.appendChild(style)
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
    layer.style.transform = `translate(${x * speed}px, ${y * speed}px)`
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
