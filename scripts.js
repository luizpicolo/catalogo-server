const applications = [
  { name: "Picolo Social", url: "https://social.luizpicolo.com.br" },
  { name: "Tranferência de dados", url: "https://dtt.luizpicolo.com.br" },
  { name: "Storage", url: "https://files.luizpicolo.com.br" },
  { name: "Gitea", url: "https://git.luizpicolo.com.br" },
  { name: "Blog Pessoal", url: "https://blog.luizpicolo.com.br" },
  { name: "Portainer", url: "http://192.168.0.28:9000" },
  { name: "PayWall Free", url: "https://13ft.luizpicolo.com.br/" },
  { name: "PicoloFlix", url: "https://jellyfin.luizpicolo.com.br/" },
  { name: "Agregador de Links", url: "https://readeck.luizpicolo.com.br" },
];

document.addEventListener("DOMContentLoaded", () => {
  const appList = document.getElementById("app-list");

  applications.forEach(app => {
    appList.insertAdjacentHTML("beforeend", `
      <li><a href="${app.url}" target="_blank">${app.name}</a></li>
    `);
  });
});