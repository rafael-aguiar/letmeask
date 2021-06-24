import copyImg from '../../assets/images/copy.svg';

import './styles.scss';

type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText('-McvEpdCruza2swi_abj');
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
};

export default RoomCode;
