
/**
 * registro cliente 1
 */
db.cliente.insertOne({
  "nombre": "Juan",
 "apellido": "Valdez",
 "telefono": "123455678",
 "direccion": {
   "cod_postal": "08905",
   "localidad": {},
   "nom_localidad": "Barcelona",
   "provincia": "Barcelona"
 }
})

/**
 * registro producto 1
 */
db.producto.insertOne(
    {
        "categoria_producto": "pizza",
        "nombre_producto": "pizza napolitana clasica",
        "descripcion_producto": "con relleno de queso",
        "imagen_producto": "imagen1",
        "precio": NumberDecimal("8.50"),
        "categoria_pizza": "Napolitana"
      }
)

/
/**
 * Registro Tienda 1
 */
db.producto.insertOne({    
    "id_tienda": "tienda 1",
    "direccion": "Calle Toledo 23",
    "cod_postal": "08833",
    "localidad": {
      "nom_localidad": "Barcelona",
      "provincia": "Barcelona"
    }
  })

  /**
   * registro empleado 1
   */
  db.empleado.insertOne({
    "nombre_empleado": "Karina",
    "apellido_empleado": "Cervantes",
    "nif_empleado": "C65432176",
    "telefono_empleado": "611234567",
    "tipo_empleado": "cocinero",
    "tienda": ObjectId("642159eb5fc4214368dc4ee7")  
    
  })


    /**
   * registro pedido 1
   */
    db.pedido.insertOne()

