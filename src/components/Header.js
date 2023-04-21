function Header({ resetColors }) {
  return (
    <header className="header_App">
      <div className="header_App_wrapper">
        <h1 className="header_title">Nanosite ColorPickers</h1>
        <p className="header_description">
          Choisissez les couleurs de votre Nanosite Pro-efficace, <br />
          en vérifiant leurs contrastes pour l'accessibilité.
        </p>
      </div>
      <nav className="header_App_nav">
        <span className="btn inactive" onClick={resetColors}>
          Test RGAA
        </span>
        <span className="btn inactive" onClick={resetColors}>
          Exporter
        </span>
        <span className="btn" onClick={resetColors}>
          Réinitialiser
        </span>
      </nav>
    </header>
  )
}

export default Header
