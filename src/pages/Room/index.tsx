import { useParams } from 'react-router-dom';

import Button from '../../components/Button';
import RoomCode from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';

import './styles.scss';

type RoomParams = {
  id: string;
};

const Room: React.FC = () => {
  const params = useParams<RoomParams>();

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={params.id} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>12 Perguntas</span>
        </div>

        <form>
          <textarea placeholder="Digite sua pergunta" />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>Faça seu login</button>.
            </span>
            <Button type="submit"> Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;
