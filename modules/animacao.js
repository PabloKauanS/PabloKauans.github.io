export default function animacao() {
  const perfilCaixa = document.querySelector(".perfil-caixa");
  const spanEmail = document.querySelector(".img-email + span");
  adicionarAnimacao();
  window.addEventListener("resize", adicionarAnimacao);
  function adicionarAnimacao() {
    const tamanho = perfilCaixa.offsetWidth;
    if (tamanho < 302) return spanEmail.classList.add("animacao-esquerda");
    return spanEmail.classList.remove("animacao-esquerda");
  }
}
