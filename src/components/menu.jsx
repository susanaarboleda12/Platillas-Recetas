

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" href="#">INICIO</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">RECETAS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">NOSOTRAS</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">CONTACTO</a>
            </li>
            </ul>
        </div>
        </nav>
  )
}
