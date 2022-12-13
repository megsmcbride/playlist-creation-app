import '../style/SideNav.css';
import Logout from './components/Logout';

export default function SideNav({code}) {
  return (
    <div className='sidenav-container'>
      <div>

      <h2 className='sidenav-header'>collabify</h2>
      </div>
      <Logout code = {code}/>

    </div>
  );
}