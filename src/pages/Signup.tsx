import logo from "../assets/logo.png";
import Frame285 from "../assets/Frame285.png"


export default function Signup() {
  return(
    <>
<div className="signup-page flex">
<div className="signup-left w-1/2 ">
<div>
  <img src={logo} alt="Logo" height={45} width={75} />
</div>
<p>Hi there! Let's create your account and get you going.</p>
  <form className="flex flex-col">
  </form>
</div>
<div className="signup-right w-1/2">
  <img src={Frame285} alt="shopping display" />
</div>
</div>
    </>
  )
}