import Articles from "./articles";
import datos from "./../../public/datos.json";

export default function Content() {
    let recetas = "Pancakes";
    let { Pastas, Postres, Sopas, Ensaladas, Arroces} = datos;
  return (
    <div className="col-sm-8">
        {
            Postres.map((receta, i)=>(
                <Articles key={i} recipes={receta}/>
            ))
        }
        
        
    </div>
  )
}
