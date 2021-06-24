import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';

import './styles.scss';

const Room: React.FC = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>código</div>
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
