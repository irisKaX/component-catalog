(() => {
  'use strict';
  const components = Array.isArray(window.catalogComponents) ? window.catalogComponents : [];
  const get = id => document.getElementById(id);
  const state = { category: 'all', search: '', sort: 'newest', selected: null, tab: 'preview' };
  const grid = get('catalog-grid');
  const empty = get('catalog-empty');
  const dialog = get('catalog-dialog');
  const preview = get('catalog-preview');
  const code = get('catalog-code');
  const tabs = document.querySelectorAll('[data-tab]');
  const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const source = item => {
    const css = String(item.css ?? '').replace(/<\/style/gi, '<\\/style');
    const js = String(item.js ?? '').replace(/<\/script/gi, '<\\/script');
    const script = js.trim() ? '<script>' + js + '</' + 'script>' : '';
    return '<!doctype html><html lang="cs"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1">' +
      '<style>html,body{min-height:100%;margin:0}body{box-sizing:border-box;min-height:100vh;' +
      'display:flex;align-items:center;justify-content:center;padding:20px;font-family:Arial,Helvetica,sans-serif;}' +
      '*,*::before,*::after{box-sizing:border-box}' + css + '</style></head><body>' +
      String(item.html ?? '') + script + '</body></html>';
  };
  const filtered = () => {
    let result = components.filter(item => (state.category === 'all' || item.category === state.category) && [item.name, item.description, item.category, item.id].some(value => String(value ?? '').toLocaleLowerCase('cs').includes(state.search)));
    if (state.sort === 'name') result.sort((a,b) => a.name.localeCompare(b.name, 'cs'));
    if (state.sort === 'oldest') result.reverse();
    return result;
  };
  function renderCategories() {
    const counts = new Map();
    components.forEach(item => counts.set(item.category, (counts.get(item.category) ?? 0) + 1));
    const list = get('catalog-category-list');
    list.replaceChildren();
    [...counts].sort((a,b) => a[0].localeCompare(b[0], 'cs')).forEach(([name, count]) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'catalog-nav-item' + (state.category === name ? ' is-active' : '');
      button.dataset.category = name;
      button.innerHTML = `<span>${escapeHtml(name)}</span><span class="catalog-count">${count}</span>`;
      list.append(button);
    });
    document.querySelector('[data-category="all"]').classList.toggle('is-active',state.category === 'all');
    get('catalog-total').textContent = components.length;
    get('catalog-total-side').textContent = components.length;
  }
  function render() {
    renderCategories();
    const items = filtered();
    const heading = state.category === 'all' ? 'Všechny komponenty' : state.category;
    get('catalog-section-title').textContent = heading;
    get('catalog-breadcrumb-current').textContent = heading;
    get('catalog-results').textContent = `${items.length} ${items.length === 1 ? 'položka' : items.length >= 2 && items.length <= 4 ? 'položky' : 'položek'}`;
    grid.replaceChildren();
    items.forEach(item => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'catalog-card';
      button.innerHTML = `<div class="catalog-card-preview"></div><div class="catalog-card-content"><span class="catalog-card-category">${escapeHtml(item.category)}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p></div>`;
      const frame = document.createElement('iframe');
      frame.title = `Náhled: ${item.name}`;
      frame.tabIndex = -1;
      frame.setAttribute('sandbox','allow-scripts');
      frame.srcdoc = source(item);
      button.firstElementChild.append(frame);
      button.addEventListener('click', () => openComponent(item));
      grid.append(button);
    });
    empty.hidden = items.length !== 0;
    if (components.length && !items.length) {
      get('catalog-empty-title').textContent = 'Žádné výsledky';
      get('catalog-empty-description').textContent = 'Zkus změnit hledaný výraz nebo kategorii.';
    } else {
      get('catalog-empty-title').textContent = 'Zatím tu nic není';
      get('catalog-empty-description').textContent = 'Katalog je připravený. Jakmile přidáme první komponentu, objeví se právě tady.';
    }
  }
  function openComponent(item) {
    state.selected = item;
    get('catalog-dialog-title').textContent = item.name;
    get('catalog-dialog-category').textContent = item.category;
    get('catalog-dialog-description').textContent = item.description ?? '';
    get('catalog-dialog-id').textContent = `ID: ${item.id}`;
    state.tab = 'preview';
    changeTab('preview');
    dialog.showModal();
  }
  function changeTab(tab) {
    state.tab = tab;
    tabs.forEach(button => { const active = button.dataset.tab === tab; button.classList.toggle('is-active', active); button.setAttribute('aria-selected', String(active)); });
    preview.hidden = tab !== 'preview';
    code.hidden = tab === 'preview';
    get('catalog-copy-button').hidden = tab === 'preview';
    if (tab === 'preview') preview.srcdoc = source(state.selected);
    else get('catalog-code-content').textContent = String(state.selected[tab] ?? '');
  }
  function closeMenu() { document.querySelector('.catalog-sidebar').classList.remove('is-open'); get('catalog-overlay').hidden = true; get('catalog-menu-button').setAttribute('aria-expanded','false'); }
  document.querySelector('.catalog-sidebar').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (!button) return;
    state.category = button.dataset.category;
    render();
    closeMenu();
  });
  get('catalog-search').addEventListener('input', event => {state.search = event.target.value.trim().toLocaleLowerCase('cs');render();});
  get('catalog-sort').addEventListener('change', event => {state.sort = event.target.value;render();});
  tabs.forEach(button => button.addEventListener('click', () => changeTab(button.dataset.tab)));
  get('catalog-close-dialog').addEventListener('click', () => dialog.close());
  get('catalog-copy-button').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(String(state.selected[state.tab] ?? '')); const button = get('catalog-copy-button'); button.textContent = 'Zkopírováno'; setTimeout(() => button.textContent = 'Kopírovat kód', 1500); }
    catch { get('catalog-copy-button').textContent = 'Kopírování není dostupné'; }
  });
  get('catalog-theme-button').addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme === 'dark';
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('catalog-theme', dark ? 'light' : 'dark'); } catch {}
  });
  try { if (localStorage.getItem('catalog-theme') === 'dark') document.documentElement.dataset.theme = 'dark'; } catch {}
  get('catalog-menu-button').addEventListener('click', () => { document.querySelector('.catalog-sidebar').classList.add('is-open'); get('catalog-overlay').hidden = false; get('catalog-menu-button').setAttribute('aria-expanded','true'); });
  get('catalog-overlay').addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => {if (event.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName) && !dialog.open){event.preventDefault();get('catalog-search').focus();} if(event.key === 'Escape')closeMenu();});
  render();
})();
