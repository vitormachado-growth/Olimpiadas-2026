/* Funções de apoio às súmulas:
   - imprimir
   - limpar todos os campos
   - salvar/restaurar rascunho no próprio navegador (localStorage)
   - adicionar linhas em tabelas de jogadores                       */

function imprimirSumula() {
  window.print();
}

function limparSumula() {
  if (!confirm("Limpar todos os campos desta súmula?")) return;
  document.querySelectorAll(".sumula input, .sumula textarea").forEach((el) => {
    el.value = "";
  });
  document.querySelectorAll(".sumula select").forEach((el) => {
    el.selectedIndex = 0;
  });
  const id = chaveSalvar();
  if (id) localStorage.removeItem(id);
}

/* chave única por página, para o rascunho não misturar entre esportes */
function chaveSalvar() {
  const nome = document.body.getAttribute("data-sumula");
  return nome ? "sumula:" + nome : null;
}

function salvarRascunho() {
  const id = chaveSalvar();
  if (!id) return;
  const dados = {};
  document.querySelectorAll(".sumula input, .sumula textarea, .sumula select").forEach((el, i) => {
    const ref = el.name || el.id || "campo" + i;
    dados[ref] = el.value;
  });
  localStorage.setItem(id, JSON.stringify(dados));
  flash("Rascunho salvo neste navegador ✔");
}

function restaurarRascunho() {
  const id = chaveSalvar();
  if (!id) return;
  const bruto = localStorage.getItem(id);
  if (!bruto) return;
  try {
    const dados = JSON.parse(bruto);
    document.querySelectorAll(".sumula input, .sumula textarea, .sumula select").forEach((el, i) => {
      const ref = el.name || el.id || "campo" + i;
      if (dados[ref] !== undefined) el.value = dados[ref];
    });
  } catch (e) {
    /* rascunho corrompido — ignora */
  }
}

/* adiciona uma linha de jogador clonando a última linha da tabela */
function adicionarLinha(idTabela) {
  const tbody = document.querySelector("#" + idTabela + " tbody");
  if (!tbody) return;
  const ultima = tbody.rows[tbody.rows.length - 1];
  const nova = ultima.cloneNode(true);
  nova.querySelectorAll("input").forEach((i) => (i.value = ""));
  tbody.appendChild(nova);
}

function flash(msg) {
  let el = document.getElementById("flash");
  if (!el) {
    el = document.createElement("div");
    el.id = "flash";
    el.style.cssText =
      "position:fixed;bottom:20px;left:50%;transform:translateX(-50%);" +
      "background:#1b9e57;color:#fff;padding:10px 20px;border-radius:8px;" +
      "font-weight:600;z-index:99;box-shadow:0 4px 14px rgba(0,0,0,.2)";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.style.display = "block";
  clearTimeout(el._t);
  el._t = setTimeout(() => (el.style.display = "none"), 2000);
}

document.addEventListener("DOMContentLoaded", restaurarRascunho);
