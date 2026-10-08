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
  }
];
