class Response {
  constructor(repo) {
    this.repo = repo;
  }

  async responseFetch() {
    const url = `https://api.github.com/search/repositories?q=${this.repo}&per_page=10`;
    try {
      const response = await fetch(url);
      return response.ok ? await response.json() : false;
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default Response;
