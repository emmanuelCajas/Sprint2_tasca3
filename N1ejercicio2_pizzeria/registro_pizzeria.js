
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
* registro empleado 2
*/
db.empleado.insertOne({
    "nombre_empleado": "Victor",
    "apellido_empleado": "Hernandez",
    "nif_empleado": "T65434523",
    "telefono_empleado": "611234456",
    "tipo_empleado": "repartidor",
    "tienda": ObjectId("642159eb5fc4214368dc4ee7")

})

/**
* registro pedido 1
*/
db.pedido.insertOne({

    "fecha_hora_pedido": new Date("2023-02-01T16:00:00Z"),
    "tipo_pedido": "tienda",
    "precio_total": NumberDecimal("23.4"),
    "fecha_hora_entrega": new Date("2023-02-01T16:40:00Z"),
    "tienda": ObjectId("642159eb5fc4214368dc4ee7"),
    "producto": ObjectId("642156f25fc4214368dc4ee6"),
    "cliente": ObjectId("642154905fc4214368dc4ee4"),
    "empleado": ObjectId("642167815fc4214368dc4eea")
});

