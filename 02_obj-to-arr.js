// Create function for transform data
let testData = {
    users:[{id: 1, name: "John"}, {id: 2, name: "Andrew"}],
    messages: [{id: 1, text: "Hello", user_id: 1}, {id: 2, text: "How are you?", user_id: 2}],
    dates: [{ message_id: 1, date: "20.10.2018 08:45" }, { message_id: 2, date: "20.10.2018 08:53" }]
}

function transformArrayToObject(obj) {
    let arr = Object.values(obj);
    let newArr = [];

    for(let i = 0; i < arr[0].length; i++){

        let userID = arr[0][i].id;
        let userName = arr[0][i].name;
        let messageId;
        let messageText;
        let messageUser_id;
        let datesMassage_id;
        let datesDate;

       for (let y = 0; y < arr[1].length; y++){
            if(arr[1][y].user_id ===  userID) {
                messageId = arr[1][y].id;
                messageText = arr[1][y].text;
                messageUser_id = arr[1][y].user_id;

            }
            if(arr[2][y].message_id ===  messageId) {
                datesMassage_id = arr[2][y].message_id;
                datesDate = arr[2][y].date;

                let currentObj = {
                    id: userID,
                    name: userName,
                    text: messageText,
                    date: datesDate
               }
             newArr.push(currentObj) 
            }
       }

    }
    return newArr;
}



console.log(transformArrayToObject(testData)); // "[{id: 1, date: "DD.MM.YYYY HH:mm", user_name: "my name is human", text: "message text"}, ...]"
