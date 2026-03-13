const PCards = (props) => {
  return (
    <div className="card">
            <section className="card-upper-section">
                <img className={!props.darkMode ? "card-img":"card-img-darkMode"} src={`../images/${props.image}`} alt={`${props.name} project`} />
                <div className="card-title"><h4>{props.name}</h4></div>
                <div className="card-descr">{props.description}</div>
            </section>
        </div>
  )
}


export default PCards