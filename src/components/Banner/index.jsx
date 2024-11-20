import './index.css'

function Banner() {
  return (
    // Display the banner only when the class "d-none" is not present
    <section className="banner d-none">
      <span className={"badge"}>OUT NOW</span>
      <h2 className={"title mb-0"}>Novo Álbum do Lil Esk</h2>
      <h2 className={"title mt-1 emphasis fw-bold"}>Cinderelas</h2>
      <p className={"description"}>
        <span className={"text-muted"}>Disponível no</span>&nbsp;
        <a href={"#"}>
          <img src={"./img/spotify.png"} alt={"Logo do Spotify"} width={"16px"} height={"16px"}/>&nbsp;
          <span>Spotify</span>
        </a>
      </p>
    </section>
  )
}

export {Banner}
