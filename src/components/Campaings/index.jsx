import {Banner} from "../Banner/index.jsx";

const campaings = [
  {
    title: "Subathon",
    subtitle: "Live 24/7 até o timer chegar a 0",
    link: "https://twitch.tv/eskimozin",
    linkName: "No canal da Twitch",
    datetimeInit: "2024-01-01 00:00:00",
    datetimeFinish: "2024-12-01 00:00:00"
  }
]

const convertDatetime = (datetime) => {
  if (!datetime) return null
  else if (typeof new Date(datetime) !== 'number') return null
  return new Date(datetime).getTime()
}

const verifyIsValidCampaings = (campaings) => {
  if (!Array.isArray(campaings)) return false
  const actualDate = Date.now()
  return campaings.filter((c) => {
    const [init, finish] = [convertDatetime(c.datetimeInit), convertDatetime(c.datetimeFinish)]
    if (!init || !finish) return null
    if (actualDate < init || actualDate > finish) return null
    return c
  })
}

const sortedCampaings = (campaings) => {
  if (campaings.length === 1) return campaings
  return campaings.toSorted((a, b) => {
    return convertDatetime(a.datetimeFinish) - convertDatetime(b.datetimeFinish)
  })
}

const Campaings = () => {
  const validCampaings = verifyIsValidCampaings(campaings)
  console.log(validCampaings)

  if (validCampaings && validCampaings.length > 0) {
    validCampaings.forEach(c => console.log(c))
    return (
      <>
        { validCampaings.map((c, i) => {
          <Banner key={i} title={c.title} subtitle={c.subtitle} link={c.link} linkName={c.linkName}/>
        })}
      </>
    )
  } else {
    return null
  }
}

export {Campaings}