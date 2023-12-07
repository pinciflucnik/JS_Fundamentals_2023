function extractEmails(input) {
    let validRegex = /[ ][A-Za-z0-9]+[\.\-\_]?[A-Za-z0-9]+@[A-Za-z]+\-?[A-Za-z]*\.[A-Za-z]+\.?(?=[A-Za-z]+)[A-Za-z]+/g;
    let emails = input.match(validRegex);
    if (emails) {
        for (const email of emails) {
            console.log(email.trim());
        }
    }
}
extractEmails('Please contact us at: support@github.com.');
console.log('---DIVIDER---');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('---DIVIDER---');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')