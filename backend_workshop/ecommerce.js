let express = require ('express')
let router = express.Router()
let app = express()
let fs = require('fs')

let bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

const escribirArchivo = (productos, categorias, customers, response, objetoRespuesta) => {

    fs.writeFile('ecommerce.json', JSON.stringify({
  
      products: productos,
      categories: categorias,
      customers: customers
  
    },null, 4), (data, error) => {
  
      response.send(JSON.stringify(objetoRespuesta))
    })
}

router.get('/customers', (req, res) => {

    fs.readFile('ecommerce.json', (error, data) => {

        res.send(JSON.parse(data).customers)
    })
})

router.post('/customers', (req, res) => {

    const promesaLectura = new Promise((resolve, reject) => {

        fs.readFile('ecommerce.json', (err, data) => {

            resolve(data)
        })
    }).then(resultado => {


        const nuevoId = JSON.parse(resultado).customers
                            [JSON.parse(resultado).customers.length -1].id + 1
        
        const nuevoCliente = {id: nuevoId, name: req.body.name, products: []}

        let customers = [...JSON.parse(resultado).customers, nuevoCliente]
        let categories = JSON.parse(resultado).categories
        let products = JSON.parse(resultado).products

        fs.writeFile('ecommerce.json', JSON.stringify({
            products: products,
            categories: categories,
            customers: customers
        },null,4), (error) => {

            res.send(nuevoCliente)
        })
    })

})

// Cliente por id
router.get('/customers/:customerId', (req, res) => {
  
    fs.readFile('ecommerce.json', function (error, data){
        let clientes = JSON.parse(data).customers.filter(customer => customer.id == req.params.customerId)
        res.send(clientes.length <= 0 ? {} : clientes[0])
    })
})

// Actualizar un cliente
router.put('/customers/:customerId', function(req, res, next) {
	
    const promesaLecturaArchivo = new Promise((resolve, reject) => {
  
      fs.readFile('ecommerce.json', function (error, data){
        resolve(data)
      })
    })
  
    Promise.all([promesaLecturaArchivo]).then(resultado => {
  
      let customers = JSON.parse(resultado).customers.map((customer) => {
  
        if(customer.id === parseInt(req.params.customerId)) {
          customer.name = req.body.name
        }
        return customer
      })
  
      let categories = JSON.parse(resultado).categories
      let products = JSON.parse(resultado).products
  
      fs.writeFile('ecommerce.json', JSON.stringify(
        {
          products: products,
          categories: categories,
          customers: customers
        },null, 4), (data, error) => {
  
        res.send(JSON.stringify({name: req.body.name}))
      })
    })
  });
  
  // Borrar un cliente
  
  router.delete('/customers/:customerId', function(req, res, next) {
   
    const promesaLecturaArchivo = new Promise((resolve, reject) => {
  
      fs.readFile('ecommerce.json', function (error, data){
        resolve(data)
      })
    })
  
    Promise.all([promesaLecturaArchivo]).then(resultado => {
  
      let clientes = JSON.parse(resultado).customers.filter(customer => customer.id != req.params.customerId)
      let categorias = JSON.parse(resultado).categories
      let productos = JSON.parse(resultado).products
  
      fs.writeFile('ecommerce.json', JSON.stringify({
        products: productos,
        categories: categorias,
        customers: clientes
      },null, 4), (data, error) => {
  
        res.send(JSON.stringify({}))
      })
    })
  });
  
  // Lista de productos
  
  router.get('/products', function(req, res, next) {
  
    fs.readFile('ecommerce.json', function (error, data){
      res.send(JSON.parse(data).products)
    })
  });
  
  // Productos por id
  router.get('/products/:productId', (req, res) => {
    
    fs.readFile('ecommerce.json', function (error, data){
      let products = JSON.parse(data).products.filter(product => product.id == req.params.productId)
      res.send(products.length <= 0 ? {} : products[0])
    })
  })
  
  // Crear un producto
  
  router.post('/products', (req, res, next) => {
   
    const promesaLecturaArchivo = new Promise((resolve, reject) => {
  
      fs.readFile('ecommerce.json', function (error, data){
        resolve(data)
      })
    })
  
    Promise.all([promesaLecturaArchivo]).then(resultado => {
  
      const nuevoId = JSON.parse(resultado).customers[JSON.parse(resultado).customers.length -1].id + 1
      const nuevoProducto = {id: nuevoId, name: req.body.name, stock: req.body.stock, category: req.body.category}
      let products = [...JSON.parse(resultado).products, nuevoProducto]
  
      let categories = JSON.parse(resultado).categories
      let customers = JSON.parse(resultado).customers
  
      fs.writeFile('ecommerce.json', JSON.stringify({
        products: products,
        categories: categories,
        customers: customers
      },null, 4), (data, error) => {
  
        res.send(JSON.stringify(nuevoProducto))
      })
    })
  });
  
  // Actualizar un producto
  
  router.put('/products/:productId', (req, res) => {
      
    const promesaLecturaArchivo = new Promise((resolve, reject) => {
  
      fs.readFile('ecommerce.json', function (error, data){
        resolve(data)
      })
    })
  
    Promise.all([promesaLecturaArchivo]).then(resultado => {
  
      let products = JSON.parse(resultado).products.map((product) => {
  
        if(product.id === parseInt(req.params.productId)) {
          product.name = req.body.name
          product.stock = req.body.stock
          product.category = req.body.category
        }
        return product
      })
  
      let categories = JSON.parse(resultado).categories
      let customers = JSON.parse(resultado).customers
  
      fs.writeFile('ecommerce.json', JSON.stringify(
        {
          products: products,
          categories: categories,
          customers: customers
        },null, 4), (data, error) => {
  
        res.send(JSON.stringify({name: req.body.name, stock : req.body.stock, category : req.body.category}))
      })
    })
  });
  
  // Borrar un producto que no haya sido adquirido por ningun cliente
  
  router.delete('/products/:productId', function(req, res, next) {
   
    const promesaLecturaArchivo = new Promise((resolve, reject) => {
  
      fs.readFile('ecommerce.json', function (error, data){
        resolve(data)
      })
    })
  
    Promise.all([promesaLecturaArchivo]).then(resultado => {
  
      let clientes = JSON.parse(resultado).customers
      let categorias = JSON.parse(resultado).categories
      let productos = JSON.parse(resultado).products.filter(product => product.id != req.params.productId)
  
      fs.writeFile('ecommerce.json', JSON.stringify({
        products: productos,
        categories: categorias,
        customers: clientes
      },null, 4), (data, error) => {
  
        res.send(JSON.stringify({}))
      })
    })
  });
  
  // Generar una adquisicion de producto
  router.post('/product_customer', function(req, res, next) { 
  
    fs.readFile('ecommerce.json', function (error, data){
  
      let productId = req.body.productId
      let customerId = req.body.customerId
      let customers = JSON.parse(data).customers.map((customer) => {
  
        if(customer.id == customerId) {
          customer.products = [...customer.products, {id: productId}]
          console.log(customer)
        }
        return customer
      })
  
      let categorias = JSON.parse(data).categories
      let productos = JSON.parse(data).products
  
      fs.writeFile('ecommerce.json', JSON.stringify({
        products: productos,
        categories: categorias,
        customers: customers
      },null, 4), (data, error) => {
  
        res.send(JSON.stringify({productId: req.body.productId}))
      })
    }) 
  });
  
  // Buscar clientes por nombre (al menos 3 letras)
  
  router.get('/customers/byname/:name', (req, res) => {
  
    fs.readFile('ecommerce.json', function (error, data){
      let clientes = JSON.parse(data).customers.filter(customer => customer.name.includes(req.params.name))
      res.send(clientes)
    })
  })
  
  // Buscar producto por la categoria.
  
  router.get('/products/bycategoryname/:categoryName', function(req, res, next) {
   
    fs.readFile('ecommerce.json', function (error, data){
  
      let category = JSON.parse(data).categories
                        .filter(category => category.name == req.params.categoryName)[0]
      if(!category) {
        res.send([])
      }
  
      let products = JSON.parse(data).products.filter(product => product.category == category.id)
      res.send(products)
    })
  });

app.use('/', router)

let server = app.listen(4000, () => {
    console.log("Servidor escuchando puerto 4000")
})