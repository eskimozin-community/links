import './index.css'

function Header() {
  return (
    <header>
      <div>
        <a
          href="https://github.com/gabriersdev"
          rel="noreferrer noopener"
          data-toggle="tooltip"
          data-placement="top"
          data-bs-custom-class="custom-tooltip"
          title="Eu no GitHub"
        >
          <img src="#" alt="Imagem do Eskimozin" />
        </a>
      </div>
      <h1>Eskimozin</h1>
      <a href="#" className={"link-style"} rel={"noreferrer noopener"} data-ref={"eskimozin-mail"}>mail@eskimozin.com</a>
    </header>
  )
}

export { Header }