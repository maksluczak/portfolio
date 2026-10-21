const Section = ({ id, index, title, children }) => (
  <section id={id} className="section">
    <div className="wrapper">
      <header className="section-head" data-reveal>
        <span className="section-index mono">
          {index} / {id}
        </span>
        <h2>{title}</h2>
      </header>
      {children}
    </div>
  </section>
)

export default Section
