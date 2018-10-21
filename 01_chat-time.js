// Create formating date function 

function formatDate(date) {
   
  let  currentTime = date - new Date();
  if(currentTime === -1 || currentTime === 0 ) {return "только что";} 
  else {
    let second = parseInt((currentTime/1000) + "");
    let minute = parseInt((second/60) + "");
    let hour = parseInt((minute/60) + "");
    let day = parseInt((hour/24) + "");
    
    if(minute === 0){return -second + " сек. назад";} 
    if(hour === 0){return -minute + " мин. назад";} 
    if(day === 0){return -hour + " час. назад";} 
    if(day < 0){

        let year =  + date.getYear() - 100 + 2000;
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
    
        // вчерашняя дата в формате "дд.мм.гг чч:мм"
        return day + "." + month + "." + year + " " + hour + ":" + minute;
    }
  }
}



console.log(formatDate(new Date(new Date - 1))); // "только что"

console.log(formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 124 * 60 * 1000))); // "5 мин. назад"

console.log(formatDate(new Date(new Date - 86400 * 1000))); // вчерашняя дата в формате "дд.мм.гг чч:мм"