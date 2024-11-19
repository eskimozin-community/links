import './index.css'

function Banner() {
  return (
    <div className="banner">
      <span className={"badge"}>OUT NOW</span>
      <h2 className={"title"}>Novo Álbum do Lil Esk</h2>
      <p className={"description text-muted"}>Acesse: <a href={"#"}>spotify.com</a></p>
    </div>
  )
}

export { Banner }
