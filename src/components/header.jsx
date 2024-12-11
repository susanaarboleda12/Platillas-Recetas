import logo from "./../assets/Logo.png";

export default function Header() {
  return (
    <div className="p-5 bg-primary text-white text-center">
    <h1> <img src={logo} width="100px"/>Recetas De Thor</h1>
    <p>De la cocina a tu placer 👨‍🍳</p> 
</div>
  )
}
