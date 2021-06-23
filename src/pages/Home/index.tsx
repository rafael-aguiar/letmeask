import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../App';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import Button from '../../components/Button';

import './styles.scss';


const Home:React.FC = () => {
  const history = useHistory();
  const {user, signInWithGoogle} = useContext(AuthContext);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div id="home">
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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Goole" />
            Crie sua sala com Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o nome da sala" />
            <Button type="submit"> Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
};
 
export default Home;