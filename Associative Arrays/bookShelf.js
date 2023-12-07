function bookShelf(data) {
    let library = {};
    for (const line of data) {
        if (line.includes('->')) {
            let [shelfId, shelfGender] = line.split(' -> ');
            if (!library.hasOwnProperty(shelfId)) {
                library[shelfId] = {};
                library[shelfId][shelfGender] = {};
                library[shelfId]['booksCount'] = 0
            }
        } else if (line.includes(':')) {
            let [bookTitle, tokens] = line.split(': ');
            tokens = tokens.split(', ');
            let author = tokens[0];
            let genre = tokens[1];
            for (const shelf in library) {
                if (library[shelf].hasOwnProperty(genre)) {
                    library[shelf][genre][bookTitle] = author;
                    library[shelf]['booksCount'] ++;
                    break;
                }
            }
        }
    }
    let libraryEntries = Object.entries(library);
    libraryEntries.sort((a,b) => b[1]['booksCount'] - a[1]['booksCount']);
    for (const shelf of libraryEntries) {
        let shelfEntries = Object.entries(shelf[1]);
        console.log(`${shelf[0]} ${shelfEntries[0][0]}: ${shelfEntries[1][1]}`);
        shelfEntries.pop();
        let booksArr = Object.entries(shelfEntries[0][1]);
        booksArr.sort((a,b) => a[0].localeCompare(b[0]))
        for (const book of booksArr) {
            console.log(`--> ${book[0]}: ${book[1]}`);
        }
    }
}
// bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']);
console.log('----DIVIDER----');
bookShelf(['1 -> mystery', '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
])