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
  }
];
