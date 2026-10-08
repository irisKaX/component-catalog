/** Registr komponent: každá komponenta uchovává HTML, CSS a JS odděleně. */
window.catalogComponents = [
  {
    id: 'download-animated',
    name: 'Animované tlačítko Download',
    category: 'Tlačítka',
    description: 'Tlačítko s animací stahování a finálním stavem Open. Čisté HTML a CSS.',
    html: `<div class="cmp-download">
  <label class="cmp-download-label">
    <input class="cmp-download-input" type="checkbox" aria-label="Spustit animaci stažení" />
    <span class="cmp-download-circle" aria-hidden="true">
      <svg class="cmp-download-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
      </svg>
      <span class="cmp-download-square"></span>
    </span>
    <span class="cmp-download-title">Download</span>
    <span class="cmp-download-title cmp-download-title-final">Open</span>
  </label>
</div>`,
    css: `.cmp-download {
  --cmp-download-accent: #5b5bf0;
  --cmp-download-accent-dark: #3333a8;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background: #171827;
  border-radius: 12px;
}
.cmp-download, .cmp-download * { box-sizing: border-box; }
.cmp-download-label {
  background: transparent;
  border: 2px solid var(--cmp-download-accent);
  display: flex;
  align-items: center;
  border-radius: 50px;
  width: 160px;
  cursor: pointer;
  transition: all .4s ease;
  padding: 5px;
  position: relative;
  height: 59px;
}
.cmp-download-label::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff;
  width: 8px;
  height: 8px;
  transition: all .4s ease;
  border-radius: 50%;
  margin: auto;
  opacity: 0;
  visibility: hidden;
}
.cmp-download-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.cmp-download-input:focus-visible + .cmp-download-circle {
  outline: 2px solid white;
  outline-offset: 3px;
}
.cmp-download-title {
  font-size: 17px;
  color: #fff;
  transition: all .4s ease;
  position: absolute;
  right: 18px;
  bottom: 14px;
  text-align: center;
}
.cmp-download-title-final { opacity: 0; visibility: hidden; }
.cmp-download-circle {
  height: 45px;
  width: 45px;
  flex: 0 0 45px;
  border-radius: 50%;
  background: var(--cmp-download-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .4s ease;
  position: relative;
  box-shadow: 0 0 0 0 #fff;
  overflow: hidden;
}
.cmp-download-icon {
  color: #fff;
  width: 30px;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  transition: all .4s ease;
}
.cmp-download-square {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background: #fff;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  transition: all .4s ease;
}
.cmp-download-circle::before {
  content: "";
  position: absolute;
  left: 0; top: 0;
  background: var(--cmp-download-accent-dark);
  width: 100%; height: 0;
  transition: all .4s ease;
}
.cmp-download-label:has(.cmp-download-input:checked) {
  width: 57px;
  animation: cmp-download-installed .4s ease 3.5s forwards;
}
.cmp-download-label:has(.cmp-download-input:checked)::before {
  animation: cmp-download-rotate 3s ease-in-out .4s forwards;
}
.cmp-download-input:checked + .cmp-download-circle {
  animation: cmp-download-pulse 1s forwards, cmp-download-circle-delete .2s ease 3.5s forwards;
  rotate: 180deg;
}
.cmp-download-input:checked + .cmp-download-circle::before {
  animation: cmp-download-installing 3s ease-in-out forwards;
}
.cmp-download-input:checked + .cmp-download-circle .cmp-download-icon {
  opacity: 0; visibility: hidden;
}
.cmp-download-input:checked ~ .cmp-download-circle .cmp-download-square {
  opacity: 1; visibility: visible;
}
.cmp-download-input:checked ~ .cmp-download-title { opacity: 0; visibility: hidden; }
.cmp-download-input:checked ~ .cmp-download-title-final {
  animation: cmp-download-show-open .4s ease 3.5s forwards;
}
@keyframes cmp-download-pulse {
  0% { scale: .95; box-shadow: 0 0 0 0 rgba(255,255,255,.7); }
  70% { scale: 1; box-shadow: 0 0 0 16px rgba(255,255,255,0); }
  100% { scale: .95; box-shadow: 0 0 0 0 rgba(255,255,255,0); }
}
@keyframes cmp-download-installing { from {height: 0} to {height: 100%} }
@keyframes cmp-download-rotate {
  0% {transform: rotate(-90deg) translate(27px) rotate(0); opacity: 1; visibility: visible;}
  99% {transform: rotate(270deg) translate(27px) rotate(270deg); opacity: 1; visibility: visible;}
  100% {opacity: 0; visibility: hidden;}
}
@keyframes cmp-download-installed { to {width: 150px; border-color: #23ae23;} }
@keyframes cmp-download-circle-delete {to {opacity: 0; visibility: hidden;} }
@keyframes cmp-download-show-open {to {opacity: 1; visibility: visible; right: 56px;} }`,
    js: ''
  },
  {
    id: 'menu-toggle-animated',
    name: 'Animovaná hamburger ikona',
    category: 'Navigace',
    description: 'Třířádková ikona menu, která se po kliknutí plynule mění na křížek. Čisté HTML a CSS.',
    html: `<div class="cmp-menu">
  <input class="cmp-menu-input" type="checkbox" id="cmp-menu-toggle" aria-label="Otevřít nebo zavřít menu" />
  <label class="cmp-menu-toggle" for="cmp-menu-toggle" aria-label="Přepnout menu">
    <span class="cmp-menu-bar cmp-menu-bar-first"></span>
    <span class="cmp-menu-bar cmp-menu-bar-middle"></span>
    <span class="cmp-menu-bar cmp-menu-bar-last"></span>
  </label>
</div>`,
    css: `.cmp-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
}
.cmp-menu, .cmp-menu * { box-sizing: border-box; }
.cmp-menu-input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.cmp-menu-toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: transform .5s;
}
.cmp-menu-bar {
  width: 100%;
  height: 4px;
  flex-shrink: 0;
  background-color: rgb(176, 92, 255);
  border-radius: 4px;
}
.cmp-menu-bar-middle { transition: transform .8s; }
.cmp-menu-bar-first, .cmp-menu-bar-last { width: 70%; }
.cmp-menu-input:focus-visible + .cmp-menu-toggle {
  outline: 2px solid rgb(176, 92, 255);
  outline-offset: 6px;
  border-radius: 4px;
}
.cmp-menu-input:checked + .cmp-menu-toggle .cmp-menu-bar {
  position: absolute;
  transition: transform .5s, width .5s;
}
.cmp-menu-input:checked + .cmp-menu-toggle .cmp-menu-bar-middle {
  transform: scaleX(0);
}
.cmp-menu-input:checked + .cmp-menu-toggle .cmp-menu-bar-first {
  width: 100%;
  transform: rotate(45deg);
}
.cmp-menu-input:checked + .cmp-menu-toggle .cmp-menu-bar-last {
  width: 100%;
  transform: rotate(-45deg);
}
.cmp-menu-input:checked + .cmp-menu-toggle {
  transform: rotate(180deg);
}`,
    js: ''
  },
  {
    id: 'gradient-explore-button',
    name: 'Gradientové tlačítko Explore Now',
    category: 'Tlačítka',
    description: 'Tmavé zaoblené tlačítko s rotujícím gradientovým okrajem, barevným textem a animací šipek při najetí.',
    html: `<div class="cmp-explore">
  <button class="cmp-explore-button" type="button">
    <span class="cmp-explore-border" aria-hidden="true"></span>
    <span class="cmp-explore-content">
      <svg class="cmp-explore-icon cmp-explore-icon-left" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M11 19l-7-7 7-7m8 14l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
      </svg>
      <span class="cmp-explore-text">Explore Now</span>
      <svg class="cmp-explore-icon cmp-explore-icon-right" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 5l7 7-7 7M5 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
      </svg>
    </span>
  </button>
</div>`,
    css: `.cmp-explore {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.cmp-explore, .cmp-explore * { box-sizing: border-box; }
.cmp-explore-button {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding: 2px;
  border: 0;
  border-radius: 9999px;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
}
.cmp-explore-button:focus-visible {
  outline: 2px solid #94a3b8;
  outline-offset: 4px;
}
.cmp-explore-border {
  position: absolute;
  inset: -1000%;
  background: linear-gradient(to right, #db2777, #9333ea, #2563eb);
  animation: cmp-explore-spin 2s linear infinite;
}
.cmp-explore-content {
  position: relative;
  display: inline-flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 9999px;
  background: #020617;
  backdrop-filter: blur(64px);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: background-color .3s;
}
.cmp-explore-button:hover .cmp-explore-content { background: rgba(2, 6, 23, .9); }
.cmp-explore-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  transition: transform .3s;
}
.cmp-explore-icon-left { margin-right: 8px; color: #ec4899; }
.cmp-explore-icon-right { margin-left: 8px; color: #3b82f6; }
.cmp-explore-button:hover .cmp-explore-icon-left { transform: translateX(-4px); }
.cmp-explore-button:hover .cmp-explore-icon-right { transform: translateX(4px); }
.cmp-explore-text {
  background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 600;
}
@keyframes cmp-explore-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) {
  .cmp-explore-border { animation: none; }
  .cmp-explore-icon { transition: none; }
}`,
    js: ''
  },
  {
    "id": "radial-navigation",
    "name": "Rozbalovací navigace (+)",
    "category": "Navigace",
    "description": "Čtyři ikony Home, Search, History a Profile se animovaně rozbalují z centrálního tlačítka. Tailwind třídy zachované, doplněné izolované CSS a ovládání kliknutím.",
    "html": "<nav class=\"cmp-radial relative group w-full h-40 flex items-center justify-center\" aria-label=\"Rozbalovací navigace\">\n  <button type=\"button\" class=\"cmp-radial-trigger relative w-16 h-16 bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110 z-50 hover:bg-[#2563eb]\" aria-label=\"Rozbalit nabídku\" aria-expanded=\"false\">\n    <svg class=\"w-8 h-8 transition-transform duration-500 ease-in-out group-hover:rotate-45\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\">\n      <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4v16m8-8H4\"/>\n    </svg>\n  </button>\n  <div class=\"cmp-radial-items absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-40 transition-all duration-500\">\n    <a href=\"#\" class=\"cmp-radial-item cmp-radial-home absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]\" aria-label=\"Home\" tabindex=\"-1\">\n      <span class=\"cmp-radial-icon w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100\">\n        <svg class=\"w-5 h-5 text-gray-400 transition-colors duration-300\" fill=\"currentColor\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path  d=\"M12 2L3 9v11a2 2 0 002 2h4v-7h6v7h4a2 2 0 002-2V9L12 2z\"/></svg>\n      </span>\n      <span class=\"cmp-radial-label text-xs font-bold text-gray-700 text-center mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300\">Home</span>\n    </a>\n    <a href=\"#\" class=\"cmp-radial-item cmp-radial-search absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]\" aria-label=\"Search\" tabindex=\"-1\">\n      <span class=\"cmp-radial-icon w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100\">\n        <svg class=\"w-5 h-5 text-gray-400 transition-colors duration-300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z\"/></svg>\n      </span>\n      <span class=\"cmp-radial-label text-xs font-bold text-gray-700 text-center mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300\">Search</span>\n    </a>\n    <a href=\"#\" class=\"cmp-radial-item cmp-radial-history absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]\" aria-label=\"History\" tabindex=\"-1\">\n      <span class=\"cmp-radial-icon w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100\">\n        <svg class=\"w-5 h-5 text-gray-400 transition-colors duration-300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\"/></svg>\n      </span>\n      <span class=\"cmp-radial-label text-xs font-bold text-gray-700 text-center mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300\">History</span>\n    </a>\n    <a href=\"#\" class=\"cmp-radial-item cmp-radial-profile absolute transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]\" aria-label=\"Profile\" tabindex=\"-1\">\n      <span class=\"cmp-radial-icon w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100\">\n        <svg class=\"w-5 h-5 text-gray-400 transition-colors duration-300\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\"/></svg>\n      </span>\n      <span class=\"cmp-radial-label text-xs font-bold text-gray-700 text-center mt-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300\">Profile</span>\n    </a>\n  </div>\n</nav>",
    "css": ".cmp-radial,.cmp-radial *{box-sizing:border-box}\n.cmp-radial{position:relative;width:100%;height:170px;display:flex;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif}\n.cmp-radial-trigger{position:relative;z-index:2;width:64px;height:64px;border:0;border-radius:50%;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 12px 28px #0002;transition:transform .3s,background .3s}\n.cmp-radial-trigger:hover{background:#2563eb}\n.cmp-radial-trigger svg{width:32px;height:32px;transition:transform .5s}\n.cmp-radial:hover .cmp-radial-trigger,.cmp-radial.is-open .cmp-radial-trigger{transform:scale(1.1)}\n.cmp-radial:hover .cmp-radial-trigger svg,.cmp-radial.is-open .cmp-radial-trigger svg{transform:rotate(45deg)}\n.cmp-radial-items{position:absolute;top:50%;left:50%;width:0;height:0}\n.cmp-radial-item{position:absolute;left:0;top:0;display:flex;flex-direction:column;align-items:center;text-decoration:none;opacity:0;pointer-events:none;transform:translate(-50%,-50%) translateX(0) scale(.8);transition:transform .5s cubic-bezier(.68,-.55,.27,1.55),opacity .5s}\n.cmp-radial:hover .cmp-radial-item,.cmp-radial.is-open .cmp-radial-item{opacity:1;pointer-events:auto}\n.cmp-radial:hover .cmp-radial-home,.cmp-radial.is-open .cmp-radial-home{transform:translate(-50%,-50%) translateX(-150px);transition-delay:50ms}\n.cmp-radial:hover .cmp-radial-search,.cmp-radial.is-open .cmp-radial-search{transform:translate(-50%,-50%) translateX(-75px);transition-delay:100ms}\n.cmp-radial:hover .cmp-radial-history,.cmp-radial.is-open .cmp-radial-history{transform:translate(-50%,-50%) translateX(75px);transition-delay:150ms}\n.cmp-radial:hover .cmp-radial-profile,.cmp-radial.is-open .cmp-radial-profile{transform:translate(-50%,-50%) translateX(150px);transition-delay:200ms}\n.cmp-radial-icon{width:48px;height:48px;border-radius:50%;background:white;color:#9ca3af;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px #0002;transition:transform .3s,background .3s,color .3s}\n.cmp-radial-icon svg{width:20px;height:20px}\n.cmp-radial-item:hover .cmp-radial-icon{transform:scale(1.1);background:#f3f4f6;color:#3b82f6}\n.cmp-radial-label{display:block;margin-top:8px;font-size:12px;font-weight:700;color:#374151;opacity:0;transition:opacity .3s .3s}\n.cmp-radial:hover .cmp-radial-label,.cmp-radial.is-open .cmp-radial-label{opacity:1}\n.cmp-radial-trigger:focus-visible,.cmp-radial-item:focus-visible{outline:3px solid #93c5fd;outline-offset:4px}\n@media(max-width:420px){.cmp-radial{transform:scale(.66);width:150%;margin-left:-25%}}\n@media(prefers-reduced-motion:reduce){.cmp-radial *{transition:none!important}}",
    "js": "(() => {\n  const nav = document.querySelector('.cmp-radial');\n  if (!nav) return;\n  const trigger = nav.querySelector('.cmp-radial-trigger');\n  const links = [...nav.querySelectorAll('.cmp-radial-item')];\n  const toggle = open => {\n    nav.classList.toggle('is-open', open);\n    trigger.setAttribute('aria-expanded', String(open));\n    trigger.setAttribute('aria-label', open ? 'Zavřít nabídku' : 'Rozbalit nabídku');\n    links.forEach(link => link.tabIndex = open ? 0 : -1);\n  };\n  trigger.addEventListener('click', () => toggle(!nav.classList.contains('is-open')));\n  links.forEach(link => link.addEventListener('click', event => event.preventDefault()));\n  nav.addEventListener('keydown', event => { if (event.key === 'Escape') toggle(false); });\n})();"
  },
  {
    "id": "tailwind-card",
    "name": "Tailwind card",
    "category": "Karty",
    "description": "Bílá obsahová karta s předsazeným modrým gradientem, nadpisem, textem a tlačítkem Read More. Původní Tailwind utility třídy jsou zachované.",
    "html": "<div class=\"cmp-tailwind-card relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md\">\n  <div class=\"cmp-tailwind-card-cover relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600\"></div>\n  <div class=\"cmp-tailwind-card-body p-6\">\n    <h5 class=\"mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased\">Tailwind card</h5>\n    <p class=\"block font-sans text-base font-light leading-relaxed text-inherit antialiased\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.</p>\n  </div>\n  <div class=\"cmp-tailwind-card-footer p-6 pt-0\">\n    <button type=\"button\" data-ripple-light=\"true\" class=\"cmp-tailwind-card-button select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none\">Read More</button>\n  </div>\n</div>",
    "css": ".cmp-tailwind-card,.cmp-tailwind-card *{box-sizing:border-box}\n.cmp-tailwind-card{position:relative;display:flex;flex-direction:column;width:320px;max-width:100%;border-radius:12px;background:#fff;color:#374151;box-shadow:0 4px 12px rgba(0,0,0,.12);font-family:Arial,Helvetica,sans-serif}\n.cmp-tailwind-card-cover{position:relative;height:160px;flex-shrink:0;margin:-24px 16px 0;border-radius:12px;overflow:hidden;background:linear-gradient(to right,#3b82f6,#2563eb);box-shadow:0 10px 18px rgba(59,130,246,.24)}\n.cmp-tailwind-card-body{padding:24px}\n.cmp-tailwind-card-body h5{display:block;margin:0 0 8px;color:#1e293b;font-size:20px;font-weight:600;line-height:1.375;letter-spacing:0}\n.cmp-tailwind-card-body p{margin:0;font-size:16px;font-weight:300;line-height:1.625;color:inherit}\n.cmp-tailwind-card-footer{padding:0 24px 24px}\n.cmp-tailwind-card-button{border:0;border-radius:8px;background:#3b82f6;padding:12px 24px;color:#fff;text-align:center;font-size:12px;font-weight:700;text-transform:uppercase;cursor:pointer;box-shadow:0 4px 10px rgba(59,130,246,.2);transition:box-shadow .2s,opacity .2s}\n.cmp-tailwind-card-button:hover{box-shadow:0 10px 18px rgba(59,130,246,.4)}\n.cmp-tailwind-card-button:focus-visible{outline:2px solid #2563eb;outline-offset:3px}\n.cmp-tailwind-card-button:active{opacity:.85}\n.cmp-tailwind-card-button:disabled{opacity:.5;cursor:default;box-shadow:none}",
    "js": ""
  },
  {
    "id": "logout-expand",
    "name": "Animované tlačítko Logout",
    "category": "Tlačítka",
    "description": "Červené kruhové tlačítko, které se při najetí rozšíří a zobrazí text Logout.",
    "html": "<button class=\"cmp-logout-button\" type=\"button\" aria-label=\"Logout\">\n  <span class=\"cmp-logout-icon\" aria-hidden=\"true\">\n    <svg viewBox=\"0 0 512 512\" focusable=\"false\">\n      <path d=\"M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z\"/>\n    </svg>\n  </span>\n  <span class=\"cmp-logout-text\">Logout</span>\n</button>",
    "css": ".cmp-logout-button,\n.cmp-logout-button * {\n  box-sizing: border-box;\n}\n.cmp-logout-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 45px;\n  height: 45px;\n  padding: 0;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: width .3s, border-radius .3s, transform .3s;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, .199);\n  background-color: rgb(255, 65, 65);\n  font-family: Arial, Helvetica, sans-serif;\n}\n.cmp-logout-icon {\n  width: 100%;\n  flex-shrink: 0;\n  transition: width .3s, padding .3s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cmp-logout-icon svg {\n  width: 17px;\n  height: 17px;\n}\n.cmp-logout-icon svg path {\n  fill: #fff;\n}\n.cmp-logout-text {\n  position: absolute;\n  right: 0;\n  width: 0;\n  opacity: 0;\n  color: #fff;\n  font-size: 1.2em;\n  font-weight: 600;\n  white-space: nowrap;\n  transition: width .3s, opacity .3s, padding .3s;\n}\n.cmp-logout-button:hover,\n.cmp-logout-button:focus-visible {\n  width: 125px;\n  border-radius: 40px;\n}\n.cmp-logout-button:hover .cmp-logout-icon,\n.cmp-logout-button:focus-visible .cmp-logout-icon {\n  width: 30%;\n  padding-left: 20px;\n}\n.cmp-logout-button:hover .cmp-logout-text,\n.cmp-logout-button:focus-visible .cmp-logout-text {\n  opacity: 1;\n  width: 70%;\n  padding-right: 10px;\n}\n.cmp-logout-button:focus-visible {\n  outline: 2px solid #ff4141;\n  outline-offset: 4px;\n}\n.cmp-logout-button:active {\n  transform: translate(2px, 2px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .cmp-logout-button,\n  .cmp-logout-icon,\n  .cmp-logout-text { transition: none; }\n}",
    "js": ""
  }
];
