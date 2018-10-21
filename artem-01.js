// Create formating date function 

function formattingDate(time) {

    let timeChar = time.toString();
    if (timeChar.length < 2) {
        return time = '0' + timeChar;
    } else {
        return time;
    }
}

function formatDate(date) {
    let currentDate =  new Date;
    let difference = Math.abs(date - currentDate);

    if (difference < 1000) {
        return `Только что`;
    }

    if (difference < 60000) {
        return `${new Date(difference).getSeconds()} сек. назад`;
    }

    if (difference < 3600000) {
        return `${new Date(difference).getMinutes()} мин. назад`;
    }

    if (difference >= 86400000) {
        return `${formattingDate(date.getDate())}.${formattingDate(date.getMonth() + 1)}.${date.getFullYear()} ${formattingDate(date.getHours())}:${formattingDate(date.getMinutes())}`;
    }
}



console.log(formatDate(new Date(new Date - 1))); // "только что"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"