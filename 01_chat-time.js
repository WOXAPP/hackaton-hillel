// Create formating date function 

function formatDate(date) {

}



console.log(formatDate(new Date(new Date - 1))); // "только что"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"