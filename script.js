function generateRandomNum() {
    const num1 = Math.round(Math.random() * 21);
    const num2 = Math.round(Math.random() * 21);
    const num3 = Math.round(Math.random() * 21);
    
    const biggestNum = Math.max(num1, num2, num3);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const nthLetter = alphabet[num1 - 1];

    const totalMin = num2 * num3;
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    const time = `${hours} hr ${minutes} min`;

    const acti

    document.getElementById("activities") = activities;
}
