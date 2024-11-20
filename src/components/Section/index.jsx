import PropTypes from 'prop-types';
import { List } from "../List";
import './index.css'

function Section({ title, legend, className, id }) {
  return (
    <section>
      <div>
        { className === "channel-list" ?
          <hgroup className={"title-channel-list"}><h2>{title}</h2><img src={"./img/youtube.jpg"} className={"badge-channel-list"}/></hgroup> :
          <h2>{title}</h2>}
        <p className={"text-muted"}>{legend}</p>
        <List
          id={id}
          className={className}
        />
      </div>
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  legend: PropTypes.string,
};

export { Section }