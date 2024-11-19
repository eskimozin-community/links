import { Banner} from "../Banner";
import { Section } from '../Section'
import { sections } from '../../data'
import './index.css'

function Main() {
  return (
    <main>
      <Banner/>
      {
        sections.map(function (secao, index) {
          return (
            <Section
              id={index}
              key={index}
              title={secao.title}
              legend={secao.legend}
              className={secao.className}
            />
          )
        })
      }
    </main>
  )
}

export { Main }