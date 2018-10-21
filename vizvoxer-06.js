function chunkArrayInGroups(arr, size) {
    let arr1 = [];
    let start = 0;
    for (let i=0; i < arr.length; i++) {
        arr1[i] = arr.slice(start, size);
        start += size - i;
        size = size + size - i;
        if (start > arr.length - 1)  break;
        console.log ({start});
        console.log ({size});

    }
    console.log(arr1);
    return arr1;
}
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);