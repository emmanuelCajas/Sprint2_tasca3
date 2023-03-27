db.createCollection('cliente', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'cliente',
        required: ['nombre', 'apellido', 'telefono', 'direccion'],
        properties: {
          nombre: {
            bsonType: 'string'
          },
          apellido: {
            bsonType: 'string'
          },
          telefono: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'object',
            title: 'object',
            properties: {
              cod_postal: {
                bsonType: 'string'
              },
              localidad: {
                bsonType: 'object',
                title: 'object',
                properties: {
                  nom_localidad: {
                    bsonType: 'string'
                  },
                  provincia: {
                    bsonType: 'string'
                  }
                }
              }
            }
          }
        }
      }
    }
  });

  
  db.createCollection('producto', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'producto',
        required: ['categoria_producto', 'nombre_producto', 'descripcion_producto', 'imagen_producto', 'precio'],
        properties: {
          categoria_producto: {
            bsonType: 'string'
          },
          nombre_producto: {
            bsonType: 'string'
          },
          descripcion_producto: {
            bsonType: 'string'
          },
          imagen_producto: {
            bsonType: 'string'
          },
          precio: {
            bsonType: 'decimal'
          },
          categoria_pizza: {
            bsonType: 'string'
          }
        }
      }
    }
  });


  db.createCollection('tienda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'tienda',
        required: ['id_tienda', 'direccion', 'cod_postal', 'localidad'],
        properties: {
          id_tienda: {
            bsonType: 'string'
          },
          direccion: {
            bsonType: 'string'
          },
          cod_postal: {
            bsonType: 'string'
          },
          localidad: {
            bsonType: 'object',
            title: 'object',
            properties: {
              nom_localidad: {
                bsonType: 'string'
              },
              provincia: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  });


  /**
   * Empleado
   */

  db.createCollection('empleado', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'empleado',
        required: ['nombre_empleado', 'apellido_empleado', 'nif_empleado', 'telefono_empleado', 'tipo_empleado', 'tienda'],
        properties: {
          nombre_empleado: {
            bsonType: 'string'
          },
          apellido_empleado: {
            bsonType: 'string'
          },
          nif_empleado: {
            bsonType: 'string'
          },
          telefono_empleado: {
            bsonType: 'string'
          },
          tipo_empleado: {
            bsonType: 'string'
          },
          tienda: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });

  /**
   * Pedido
   */

  db.createCollection('pedido', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'pedido',
        required: ['fecha_hora_pedido', 'tipo_pedido', 'precio_total', 'tienda', 'producto', 'cliente'],
        properties: {
          fecha_hora_pedido: {
            bsonType: 'date'
          },
          tipo_pedido: {
            bsonType: 'string'
          },
          precio_total: {
            bsonType: 'decimal'
          },
          fecha_hora_entrega: {
            bsonType: 'date'
          },
          tienda: {
            bsonType: 'objectId'
          },
          producto: {
            bsonType: 'objectId'
          },
          cliente: {
            bsonType: 'objectId'
          },
          empleado: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });