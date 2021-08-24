function Nav() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark border">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          {" "}
          Clarisa{" "}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">
              {" "}
              Documents{" "}
            </a>
            <a class="nav-link" href="/trays">
              {" "}
              Trays{" "}
            </a>
            <a class="nav-link" href="#">
              {" "}
              Settings{" "}
            </a>
            <button
              class="nav-link border-0 bg-transparent"
              onClick={() => signOut()}
            >
              {" "}
              Sign out{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
async function renderNav() {
  ReactDOM.render(<Nav />, document.getElementById("navBar"));
}
renderNav();
