-- Punto 1
SELECT nomproducto, precioproducto FROM Producto 
WHERE precioproducto > 180000 
ORDER BY precioproducto DESC;

-- Punto 2
SELECT Proveedor.nomproveedor
FROM Proveedor
INNER JOIN Producto on Producto.nitproveedor = Proveedor.nitproveedor
WHERE Proveedor.nitproveedor = 12345;

-- Punto 3
SELECT Proveedor.nomproveedor
FROM Proveedor
INNER JOIN Producto on Producto.nitproveedor = Proveedor.nitproveedor
WHERE Producto.codproducto = 'PRD1'

-- Punto 4
SELECT nomproducto, precioproducto
FROM Producto
WHERE	(precioproducto>20000 AND precioproducto<180000)