// Punto 1
use_anime_store;  // Este es el comando para crear la base de datos, deberia ser (use anime_store). Pero, le agreguege el guion para que no me de error el editor.

db.createCollection("products"); // Este es el comando para crear la coleccion solicitada.

// Punto 2
db.products.insertOne(
    {
        "sku": "A101",
        "name": "Figura Naruto Uzumaki",
        "category": "Figuras",
        "price": 120000,
        "stock": 10,
        "anime": "Naruto",
        "rating": 4.8,
        "tags": ["coleccionable", "resina", "edición especial"],
        "provider": {
            "name": "OtakuDistribuciones",
            "country": "Japón"
        }
    }
);  // Este es el comando para agregar el producto solicitado.

// Punto 3
db.products.updateOne(
    { sku: "A001" },
    { $set: { available: true, origin: "Importado" } }
); // Este comando lo use para cada uno, simplemente variando el valor del campo "sku". Y asi agregar los campos solicitados en el punto 3 para todos los documentos.

// Punto 4

db.products.updateOne(
    { sku: "A034" },
    { $inc: { stock: 6 } }
); // Este es el comando para incrementar el stock del documento con sku A034.

db.products.updateOne(
    { sku: "A018" },
    { $set: { "provider.country": "Colombia" } }
); // Este comando es para cambiar el pais del proveedor en el documento con sku A018.

// El documento con sku A059 no existe en el json proporcionado para el examen. Entonces, cree uno para cumplir con el punto
/*
    {
    "sku": "A059",
    "name": "Mousepad estampado de Riven",
    "category": "Accesorios",
    "price": 35000,
    "stock": 7,
    "anime": "League of Legends",
    "rating": 5,
    "tags": ["gaming", "antideslizante", "efecto 3D"],
    "provider": { "name": "Riot", "country": "Great Britain" }
    }
*/

db.products.updateOne(
    { sku: "A059" },
    { $push: { tags: "oferta" } }
); // Este es el comando para agregar el tag "oferta" al documento con sku A059.

db.products.updateOne(
    { sku: "A012" },
    { $push: { tags: "nuevo" } }
);

db.products.updateOne(
    { sku: "A012" },
    { $push: { tags: "popular" } }
); // Los dos comandos anteriores son para agregar las respectivas etiquetas al documento con sku A012.

db.products.updateOne(
    { sku: "A025" },
    { $push: { tags: "descuento" } }
)

db.products.updateOne(
    { sku: "A025" },
    { $push: { tags: "outlet" } }
); // Los dos comandos anteriores son para agregar las respectivas etiquetas al documento con sku A025.

db.products.updateOne(
    { name: "Camiseta Goku Ultra Instinct" },
    { $set: { price: 45000 } }
)  // Este es el comando para cambiar el precio del documento con nombre "Camiseta Goku Ultra Instinct".

// Punto 5

db.products.updateMany(
    { origin: "Importado" },
    { $rename: { origin: "import_type" } }
) // Este es el comando para cambiar el nombre del campo origin a import_type en todos los documentos.

// Punto 6

db.products.updateMany(
    { "provider.country": { $in: ["Colombia"] } },
    { $set: { import_type: "Nacional" } }
) // Este es el comando para cambiar el valor de import_type en los productos cuyo proveedor esta en colombia.

// Punto 7

db.products.find({ category: "Mangas" }) // Este es el comando para filtrar todos los productos que sean mangas.

db.products.find(
    { price: { $gt: 50000 } },
    { sku: 1, name: 1, category: 1, _id: 0 }
) // Este es el comando para filtrar los productos con un precio mayor a 50.000

db.products.find({category: {$ne: "Figuras"}}) // Este comando es para filtrar todos los documentos que no sean una figura

db.products.find(
    { rating: { $gt: 4.5 } },
    { sku: 1, name: 1, tags: 1, _id: 0 }
) // Este es el comando para filtrar los productos por su rating mayor a 4.5

// Punto 8

db.products.updateMany(
    {},
    { $unset: { available: "" } }
) // Este es el comando para borrar el campo "available" en todos los documentos

// Punto 9

db.products.updateOne(
    { sku: "A025" },
    { $pull: { tags: "descuento" } }
) // Este es el comando para borrar el valor "descuento" en el array "tags" del documento con sku A025

// Punto 10

db.products.updateOne(
    { sku: "A012" },
    { $pull: { tags: "nuevo" } }
)

db.products.updateOne(
    { sku: "A012" },
    { $pull: { tags: "popular" } }
) // Estos son los comandos para borrar los valores solicitados del array "tags" en el documento con sku A012

// Punto 11

db.products.deleteOne({ sku: "A043" }) // Este es el comando para eliminar el producto con sku A043


// Punto 12
db.products.deleteMany({stock: {$eq: 0}}) // Este es el comando para eliminar cualquier producto que su stock sea igual a 0