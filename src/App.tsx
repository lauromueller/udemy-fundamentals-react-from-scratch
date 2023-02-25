import './index.css';
import codeImg from './code.jpg';
import Logo from './logo.svg';

export const App = () => {
  return (
    <>
      <div className="red-text">Goodbye world</div>
      <Logo />
      <img src={codeImg} />
    </>
  );
};
