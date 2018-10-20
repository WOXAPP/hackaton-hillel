// Create function for transform data
let testData = {
    users:[{id: 1, name: "John"}, {id: 2, name: "Andrew"}],
    messages: [{id: 1, text: "Hello", user_id: 1}, {id: 2, text: "How are you?", user_id: 2}],
    dates: [{ message_id: 1, date: "20.10.2018 08:45" }, { message_id: 2, date: "20.10.2018 08:53" }]
}

function transformArrayToObject(obj) {

}



console.log(transformArrayToObject(testData)); // "[{id: 1, date: "DD.MM.YYYY HH:mm", user_name: "my name is human", text: "message text"}, ...]"
