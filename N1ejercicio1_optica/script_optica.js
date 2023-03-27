
db.createCollection('producto', {
  validator: {
    $jsonSchema: {
      bsonType: 'object', title: 'producto', required: ['graduacion_cristal', 'tipo_montura', 'color_montura', 'color_cristal', 'precio', 'proveedor'], properties: {
        graduacion_cristal: { bsonType: 'string' },
         tipo_montura: { bsonType: 'string' },
          color_montura: { bsonType: 'string' }, 
          color_cristal: { bsonType: 'string' },
           precio: { bsonType: 'decimal' }, 
           proveedor: {bsonType: 'object',
          title: 'object', 
          required: ['nombre_proveedor', 'telefono', 'fax', 'nif'], properties: {
            nombre_proveedor: { bsonType: 'string' },
             telefono: { bsonType: 'string' }, 
             fax: { bsonType: 'string' }, 
             nif: { bsonType: 'string' }, 
             direccion: {
              bsonType: 'object',
              title: 'object', required: ['calle', 'numero', 'piso', 'puerta', 'ciudad', 'cod_postal', 'pais'], properties: { calle: { bsonType: 'string' }, numero: { bsonType: 'string' }, piso: { bsonType: 'string' }, puerta: { bsonType: 'string' }, ciudad: { bsonType: 'string' }, cod_postal: { bsonType: 'string' }, pais: { bsonType: 'string' } }
            }
          }
        }
      }
    }
  }
});


db.createCollection('venta', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'venta',
      required: ['fecha_venta', 'precio_total', 'cliente'],
      properties: {
        fecha_venta: {
          bsonType: 'date'
        },
        precio_total: {
          bsonType: 'decimal'
        },
        cliente: {
          bsonType: 'object',
          title: 'object',
          required: ['nombre_cliente', 'apellido_cliente', 'cod_postal', 'telefono', 'email', 'fecha_registro'],
          properties: {
            nombre_cliente: {
              bsonType: 'string'
            },
            apellido_cliente: {
              bsonType: 'string'
            },
            cod_postal: {
              bsonType: 'string'
            },
            telefono: {
              bsonType: 'string'
            },
            email: {
              bsonType: 'string'
            },
            fecha_registro: {
              bsonType: 'date'
            },
            cliente_derivado: {
              bsonType: 'string'
            }
          }
        },
        producto: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        }
      }
    }
  }
});