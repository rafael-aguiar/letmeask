import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../App';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import Button from '../../components/Button';

import './styles.scss';

const NewRoom:React.FC = () => {
  const { user } = useContext(AuthContext)
  return (
    <div id="new-room">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbilozando perguntas e respostas"
        />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong> 
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h1>{`Olá, ${user?.name}`}</h1>
          <h2>Crie uma sala</h2>
          <form action="">
            <input 
              type="text" 
              placeholder="Nome da sala" 
            />
            <Button type="submit"> Criar sala</Button>
          </form>
          <p>Quer entrar uma sala existente? 
            <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
};
 
export default NewRoom;