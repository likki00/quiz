function checkAnswers() {
    let score = 0;

    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (!q1 || !q2) {
        alert("Please answer all questions before submitting.");
        return false; // prevent form from submitting
    }

    if (q1.value === "c") score++;
    if (q2.value === "b") score++;

    // Show result
    alert("🎉 You scored " + score + " out of 2!");

    return false; // prevent page refresh
}




