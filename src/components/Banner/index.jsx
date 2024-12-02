import './index.css'
import PropTypes from "prop-types";

function Banner({key, title, subtitle, link, linkName}) {
  let linkImg = <></>

  if (linkName.includes("spotify")) {
    linkImg =  <><img src={"./img/spotify.png"} alt={"Logo do Spotify"} width={"16px"} height={"16px"}/>&nbsp;</>
  } else if (linkName.includes("twitch")) {
    linkImg =  <><img src={"./img/twitch.jpg"} alt={"Logo da Twitch"} width={"16px"} height={"16px"}/>&nbsp;</>
  } else if (linkName.includes("discord")) {
    linkImg =  <><img src={"./img/discord.jpg"} alt={"Logo do Discord"} width={"16px"} height={"16px"}/>&nbsp;</>
  } else if (linkName.includes("youtube")) {
    linkImg =  <><img src={"./img/youtube.jpg"} alt={"Logo do YouTube"} width={"16px"} height={"16px"}/>&nbsp;</>
  }

  return (
    // Display the banner only when the class "d-none" is not present
    <section className="banner d-none" key={key || 1}>
      <span className={"badge"}>OUT NOW</span>
      <h2 className={"title mb-0"}>{title}</h2>
      <h2 className={"title mt-1 emphasis fw-bold"}>{subtitle}</h2>
      <p className={"description"}>
        <span className={"text-muted"}>Acesse</span>&nbsp;
        <a href={link}>
          { linkImg }
          <span>{linkName}</span>
        </a>
      </p>
    </section>
  )
}

Banner.propTypes = {
  key: PropTypes.number,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired
}

export {Banner}
