/* ============================================================
   "BACKEND" SIMULADO — mensagens salvas em um objeto
   ============================================================ */
const BACKEND = {
  messages: [
    
    //Fruto
    "A Palavra de Deus diz que: 'A alegria do Senhor é a nossa força'. (Neemias 8:10)",
    "Somos fruto do Espírito Santo: Amor.",
    "Somos fruto do Espírito Santo: Bondade.",
    "Jesus disse que devemos amar os nossos inimigos e orar por aqueles que nos perseguem. (Mateus 5:44)",
    "Trate os outros como quer que os outros tratem você. (Lucas 6:31)",
    "Graça e paz vos sejam multiplicadas. (1 Pedro 1:2)",
    "Façamos o bem a todos, especialmente aos da família da fé. (Gálatas 6:10)",
    "Felizes são os mansos porque eles herdarão a terra. (Mateus 5:5)",
    "Necessitais de perseverança para alcançar a promessa de Deus. (Hebreus 10:36)",
    
    // 1. Promessas Fundamentais do Antigo Testamento (Alianças)
    "A aliança com Noé: Deus prometeu que nunca mais destruiria toda a carne com um dilúvio. (Gênesis 9:11)",
    "A aliança com Abraão: Deus prometeu fazer dele uma grande nação e abençoar todas as famílias da terra. (Gênesis 12:2-3)",
    "A promessa da terra: Deus prometeu a Abraão e sua descendência a posse da terra de Canaã. (Gênesis 15:18)",
    "Aliança eterna: Deus prometeu ser o Deus de Abraão e de sua descendência para sempre. (Gênesis 17:7)",
    "A aliança no Sinai: Se Israel ouvisse a voz de Deus, seria Seu povo peculiar, um reino de sacerdotes e nação santa. (Êxodo 19:5-6)",
    "Bênçãos pela obediência: Deus prometeu exaltar Israel acima de todas as nações se guardassem Seus mandamentos. (Deuteronômio 28:1-2)",
    "A aliança davídica: Deus prometeu a Davi que sua casa, seu reino e seu trono seriam estabelecidos para sempre. (2 Samuel 7:16)",
    "A fidelidade à aliança davídica: Deus reafirma o juramento feito a Davi de firmar sua descendência para sempre. (Salmo 89:3-4)",
    "Aliança eterna de paz: Deus promete uma aliança eterna e as fiéis misericórdias de Davi. (Isaías 55:3)",
    "A Nova Aliança: Deus prometeu um novo pacto, escrevendo Sua lei no coração do povo e sendo o Deus deles. (Jeremias 31:31-33)",
    "Novo coração e novo espírito: Deus prometeu dar um coração novo e colocar um espírito novo dentro de Seu povo. (Ezequiel 36:26-27)",
    "Aliança de paz: Deus prometeu fazer uma aliança de paz eterna com Seu povo. (Ezequiel 37:26)",
    "Desposório eterno: Deus prometeu desposar Seu povo para sempre em justiça, amor e fidelidade. (Oséias 2:19-20)",
    "Restauração do tabernáculo caído de Davi: Deus prometeu levantar e restaurar o reino davídico. (Amós 9:11)",
    "Fidelidade à promessa: Deus prometeu cumprir a verdade a Jacó e a misericórdia a Abraão, conforme jurou a nossos pais. (Miquéias 7:20)",

    // 2. Promessas Centrais do Novo Testamento
    "Vida eterna pela fé: Todo aquele que crê em Jesus não perecerá, mas terá a vida eterna. (João 3:16)",
    "Segurança eterna: Jesus prometeu que Suas ovelhas nunca perecerão e ninguém as arrebatará de Sua mão. (João 10:28-29)",
    "O Consolador: Jesus prometeu enviar o Espírito Santo para estar com os crentes para sempre. (João 14:16-17)",
    "A segunda vinda: Os anjos prometeram que Jesus voltará da mesma forma como subiu ao céu. (Atos 1:11)",
    "Salvação pela confissão e fé: Se confessarmos Jesus como Senhor e crermos na ressurreição, seremos salvos. (Romanos 10:9)",
    "Nenhuma condenação: Nenhuma condenação há para os que estão em Cristo Jesus. (Romanos 8:1)",
    "O selo do Espírito: Os crentes são selados com o Espírito Santo, que é a garantia da herança eterna. (Efésios 1:13-14)",
    "Provisão segundo a riqueza de Deus: Deus suprirá todas as necessidades dos crentes segundo Suas riquezas em glória. (Filipenses 4:19)",
    "Presença constante: Jesus prometeu estar com os Seus discípulos todos os dias até a consumação do século. (Mateus 28:20)",
    "Nunca abandonar: Deus prometeu que jamais abandonará nem desamparará Seus filhos. (Hebreus 13:5)",
    "Perdão e purificação: Se confessarmos nossos pecados, Deus é fiel e justo para perdoar e purificar de toda injustiça. (1 João 1:9)",
    "A vida eterna: A promessa que Deus nos fez é a vida eterna. (1 João 2:25)",
    "Todas as coisas cooperam para o bem: Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus. (Romanos 8:28)",
    "Nova criatura: Se alguém está em Cristo, é nova criatura; as coisas antigas já passaram. (2 Coríntios 5:17)",
    "Ceia e comunhão: Jesus prometeu entrar e cear com aquele que abrir a porta do seu coração. (Apocalipse 3:20)",

    // 3. Promessas de Cuidado e Provisão para a Jornada
    "O Senhor é meu pastor: 'Nada me faltará' é a promessa de cuidado integral. (Salmo 23:1)",
    "O Senhor proverá: 'No monte do Senhor se proverá' é a garantia de que Deus supre as necessidades no momento certo. (Gênesis 22:14)",
    "Pão do céu: Deus prometeu fazer chover pão do céu para o Seu povo no deserto. (Êxodo 16:4)",
    "Chuva e fartura: Deus prometeu enviar chuva na estação e fazer a terra produzir, para que o povo coma e se satisfaça. (Deuteronômio 11:13-15)",
    "Nada falta aos que buscam: Os que buscam o Senhor não têm falta de bem algum. (Salmo 34:9-10)",
    "O justo nunca abandonado: 'Nunca vi o justo desamparado, nem a sua descendência mendigando pão'. (Salmo 37:25)",
    "Boca aberta, boca cheia: 'Abre bem a tua boca, e eu a encherei'. (Salmo 81:10)",
    "Alimento no tempo certo: Deus dá o alimento no tempo devido e satisfaz o desejo de todo ser vivente. (Salmo 145:15-16)",
    "Rios no deserto: Deus prometeu responder aos aflitos e abrir rios sobre os lugares altos. (Isaías 41:17-18)",
    "Alma como jardim regado: O povo de Deus será como um jardim regado, e não terá mais tristeza. (Jeremias 31:12)",
    "Janelas do céu abertas: Deus prometeu abrir as janelas do céu e derramar bênção sem medida para os que são fiéis. (Malaquias 3:10)",
    "Buscai primeiro o Reino: Jesus prometeu que, se buscarmos primeiro o Reino de Deus, todas as coisas necessárias nos serão acrescentadas. (Mateus 6:31-33)",
    "Cuidado com as aves: Se Deus cuida das aves, quanto mais não cuidará de Seus filhos? (Lucas 12:24)",
    "Suprimento em glória: 'O meu Deus suprirá todas as vossas necessidades segundo as suas riquezas em glória, em Cristo Jesus'. (Filipenses 4:19)",
    "Cuidado por nós: Deus prometeu cuidar de nós, e podemos lançar sobre Ele toda a nossa ansiedade. (1 Pedro 5:7)",

    // 4. Promessas de Proteção e Paz
    "Refúgio e fortaleza: Aquele que habita no esconderijo do Altíssimo descansa à sombra do Onipotente, que é seu refúgio e fortaleza. (Salmo 91:1-2)",
    "Anjos guardiões: Deus ordenará aos Seus anjos que guardem Seus filhos em todos os seus caminhos. (Salmo 91:11-12)",
    "O guarda de Israel: Deus não permitirá que os pés dos Seus filhos vacilem; Ele os guardará de todo o mal. (Salmo 121:3-8)",
    "Torre forte: O nome do Senhor é torre forte; o justo corre para ela e está seguro. (Provérbios 18:10)",
    "Nenhuma arma prosperará: Nenhuma arma forjada contra os servos de Deus prosperará. (Isaías 54:17)",
    "Não temas, pois Eu sou contigo: Deus prometeu fortalecer, ajudar e sustentar com Sua destra fiel. (Isaías 41:10)",
    "Passagem segura pelas águas: Quando passarmos pelas águas, Deus estará conosco; os rios não nos submergirão. (Isaías 43:2)",
    "O anjo do Senhor acampa: O anjo do Senhor acampa-se ao redor dos que O temem e os livra. (Salmo 34:7)",
    "Socorro bem presente: Deus é nosso refúgio e fortaleza, socorro bem presente na angústia. (Salmo 46:1)",
    "Vivificação no meio da tribulação: Ainda que andemos no meio da angústia, Deus nos vivificará e estenderá Sua mão. (Salmo 138:7)",
    "Fiel e protetor: O Senhor é fiel; Ele nos confirmará e guardará do mal. (2 Tessalonicenses 3:3)",
    "Paz ao deitar: Em paz me deito e logo pego no sono, porque só Tu, Senhor, me fazes habitar em segurança. (Salmo 4:8)",
    "A paz de Cristo: Jesus prometeu dar a Sua paz, não como o mundo a dá; o coração não precisa se turbar nem ter medo. (João 14:27)",
    "A paz que excede todo entendimento: A paz de Deus guardará os corações e as mentes em Cristo Jesus. (Filipenses 4:6-7)",
    "A paz de Cristo como árbitro: A paz de Cristo deve reinar nos corações, e devemos ser agradecidos. (Colossenses 3:15)"
  ],

  getRandomMessage() {
    return this.messages[Math.floor(Math.random() * this.messages.length)];
  }
};

/* ---- DOM ---- */
const scene        = document.getElementById('scene');
const box          = document.getElementById('box');
const shuffleBtn   = document.getElementById('shuffleBtn');
const alertOverlay = document.getElementById('alertOverlay');
const alertMessage = document.getElementById('alertMessage');
const alertClose   = document.getElementById('alertClose');

/* ---- Estado ---- */
let isSpinning = false;

/* ============================================================
   PARTÍCULAS (canvas 2D — leve, só roda durante o shuffle)
   ============================================================ */
const canvas = document.getElementById('particles');
const ctx    = canvas.getContext('2d');

let particles     = [];
let particleRAF   = null;
let particleTimer = null;

/* sprite de brilho pré-renderizado: 1 drawImage por partícula
   (muito mais rápido do que recalcular shadowBlur a cada frame) */
const glowSprite = (() => {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0,    'rgba(255, 245, 200, 1)');
  grad.addColorStop(0.25, 'rgba(255, 220, 80, .85)');
  grad.addColorStop(0.6,  'rgba(255, 200, 40, .35)');
  grad.addColorStop(1,    'rgba(255, 200, 40, 0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
})();

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function spawnParticles(cx, cy, count) {
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 3.5;
    particles.push({
      x: cx + (Math.random() - 0.5) * 120,
      y: cy + (Math.random() - 0.5) * 120,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 1.2,
      life: 1,
      decay: 0.008 + Math.random() * 0.012,
      size: 6 + Math.random() * 16
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = 'lighter';   // brilho aditivo

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.04;          // gravidade leve
    p.vx *= 0.985;
    p.vy *= 0.985;
    p.life -= p.decay;

    if (p.life <= 0) { particles.splice(i, 1); continue; }

    const d = p.size * 2;
    ctx.globalAlpha = p.life;
    ctx.drawImage(glowSprite, p.x - p.size, p.y - p.size, d, d);
  }

  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'source-over';

  particleRAF = particles.length ? requestAnimationFrame(animateParticles) : null;
}

function startParticles() {
  const rect = scene.getBoundingClientRect();
  const cx = rect.left + rect.width  / 2;
  const cy = rect.top  + rect.height / 2;

  spawnParticles(cx, cy, 60);                        // burst inicial
  if (!particleRAF) particleRAF = requestAnimationFrame(animateParticles);

  particleTimer = setInterval(() => {                // emissão contínua
    spawnParticles(cx, cy, 7);
    if (!particleRAF) particleRAF = requestAnimationFrame(animateParticles);
  }, 80);
}

function stopParticles() {
  clearInterval(particleTimer);
  particleTimer = null;
  /* as partículas restantes continuam sumindo naturalmente */
}

/* ============================================================
   ALERTA
   ============================================================ */
function showAlert(message) {
  alertMessage.textContent = message;
  alertOverlay.classList.add('visible');
  alertOverlay.setAttribute('aria-hidden', 'false');
}

function closeAlert() {
  alertOverlay.classList.remove('visible');
  alertOverlay.setAttribute('aria-hidden', 'true');
  shuffleBtn.disabled = false;          // libera o botão só ao fechar
}

alertClose.addEventListener('click', closeAlert);

alertOverlay.addEventListener('click', (e) => {
  if (e.target === alertOverlay) closeAlert();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && alertOverlay.classList.contains('visible')) closeAlert();
});

/* ============================================================
   SHUFFLE
   ============================================================ */
function shuffle() {
  if (isSpinning) return;
  isSpinning = true;
  shuffleBtn.disabled = true;

  const message = BACKEND.getRandomMessage();

  startParticles();

  /* reinicia a animação de giro (remove → reflow → adiciona) */
  box.classList.remove('spinning');
  void box.offsetWidth;
  box.classList.add('spinning');

  const onSpinEnd = (e) => {
    if (e.target !== box) return;            // ignora eventos borbulhados
    box.removeEventListener('animationend', onSpinEnd);
    stopParticles();

    setTimeout(() => {
      showAlert(message);
      isSpinning = false;
    }, 350);                                 // pequeno respiro antes do alerta
  };

  box.addEventListener('animationend', onSpinEnd);
}

shuffleBtn.addEventListener('click', shuffle);