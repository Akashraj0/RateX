import './Nav.css';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/SignIn');
  }
  const handleButtonClick1 = () => {
    navigate('/Help');
  }
  return (
    <div className='Navbar'>
      <div style={{ width: "10",marginLeft:'10px'}} className='Navbar--Logo'>
        <img src={require("./Favlogo.png")} alt='logo' style={{ width: "50%", borderRadius: "50%" }} />
        <h5>XRates</h5>
      </div>
      <div className='Navbar--button'>
        <button onClick={handleButtonClick}>SIgn In</button>
        <button onClick={handleButtonClick1}>Help</button>
      </div>
    </div>
  )
}
export default Nav