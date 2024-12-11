import chef from "./../assets/Chef.png";
export default function Aside() {
  return (
    <div className="col-sm-4">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg">
        <img src={chef} width="100%" />
      </div>
      <p>Soy Chef Graduado de la escuela de cocina de tangamandapio,
        con 10 años de experiencia, en alta cocina y reposteria
        
      </p>
      <h3 className="mt-4">Categorias</h3>
      <p>Algunas categorias de recetas</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Desayunos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Almuerzos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cenas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Postres</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">Platos Especiales</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  )
}
