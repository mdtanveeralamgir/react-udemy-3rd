import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/*  inline styling accepts an object.*/}
      <h2 style={{
          color: 'red',
          textAlign: 'left',
          'text-align': 'left'
      }}>ReactArt</h2>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
