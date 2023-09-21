// Función para generar un color aleatorio de la lista proporcionada
function getRandomColor() {
    const colors = ["#D2EDEF", "#F9CCCC"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Crear un array de 12 posiciones
export const monthlyArray = Array.from({ length: 12 }, () => []);

// Definir la cantidad de días para cada mes (puede variar según el año y si es un año bisiesto)
const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const currentDate = new Date();
// Llenar el array con los objetos según la cantidad de días en cada mes
for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    for (let day = 1; day <= daysInEachMonth[monthIndex]; day++) {
        if(monthIndex < currentDate.getMonth()){
            const isMatch = false;
            monthlyArray[monthIndex].push({ day: day.toString(), isMatch });
        }
        else if(monthIndex === currentDate.getMonth() && day < 10){
            const isMatch = false;
            monthlyArray[monthIndex].push({ day: day.toString(), isMatch });
        }
        else{
            monthlyArray[monthIndex].push({ day: day.toString(), isMatch: false});
        }
    }
}