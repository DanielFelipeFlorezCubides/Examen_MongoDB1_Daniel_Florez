# Examen Final MongoDB 1 - Grupo U2
Debe crear una base de datos llamada anime_store y dentro de ella, una colección
llamada products. Aquí es donde se cargarán los registros de productos de la
tienda. (Recurso: data_products_anime)

## 1. Crear la base de datos anime_store y la colección products.

## 2. Agregar el siguiente producto:
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

## 3. Agregar a todos los productos las siguientes propiedades:
​ available: true
​ origin: "Importado"

## 4. Realizar las siguientes actualizaciones:
​ Producto con sku: A034, actualizar stock a 15.
​ Producto con sku: A018, cambiar el country del provider a "Colombia".
​ Producto con sku: A059, agregar un nuevo tag: "oferta".
​ Producto con sku: A012, agregar dos nuevos tags: "nuevo", "popular".
​ Producto con sku: A025, agregar los tags "descuento", "outlet".
​ Producto llamado "Camiseta Goku Ultra Instinct", cambiar el price a 45000.

## 5. Renombrar la propiedad origin a import_type.

## 6. Cambiar el import_type a "Nacional" para los productos cuyo proveedor esté en
Colombia.

## 7. Crear las siguientes consultas:
​ Mostrar los productos de la categoría "Mangas"
​ Mostrar los productos que tienen un precio mayor a 50000
​ Mostrar los productos que no son de la categoría "Figuras"
​ Mostrar el sku, name y tags de los productos que tienen calificación mayor a
4.5.​ Mostrar sku, name, y price de los productos con stock menor a 5.

## 8. Eliminar la propiedad available de todos los documentos.

## 9. Eliminar el tag "descuento" del producto con sku: A025.

## 10. Eliminar los tags "nuevo" y "popular" del producto con sku: A012.

## 11. Eliminar el producto con sku: A043.

## 12. Eliminar todos los productos con stock igual a 0.

## Solución
Se encuentra en el archivo llamado "script.js"

## Examen final del curso de MongoDB 1