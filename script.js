// ----------------------------
// Banco completo: 65 preguntas
// ----------------------------
const allQuestions = [
    {
        number: 1,
        text: "¿Cuál es el valor de \\( 5 - (-2)(-2 - 7) \\)?",
        options: [
            { id: "A", text: "-63" },
            { id: "B", text: "-13" },
            { id: "C", text: "-5" },
            { id: "D", text: "8" }
        ],
        correctAnswer: "B"
    },
    {
        number: 2,
        text: "¿Cuántos números enteros positivos son mayores o iguales que \\(-4\\) y menores que \\(3\\)?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "3" },
            { id: "C", text: "4" },
            { id: "D", text: "6" }
        ],
        correctAnswer: "B"
    },
    {
        number: 3,
        text: "¿Cuál es el resultado de \\(\\left( \\frac{3}{8} - \\frac{6}{16} \\right) - \\frac{8}{3}\\)?",
        options: [
            { id: "A", text: "\\( -\\frac{11}{3} \\)" },
            { id: "B", text: "-3" },
            { id: "C", text: "\\( \\frac{11}{3} \\)" },
            { id: "D", text: "3" }
        ],
        correctAnswer: "B"
    },
    {
        number: 4,
        text: "¿Cuál de las siguientes desigualdades asegura que al multiplicar \\(\\frac{11}{6}\\) por \\(\\frac{2}{3}\\) se obtiene un número menor que \\(\\frac{11}{6}\\)?",
        options: [
            { id: "A", text: "Que \\( \\frac{2}{3} < \\frac{11}{6} \\)" },
            { id: "B", text: "Que \\( \\frac{2}{3} < 1 \\)" },
            { id: "C", text: "Que \\( 3 < 6 \\)" },
            { id: "D", text: "Que \\( 2 < 11 \\)" }
        ],
        correctAnswer: "B"
    },
    {
        number: 5,
        text: "En la tabla adjunta se presenta el tiempo que demoraron los corredores de una competencia en llegar a la meta. ¿Cuáles de los corredores llegaron después de Mario?",
        options: [
            { id: "A", text: "Pedro y Arturo" },
            { id: "B", text: "Juan, Roberto, Pedro y Arturo" },
            { id: "C", text: "Juan y Pedro" },
            { id: "D", text: "Ninguno de los corredores" }
        ],
        correctAnswer: "D"
    },
    {
        number: 6,
        text: "Un juego consiste en lanzar cinco bolitas hacia los agujeros de una caja. Las bolitas ingresaron por los tres agujeros. ¿Cuál de los siguientes puntajes corresponde al máximo puntaje que pudo haber obtenido la persona?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "11" },
            { id: "C", text: "19" },
            { id: "D", text: "25" }
        ],
        correctAnswer: "C"
    },
    {
        number: 7,
        text: "En una infografía se presenta el pronóstico del tiempo para cierto día. ¿Cuál será la variación de temperatura entre las 17:00 y las 21:00 horas?",
        options: [
            { id: "A", text: "-6 °C" },
            { id: "B", text: "-5 °C" },
            { id: "C", text: "4 °C" },
            { id: "D", text: "6 °C" }
        ],
        correctAnswer: "A"
    },
    {
        number: 8,
        text: "Considera la siguiente secuencia de figuras. Si el patrón de formación se mantiene, ¿cuántos círculos forman la Figura 7?",
        options: [
            { id: "A", text: "18" },
            { id: "B", text: "21" },
            { id: "C", text: "28" },
            { id: "D", text: "36" }
        ],
        correctAnswer: "C"
    },
    {
        number: 9,
        text: "Una persona compró tres cuartos kilogramos de paltas, un kilogramo y medio de naranjas y medio kilogramo de duraznos. ¿Cuál de las siguientes expresiones representa lo que gastó la persona?",
        options: [
            { id: "A", text: "\\( 0,75 \\cdot \\$5000 + 1,2 \\cdot \\$1100 + 0,2 \\cdot \\$1300 \\)" },
            { id: "B", text: "\\( 0,75 \\cdot \\$5000 + 1,5 \\cdot \\$1100 + 0,5 \\cdot \\$1300 \\)" },
            { id: "C", text: "\\( 3,4 \\cdot \\$5000 + 1,2 \\cdot \\$1100 + 0,2 \\cdot \\$1300 \\)" },
            { id: "D", text: "\\( 3,4 \\cdot \\$5000 + 1,5 \\cdot \\$1100 + 0,5 \\cdot \\$1300 \\)" }
        ],
        correctAnswer: "B"
    },
    {
        number: 10,
        text: "En un local se vende un sándwich con dos trozos de carne de un cuarto de libra cada uno. Considera que una libra equivale a 453,6 g, ¿cuál es la masa total de los dos trozos de carne?",
        options: [
            { id: "A", text: "907,2 g" },
            { id: "B", text: "453,6 g" },
            { id: "C", text: "226,8 g" },
            { id: "D", text: "113,4 g" }
        ],
        correctAnswer: "C"
    },
    {
        number: 11,
        text: "Para transformar una distancia medida en millas a centímetros, se utiliza la ecuación \\( C = 160 934 \\cdot x \\). Si un kilómetro es equivalente a 100 000 centímetros, ¿cuántos kilómetros son dos millas?",
        options: [
            { id: "A", text: "32 186 800 000 kilómetros" },
            { id: "B", text: "80 467 kilómetros" },
            { id: "C", text: "3,21868 kilómetros" },
            { id: "D", text: "0,80467 kilómetros" }
        ],
        correctAnswer: "C"
    },
    {
        number: 12,
        text: "¿Cuál es el 15 % de 60000?",
        options: [
            { id: "A", text: "400" },
            { id: "B", text: "900" },
            { id: "C", text: "4000" },
            { id: "D", text: "9000" }
        ],
        correctAnswer: "D"
    },
    {
        number: 13,
        text: "En una tienda se vendieron 20 patitos de goma en un día. Si al día siguiente la cantidad de patitos vendidos aumentó en un 5 %, ¿cuántos patitos se vendieron ese día?",
        options: [
            { id: "A", text: "21" },
            { id: "B", text: "24" },
            { id: "C", text: "25" },
            { id: "D", text: "30" }
        ],
        correctAnswer: "A"
    },
    {
        number: 14,
        text: "En una infografía se presentan los porcentajes de los distintos tipos de agua que hay en la Tierra. ¿Cuál de las siguientes afirmaciones es verdadera?",
        options: [
            { id: "A", text: "Un 69,7 % del agua en el planeta está en los glaciares." },
            { id: "B", text: "La mayor reserva de agua dulce en el planeta se encuentra en los glaciares." },
            { id: "C", text: "Para determinar el porcentaje de agua que consumes el ser humano de los ríos, se debe realizar la operación \\( 0,007 \\cdot 0,3 \\)." },
            { id: "D", text: "Hay más agua disponible en glaciares y acuíferos, en conjunto, que agua salada." }
        ],
        correctAnswer: "B"
    },
    {
        number: 15,
        text: "Según datos del INE, se estima que en cuántos puntos porcentuales aumentará la población de 60 años o más del 2022 al 2050?",
        options: [
            { id: "A", text: "14,0" },
            { id: "B", text: "27,6" },
            { id: "C", text: "41,6" },
            { id: "D", text: "50,2" }
        ],
        correctAnswer: "A"
    },
    {
        number: 16,
        text: "En cierto país, en abril de 2021 el IPC fue de 110 y en abril de 2022 fue de 121, ¿cuál fue la tasa de inflación anual en el periodo descrito?",
        options: [
            { id: "A", text: "11 %" },
            { id: "B", text: "10 %" },
            { id: "C", text: "9 %" },
            { id: "D", text: "2,1 %" }
        ],
        correctAnswer: "B"
    },
    {
        number: 17,
        text: "¿Cuál de los siguientes argumentos justifica que la división entre \\( 2^8 \\) y \\( 2^4 \\) da como resultado un número par?",
        options: [
            { id: "A", text: "Que las bases son múltiplos de 2 e iguales y que el cociente entre los exponentes 8 and 4 es un número par." },
            { id: "B", text: "Que la suma de ambas bases es un número par y que la suma de ambos exponentes es un número par." },
            { id: "C", text: "Que la suma de ambas bases es un número entero y que el cociente entre los exponentes 8 and 4 es un número par." },
            { id: "D", text: "Que las bases son múltiplos de 2 e iguales y que la resta entre ambos exponentes es un número entero positivo." }
        ],
        correctAnswer: "D"
    },
    {
        number: 18,
        text: "Según un estudio, la cantidad C de individuos de cierta población se modela mediante la expresión \\( C = 2000 \\cdot 1,1^t \\). ¿En qué porcentaje aumenta la población de individuos cada hora?",
        options: [
            { id: "A", text: "En un 1%" },
            { id: "B", text: "En un 1,1%" },
            { id: "C", text: "En un 10 %" },
            { id: "D", text: "En un 11 %" }
        ],
        correctAnswer: "C"
    },
    {
        number: 19,
        text: "¿Cuál es el valor de \\( 1^0 + 2^3 \\)?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "8" },
            { id: "C", text: "7" },
            { id: "D", text: "6" }
        ],
        correctAnswer: "A"
    },
    {
        number: 20,
        text: "¿Cuál de las siguientes expresiones representa una descomposición del número 12 056?",
        options: [
            { id: "A", text: "\\( 1 \\cdot 10^3 + 2 \\cdot 10^2 + 5 \\cdot 10^1 + 6 \\cdot 10^0 \\)" },
            { id: "B", text: "\\( 1 \\cdot 10^4 + 2 \\cdot 10^3 + 5 \\cdot 10^2 + 6 \\cdot 10^1 \\)" },
            { id: "C", text: "\\( 1 \\cdot 10^4 + 2 \\cdot 10^3 + 5 \\cdot 10^1 + 6 \\cdot 10^0 \\)" },
            { id: "D", text: "\\( 1 \\cdot 10^5 + 2 \\cdot 10^4 + 5 \\cdot 10^2 + 6 \\cdot 10^1 \\)" }
        ],
        correctAnswer: "C"
    },
    {
        number: 21,
        text: "Sultán es un perro de tamaño mediano que llegó a una familia cuando tenía 6 meses de vida, y lo tienen hace 5 años. ¿Cuál será su edad equivalente a un ser humano dentro de dos años y medio?",
        options: [
            { id: "A", text: "45 años" },
            { id: "B", text: "60 años" },
            { id: "C", text: "63 años" },
            { id: "D", text: "85 años" }
        ],
        correctAnswer: "B"
    },
    {
        number: 22,
        text: "Diariamente una persona reparte frutas en su camioneta a siete almacenes, durante los siete días de la semana. If cada día reparte siete cajas a cada almacén con siete kilogramos de frutas cada una, ¿cuál es el total de kilogramos de fruta que reparte en una semana?",
        options: [
            { id: "A", text: "\\( 7^3 \\)" },
            { id: "B", text: "\\( 3^7 \\)" },
            { id: "C", text: "\\( 7^4 \\)" },
            { id: "D", text: "\\( 4^7 \\)" }
        ],
        correctAnswer: "C"
    },
    {
        number: 23,
        text: "Una constructora tiene un plan de construcción a cuatro años. Transcurridos x años de empezada la obra, tienen construidos \\( 2 \\cdot 2^x \\) edificios. ¿Cuántos edificios se tiene planificado construir en total transcurridos los cuatro años?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "8" },
            { id: "C", text: "16" },
            { id: "D", text: "32" }
        ],
        correctAnswer: "D"
    },
    {
        number: 24,
        text: "¿Cuál es el valor de \\( (\\sqrt{2} + \\sqrt{3})^2 - (\\sqrt{2} - \\sqrt{3})^2 \\)?",
        options: [
            { id: "A", text: "0" },
            { id: "B", text: "\\( 4\\sqrt{6} \\)" },
            { id: "C", text: "10" },
            { id: "D", text: "\\( 2\\sqrt{6} \\)" }
        ],
        correctAnswer: "B"
    },
    {
        number: 25,
        text: "¿Cuál es el valor de \\( \\sqrt{2} \\cdot \\sqrt{8} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "6" },
            { id: "C", text: "8" },
            { id: "D", text: "16" }
        ],
        correctAnswer: "A"
    },
    {
        number: 26,
        text: "¿Cuál es el valor de \\( \\sqrt{3^2 + 4^2} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "12" },
            { id: "D", text: "25" }
        ],
        correctAnswer: "A"
    },
    {
        number: 27,
        text: "¿Cuál de las siguientes expresiones es equivalente a \\( \\sqrt{3} \\cdot \\sqrt{12} \\)?",
        options: [
            { id: "A", text: "\\( \\sqrt{15} \\)" },
            { id: "B", text: "\\( \\sqrt{36} \\)" },
            { id: "C", text: "\\( 6 \\)" },
            { id: "D", text: "\\( 36 \\)" }
        ],
        correctAnswer: "C"
    },
    {
        number: 28,
        text: "¿Cuál es el valor de \\( \\sqrt{0,25} \\)?",
        options: [
            { id: "A", text: "0,05" },
            { id: "B", text: "0,5" },
            { id: "C", text: "5" },
            { id: "D", text: "50" }
        ],
        correctAnswer: "B"
    },
    {
        number: 29,
        text: "¿Cuál es el valor de \\( \\sqrt{2} + \\sqrt{2} + \\sqrt{2} + \\sqrt{2} \\)?",
        options: [
            { id: "A", text: "\\( \\sqrt{8} \\)" },
            { id: "B", text: "\\( 4\\sqrt{2} \\)" },
            { id: "C", text: "\\( 2\\sqrt{4} \\)" },
            { id: "D", text: "\\( 8 \\)" }
        ],
        correctAnswer: "B"
    },
    {
        number: 30,
        text: "¿Cuál es el valor de \\( \\sqrt{64} - \\sqrt{16} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "6" },
            { id: "C", text: "8" },
            { id: "D", text: "48" }
        ],
        correctAnswer: "A"
    },
    {
        number: 31,
        text: "¿Cuál es el valor de \\( \\sqrt{9 \\cdot 4} \\)?",
        options: [
            { id: "A", text: "\\( \\sqrt{9} \\cdot \\sqrt{4} \\)" },
            { id: "B", text: "\\( \\sqrt{9} + \\sqrt{4} \\)" },
            { id: "C", text: "\\( 9 \\cdot 4 \\)" },
            { id: "D", text: "\\( 9 + 4 \\)" }
        ],
        correctAnswer: "A"
    },
    {
        number: 32,
        text: "¿Cuál es el valor de \\( \\sqrt{100} - \\sqrt{36} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "8" },
            { id: "C", text: "16" },
            { id: "D", text: "64" }
        ],
        correctAnswer: "A"
    },
    {
        number: 33,
        text: "¿Cuál es el valor de \\( \\sqrt{25 \\cdot 16} \\)?",
        options: [
            { id: "A", text: "\\( \\sqrt{25} \\cdot \\sqrt{16} \\)" },
            { id: "B", text: "\\( \\sqrt{25} + \\sqrt{16} \\)" },
            { id: "C", text: "\\( 25 \\cdot 16 \\)" },
            { id: "D", text: "\\( 25 + 16 \\)" }
        ],
        correctAnswer: "A"
    },
    {
        number: 34,
        text: "¿Cuál es el valor de \\( \\sqrt{2^6} \\)?",
        options: [
            { id: "A", text: "\\( 2^3 \\)" },
            { id: "B", text: "\\( 2^4 \\)" },
            { id: "C", text: "\\( 2^6 \\)" },
            { id: "D", text: "\\( 2^8 \\)" }
        ],
        correctAnswer: "A"
    },
    {
        number: 35,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{8} \\)?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "24" }
        ],
        correctAnswer: "A"
    },
    {
        number: 36,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{27} \\)?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "9" },
            { id: "C", text: "27" },
            { id: "D", text: "81" }
        ],
        correctAnswer: "A"
    },
    {
        number: 37,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{125} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "25" },
            { id: "C", text: "125" },
            { id: "D", text: "625" }
        ],
        correctAnswer: "A"
    },
    {
        number: 38,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{1000} \\)?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "100" },
            { id: "C", text: "1000" },
            { id: "D", text: "10000" }
        ],
        correctAnswer: "A"
    },
    {
        number: 39,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{64} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "8" },
            { id: "C", text: "16" },
            { id: "D", text: "32" }
        ],
        correctAnswer: "A"
    },
    {
        number: 40,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{216} \\)?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "36" },
            { id: "C", text: "72" },
            { id: "D", text: "1296" }
        ],
        correctAnswer: "A"
    },
    {
        number: 41,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{343} \\)?",
        options: [
            { id: "A", text: "7" },
            { id: "B", text: "49" },
            { id: "C", text: "147" },
            { id: "D", text: "2401" }
        ],
        correctAnswer: "A"
    },
    {
        number: 42,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{512} \\)?",
        options: [
            { id: "A", text: "8" },
            { id: "B", text: "64" },
            { id: "C", text: "128" },
            { id: "D", text: "256" }
        ],
        correctAnswer: "A"
    },
    {
        number: 43,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{729} \\)?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "81" },
            { id: "C", text: "243" },
            { id: "D", text: "6561" }
        ],
        correctAnswer: "A"
    },
    {
        number: 44,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{1000000} \\)?",
        options: [
            { id: "A", text: "100" },
            { id: "B", text: "1000" },
            { id: "C", text: "10000" },
            { id: "D", text: "100000" }
        ],
        correctAnswer: "A"
    },
    {
        number: 45,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{16} \\)?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "16" }
        ],
        correctAnswer: "A"
    },
    {
        number: 46,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{81} \\)?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "9" },
            { id: "C", text: "27" },
            { id: "D", text: "81" }
        ],
        correctAnswer: "A"
    },
    {
        number: 47,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{256} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "16" },
            { id: "C", text: "64" },
            { id: "D", text: "256" }
        ],
        correctAnswer: "A"
    },
    {
        number: 48,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{625} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "25" },
            { id: "C", text: "125" },
            { id: "D", text: "625" }
        ],
        correctAnswer: "A"
    },
    {
        number: 49,
        text: "¿Cuál es el valor de \\( \\sqrt[5]{32} \\)?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "16" }
        ],
        correctAnswer: "A"
    },
    {
        number: 50,
        text: "¿Cuál es el valor de \\( \\sqrt[5]{243} \\)?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "9" },
            { id: "C", text: "27" },
            { id: "D", text: "81" }
        ],
        correctAnswer: "A"
    },
    {
        number: 51,
        text: "¿Cuál es el valor de \\( \\sqrt[6]{64} \\)?",
        options: [
            { id: "A", text: "2" },
            { id: "B", text: "4" },
            { id: "C", text: "8" },
            { id: "D", text: "16" }
        ],
        correctAnswer: "A"
    },
    {
        number: 52,
        text: "¿Cuál es el valor de \\( \\sqrt[6]{729} \\)?",
        options: [
            { id: "A", text: "3" },
            { id: "B", text: "9" },
            { id: "C", text: "27" },
            { id: "D", text: "81" }
        ],
        correctAnswer: "A"
    },
    {
        number: 53,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{8} + \\sqrt[3]{27} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "6" },
            { id: "C", text: "7" },
            { id: "D", text: "8" }
        ],
        correctAnswer: "A"
    },
    {
        number: 54,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{64} + \\sqrt[3]{125} \\)?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "11" },
            { id: "C", text: "13" },
            { id: "D", text: "15" }
        ],
        correctAnswer: "A"
    },
    {
        number: 55,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{216} + \\sqrt[3]{343} \\)?",
        options: [
            { id: "A", text: "13" },
            { id: "B", text: "15" },
            { id: "C", text: "17" },
            { id: "D", text: "19" }
        ],
        correctAnswer: "A"
    },
    {
        number: 56,
        text: "¿Cuál es el valor de \\( \\sqrt[3]{512} + \\sqrt[3]{729} \\)?",
        options: [
            { id: "A", text: "17" },
            { id: "B", text: "19" },
            { id: "C", text: "21" },
            { id: "D", text: "23" }
        ],
        correctAnswer: "A"
    },
    {
        number: 57,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{16} + \\sqrt[4]{81} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "9" },
            { id: "D", text: "11" }
        ],
        correctAnswer: "A"
    },
    {
        number: 58,
        text: "¿Cuál es el valor de \\( \\sqrt[4]{256} + \\sqrt[4]{625} \\)?",
        options: [
            { id: "A", text: "9" },
            { id: "B", text: "11" },
            { id: "C", text: "13" },
            { id: "D", text: "15" }
        ],
        correctAnswer: "A"
    },
    {
        number: 59,
        text: "¿Cuál es el valor de \\( \\sqrt[5]{32} + \\sqrt[5]{243} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "9" },
            { id: "D", text: "11" }
        ],
        correctAnswer: "A"
    },
    {
        number: 60,
        text: "¿Cuál es el valor de \\( \\sqrt[6]{64} + \\sqrt[6]{729} \\)?",
        options: [
            { id: "A", text: "5" },
            { id: "B", text: "7" },
            { id: "C", text: "9" },
            { id: "D", text: "11" }
        ],
        correctAnswer: "A"
    },
    {
        number: 61,
        text: "¿Cuál es el valor de \\( \\sqrt{2} \\cdot \\sqrt{8} \\)?",
        options: [
            { id: "A", text: "4" },
            { id: "B", text: "6" },
            { id: "C", text: "8" },
            { id: "D", text: "16" }
        ],
        correctAnswer: "A"
    },
    {
        number: 62,
        text: "¿Cuál es el valor de \\( \\sqrt{3} \\cdot \\sqrt{12} \\)?",
        options: [
            { id: "A", text: "6" },
            { id: "B", text: "9" },
            { id: "C", text: "12" },
            { id: "D", text: "36" }
        ],
        correctAnswer: "A"
    },
    {
        number: 63,
        text: "¿Cuál es el valor de \\( \\sqrt{5} \\cdot \\sqrt{20} \\)?",
        options: [
            { id: "A", text: "10" },
            { id: "B", text: "20" },
            { id: "C", text: "25" },
            { id: "D", text: "100" }
        ],
        correctAnswer: "A"
    },
    {
        number: 64,
        text: "¿Cuál es el valor de \\( \\sqrt{7} \\cdot \\sqrt{28} \\)?",
        options: [
            { id: "A", text: "14" },
            { id: "B", text: "21" },
            { id: "C", text: "28" },
            { id: "D", text: "49" }
        ],
        correctAnswer: "A"
    },
    {
        number: 65,
        text: "¿Cuál es el valor de \\( \\sqrt{11} \\cdot \\sqrt{44} \\)?",
        options: [
            { id: "A", text: "22" },
            { id: "B", text: "33" },
            { id: "C", text: "44" },
            { id: "D", text: "121" }
        ],
        correctAnswer: "A"
    }
];