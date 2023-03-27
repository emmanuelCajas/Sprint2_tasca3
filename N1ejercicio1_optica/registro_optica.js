/** 
* Paste one or more documents here
*/

//producto 1
db.producto.insertOne({
    "graduacion_cristal": "0.24",
    "tipo_montura": "flotante",
    "color_montura": "negro",
    "color_cristal": "transparente",
    "precio": NumberDecimal("300.53"),
    "proveedor": {
        "nombre_proveedor": "Gafas 123",
        "telefono": "611234432",
        "fax": "611234432",
        "nif": "g456343567",
        "direccion": {
            "calle": "girona",
            "numero": "34",
            "piso": "3",
            "puerta": "2",
            "ciudad": "barcelona",
            "cod_postal": "08736",
            "pais": "españa"
        }
    }

})
//producto 2
db.producto.insertOne({
    "graduacion_cristal": "0.2",
    "tipo_montura": "metalica",
    "color_montura": "azul",
    "color_cristal": "transparente",
    "precio": NumberDecimal("222.53"),
    "proveedor": {
        "nombre_proveedor": "lentes 321",
        "telefono": "456345789",
        "fax": "456345789",
        "nif": "Z456354367",
        "direccion": {
            "calle": "isabel",
            "numero": "32",
            "piso": "2",
            "puerta": "3",
            "ciudad": "barcelona",
            "cod_postal": "08736",
            "pais": "españa"
        }
    }

})


//producto 3
db.producto.insertOne({
    "graduacion_cristal": "0.34",
    "tipo_montura": "pasta",
    "color_montura": "rojo",
    "color_cristal": "transparente",
    "precio": NumberDecimal("234.53"),
    "proveedor": {
        "nombre_proveedor": "lentillas 456",
        "telefono": "123456789",
        "fax": "123456789",
        "nif": "H456343537",
        "direccion": {
            "calle": "abascal",
            "numero": "4",
            "piso": "E",
            "puerta": "2",
            "ciudad": "barcelona",
            "cod_postal": "08736",
            "pais": "españa"
        }
    }

});

//producto 4
db.producto.insertOne({
    "graduacion_cristal": "0.24",
    "tipo_montura": "flotante",
    "color_montura": "negro",
    "color_cristal": "transparente",
    "precio": NumberDecimal("125.45"),
    "proveedor": {
        "nombre_proveedor": "Gafas 123",
        "telefono": "611234432",
        "fax": "611234432",
        "nif": "g456343567",
        "direccion": {
            "calle": "girona",
            "numero": "34",
            "piso": "3",
            "puerta": "2",
            "ciudad": "barcelona",
            "cod_postal": "08736",
            "pais": "españa"
        }
    }

});



//venta 1

db.venta.insertOne({
    "fecha_venta": new Date(),
    "precio_total": NumberDecimal("300.53"),    
    "cliente": {
        "nombre_cliente": "Juan",
        "apellido_cliente": "Gonzales",
        "cod_postal": "08905",
        "telefono": "166546543",
        "email": "juan@gmail.com",
        "fecha_registro": new Date(),
        "cliente_derivado": "Paola"
    },
    "producto": [ObjectId("641fdcfe37e210471088a212")]

});

//venta 2

db.venta.insertOne({
    "fecha_venta": new Date(2023,1,15),
    "precio_total": NumberDecimal("300.53"),    
    "cliente": {
        "nombre_cliente": "Paola",
        "apellido_cliente": "Perez",
        "cod_postal": "08915",
        "telefono": "166436543",
        "email": "paola@hotmail.com",
        "fecha_registro": new Date(2023,1,15),
        "cliente_derivado": "Juan"
    },
    "producto": [ObjectId("64214c7d5fc4214368dc4ee1")]

});


