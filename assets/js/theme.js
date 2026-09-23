try{ const t=localStorage.getItem('theme'); if(t) document.documentElement.setAttribute('data-theme',t); }catch(e){}
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('theme-toggle');
  if(!btn) return;
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = cur ? cur === 'dark' : sysDark;
    const next = isDark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try{ localStorage.setItem('theme', next); }catch(e){}
  });
});
