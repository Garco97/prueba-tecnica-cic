# Prueba técnica CIC
Para implementar las 3 primeras preguntas, he utilizado Node.js, con lo que para la ejecución sería con ```node <file_name>```.
Para ejecutar la pregunta 4 sería con ```npm start``` o ```yarn start```.

## Pregunta 1
El programa te pide el mes y el día. No tiene en cuenta año bisiesto, por lo que Febrero tiene 28 días.

## Pregunta 2
El programa te pedirá dos números, a no ser que introduzcas otra cosa que no reconozca como número. Entonces realizará las 4 operaciones básicas.
En el caso de resta y división, las realizará dos veces para obtener las dos posible soluciones que da cada operación.
En cuanto a las consideraciones, he tenido en cuenta que no se puedan introducir palabras, solo números. También hay que tener en cuenta las posibles indeterminaciones que pueda generar la división, aunque en el caso de Node.js, se encargar de representar las indeterminaciones como NaN.

## Pregunta 3
Para esta pregunta he hecho dos soluciones: una iterativa y otra recursiva.
Una vez se ejecute el código, te pedirá introducir por linea de comandos los diferentes números.

## Pregunta 4
He utlizado React, ya que no tengo conocimientos de Angular. El fichero que contiene la solución en si es ```pregunta4/src/App.js```.
