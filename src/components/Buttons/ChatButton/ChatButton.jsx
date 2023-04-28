export default function ChatButton () {
  return(
    <>
      <div className="online-chat">
      <input type="checkbox" id="checkbox" />
      <label className='label-message' htmlFor="checkbox">Seleccionar chat</label>
      <ul>
        <li>
          <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-32.png" />
          <a className="a-chat" href="#">Cliente</a>
        </li>
      </ul>
    </div>
    </>
  )
}