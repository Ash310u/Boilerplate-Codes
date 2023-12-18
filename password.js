for (let index = 0; index < 10000; index++) {
    const letter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '`', ',', '<', '.', '>', '/', '?', '|', ':', ';']

    let name = [];

    for (let i = 0; i < 30; i++) {
        let random = Math.floor(Math.random() * letter.length)
        name.push(letter[random])
    }
    console.log(name.join(''))
}