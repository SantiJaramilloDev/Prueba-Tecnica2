export default function Product ({title, icon}) {
  return (
    <>
      <a href='#!'>
        <div style={{padding: '20px'}} className='grey lighten-3 col s5 waves-effect '>
          <i className='indigo-text text-lighten-1 large material-icons'>{icon}</i>
          <span className='indigo-text text-lighten-1'>
            <h5>{title}</h5>
          </span>
        </div>
      </a>
    </>
  )
}