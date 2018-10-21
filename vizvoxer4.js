function destroyer(arr, ...values) {
    let result = arr.filter(item => {
      return !values.includes(item);
    });
    return result;
}
console.log(destroyer([1,2,3,4,5],2,3));
