const updateStorage = (currentPos, storage, Array) => {
    storage.push(Array[currentPos.row - 1][currentPos.collumn - 1])
}

export default updateStorage