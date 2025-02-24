function generateRandomNum() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const num3 = Math.floor(Math.random() * 20) + 1;
    
    const greatestNum = Math.max(num1, num2, num3);

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const item = alphabet[num1 - 1] || "None";

    const totalMin = num2 * num3;
    const hours = Math.floor(totalMin / 60);
    const min = totalMin % 60;
    const time = `${hours} hr ${min} min`;

    document.getElementById("title").innerText = "Minecraft Activities";
    document.getElementById("num1").innerText = "Mining - " + num1;
    document.getElementById("num2").innerText = "Exploring - " + num2;
    document.getElementById("num3").innerText = "Building - " + num3;

    let count = 0;
    if (num1 === greatestNum) count++;
    if (num2 === greatestNum) count++;
    if (num3 === greatestNum) count++;

    let mostCommonActivities = [];
    if (num1 === greatestNum) mostCommonActivities.push("Mining");
    if (num2 === greatestNum) mostCommonActivities.push("Exploring");
    if (num3 === greatestNum) mostCommonActivities.push("Building");

    let activitySummary;
    switch (count) {
        case 3:
            activitySummary = `Wow! All activities were equally popular today! You balanced Mining, Exploring, and Building perfectly! (${num1}, ${num2}, ${num3})`;
            break;
        case 2:
            activitySummary = `Nice work! The most common activities were ${mostCommonActivities.join(' and ')}. Keep up the great adventures!`;
            break;
        case 1:
            switch (mostCommonActivities[0]) {
                case "Mining":
                    activitySummary = `Mining was the most common activity today! You unearthed valuable resources!`;
                    break;
                case "Exploring":
                    activitySummary = `Exploring led the way today! You ventured into unknown lands!`;
                    break;
                case "Building":
                    activitySummary = `Building dominated today! Your creativity shaped amazing structures!`;
                    break;
            }
            break;
        default:
            activitySummary = "No significant activities today. Maybe tomorrow will be more eventful!";
            break;
    }

    // Move these lines INSIDE the function
    document.getElementById("activitySummary").innerText = activitySummary;
    document.getElementById("item").innerText = "The first letter of your first item: " + item;
    document.getElementById("time").innerText = "Duration of your adventure (" + totalMin + " minutes): " + time;
}
