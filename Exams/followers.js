function followers(input){
    let janesFacebook = {};
    for (const line of input) {
        if (line === 'Log out'){
            break;
        }
        let tokens = line.split(':');
        let command = tokens[0];
        let user = tokens[1];
        let isInList = janesFacebook.hasOwnProperty(user);
        switch (command){
            case 'New follower':
                if (!isInList){
                    janesFacebook[user] = {
                        'likes': 0,
                        'comments': 0
                    };
                }
                break;
            case 'Like':
                if (!isInList){
                    janesFacebook[user] = {
                        'likes': 0,
                        'comments': 0
                    };
                }
                let likes = Number(tokens[2]);
                janesFacebook[user]['likes'] += likes;
                break;
            case 'Comment':
                if (!isInList){
                    janesFacebook[user] = {
                        'likes': 0,
                        'comments': 0
                    };
                }
                janesFacebook[user]['comments'] += 1;
                break;
            case 'Blocked':
                if (!isInList){
                    console.log(`${user} doesn't exist.`);
                    break;
                }
                delete janesFacebook[user];
                break;
        }
    }
    let count = Object.keys(janesFacebook).length;
    console.log(`${count} followers`);
    for (const user in janesFacebook) {
        let sum = janesFacebook[user]['likes'] + janesFacebook[user]['comments'];
        console.log(`${user}: ${sum}`);
    }
}
followers(["New follower: George",

"Like: George: 5",

"New follower: George",

"Log out"]);
console.log('---DIVIDER---');
followers(["Like: Katy: 3",

"Comment: Katy",

"New follower: Bob",

"Blocked: Bob",

"New follower: Amy",

"Like: Amy: 4",

"Log out"]);
console.log('---DIVIDER---');
followers(["Blocked: Amy",

"Comment: Amy",

"New follower: Amy",

"Like: Tom: 5",

"Like: Ellie: 5",

"Log out"]);