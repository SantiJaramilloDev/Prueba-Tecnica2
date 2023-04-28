import CardProducts from '../../components/Cards/CardProducts/CardProducts'

const Home = () => {

  const products = [
    { 
      name: 'User Management',
      services: [
        { name: 'Seller', icon: 'person' },
        { name: 'Customer', icon: 'people' }
      ]
    },
    {
      name: 'Product Management',
      services: [
        { name: 'Product', icon: 'store' },
        { name: 'Orders', icon: 'assignment' }
      ]
    },
    {
      name: 'Brand Management',
      services: [
        { name: 'Brand', icon: 'local_offer' },
        { name: 'Sub Brand', icon: 'loyalty'}

      ]
    },
    {
      name: 'Category Management',
      services: [
        { name: 'Category', icon: 'view_list' },
        { name: 'Sub Category', icon: 'view_list' }
      ]
    }
  ]
  return (
    <>
      <main>
        <div className='row'>
          {
            products.map((product, index) => {
              return (
                <CardProducts key={index + product.name} product={product} />
              )
            })
          }
        </div>
        {/* <FloatingButton /> */}
      </main>
    </>
  )
}

export default Home
