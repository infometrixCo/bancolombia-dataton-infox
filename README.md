# bancolombia-dataton-infox

## Instrucciones para revisar analisis de datos

Abrir archivo ```dataton_bancolombia.ipynb``` con jupyter notebook. Si quieren correr el codigo, deben tener instalado el kernel de R.

## Instrucciones para probar ficha de ejemplo

Copiar el contenido de la carpeta ficha en cualquier servidor http, o usar ```serve``` dentro de la carpeta ficha. 

```serve``` es un comando de npm que se instala con ```npm install serve```

en caso de no tener ```npm``` instalar nodejs de https://nodejs.org/en/

## Propuesta de negocio

### AS-IS
Actualmente, grupo Bancolombia, a través de su aplicación móvil “Personas”, permite hacer transacciones desde la mano; ya sean, realizar pagos, hacer transferencias, manejar la seguridad de tus productos. Adicionalmente permite ver el historial de movimientos de algunos productos (e.g. si se hizo alguna consignación a favor, o se hizo algún retiro o algún pago por medio electrónico), pero no identifica a que categoría de gastos pertenecen esas transacciones, y no permite verlo como un todo, sino por productos. Es decir, en este momento no cuenta con un manejador de finanzas personales. 

### TO-BE
Se propone integrar la funcionalidad para los clientes Bancolombia, que permita visualizar un resumen general de gastos, sin importar el medio, que identifique a que categoría de gasto pertenece (usando la información dada por PSE/ACH y POS/MCC), complementando que tanto ha gastado; contado todos sus productos disponibles (e.g. he gastado un total de $500.000,00 usando mi saldo en cuenta de ahorros, mi saldo en cuenta corriente, y tarjeta de crédito), la frecuencia de gasto, y una predicción de cuanto puede ahorrar en el mes. Adicionalmente, se puede ver cuáles fueron los gastos/transacciones por categoría, para llevar un control más completo de los gastos. De esta manera se tendría un manejador de finanzas personales.

###

![mockup](https://raw.githubusercontent.com/infometrixCo/bancolombia-dataton-infox/ficha/images/dataton.png "mockup")
