class OutputElement {
  constructor(repo) {
    this.repo = repo;
  }

  createElement() {
    const itemRepo = document.createElement("div");
    itemRepo.className = "output__repo";
    itemRepo.innerHTML = this.elementHTML;

    return itemRepo;
  }

  get elementHTML() {
    return `
      <img src=${this.repo.owner.avatar_url} alt="avatar" class="output__img">
      <ul class="output__text">
        <li class="output__item">
          <a href=${this.repo.html_url} class="output__link" target="blank">
            Репозиторий: <b>${this.repo.name}</b>
          </a>
        </li>
        <li class="output__item">
          <a href=${
            this.repo.owner.html_url
          } class="output__link" target="blank">
          Логин: <b>${this.repo.owner.login}</b>
          </a>
        </li>
        <li class="output__item">Дата создание репозитория: ${new Date(
          this.repo.created_at
        ).toLocaleDateString()}</li>
        <li class="output__item">Основной язык: ${this.repo.language}</li>
      </ul>
    `;
  }
}

export default OutputElement;
