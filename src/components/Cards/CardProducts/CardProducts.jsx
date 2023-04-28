import Product from '../Product/Product'

export default function CardProducts ({ product }) {
  return (
    <>
      <div className='col m6'>
        <div style={{padding: '30px', align: 'center'}} className='card'>
          <div className='row'>
            <div className='left card-title'>
              <b>User Management</b>
            </div>
          </div>

          <div className='row'>
            {
              product.services.map((service, index) => {
                return (
                  <>
                    <Product key={index + service.name} title={service.name} icon={service.icon} />
                    <div className='col s1'>&nbsp;</div>
                    <div className='col s1'>&nbsp;</div>
                  </>
                )
              })
            }
            
          </div>
        </div>
      </div>
    </>
  )
}