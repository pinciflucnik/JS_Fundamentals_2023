function comments(data) {
    let commentsObj = {};
    let userArr = [];
    let articleArr = [];
    for (let line of data) {
        if (line.includes('user') || line.includes('article')) {
            let tokens = line.split(' ');
            let definition = tokens[0];
            switch (definition) {
                case 'user':
                    let name = tokens[1];
                    userArr.push(name);
                    break;
                case 'article':
                    let articleName = tokens[1];
                    articleArr.push(articleName);
                    break;
            }
        } else if (line.includes(':')) {
            let allTokens = line.split(':');
            let leftSubTokens = allTokens[0].split(' ');
            let rightSubTokens = allTokens[1].split(', ');
            let userName = leftSubTokens[0];
            let articleName = leftSubTokens[3];
            let commentTitle = rightSubTokens[0];
            let comment = rightSubTokens[1];

            if (userArr.includes(userName) && articleArr.includes(articleName)) {
                if (!commentsObj.hasOwnProperty(articleName)) {
                    commentsObj[articleName] = {};
                    commentsObj[articleName]['commentsCount'] = 0;
                }
                if (!commentsObj[articleName].hasOwnProperty(userName)) {
                    commentsObj[articleName][userName] = {};
                }
                commentsObj[articleName][userName][commentTitle] = comment;
                commentsObj[articleName]['commentsCount']++;

            }
        }
    }
    let articles = Object.entries(commentsObj);
    articles.sort((a, b) => b[1]['commentsCount'] - a[1]['commentsCount']);
    for (const article of articles) {
        let userComments = Object.entries(article[1]);
        userComments.shift();
        userComments.sort((a, b) => a[0].localeCompare(b[0]));
        console.log(`Comments on ${article[0]}`);
        for (const user of userComments) {
            let actualComment = Object.entries(user[1]);
            for (const comment of actualComment) {
                
                console.log(`--- From user ${user[0]}:${comment[0]} - ${comment[1]}`);
            }
        }
    }
}
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
console.log('---DIVIDER---');
comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);