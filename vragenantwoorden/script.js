function controleerAntwoorden() {
    const antwoord1 = document.getElementById('vraag1Input').value;
    const antwoord2 = parseInt(document.getElementById('vraag2Input').value);
    const antwoord3 = document.getElementById('vraag3Input').value;
    const antwoord4 = document.getElementById('vraag4Input').value;
    const antwoord5 = document.getElementById('vraag5Input').value;

    const verwachteAntwoorden = {
        vraag1: ['Parijs', 'Paris'],
        vraag2: [8, 'acht'],
        vraag3: ['IJsselmeer'],
        vraag4: ['Volkswagen', 'VW', 'bmw', 'mercedes'],
        vraag5: ['Texel', 'Ameland'],
    };

    const inputs = [antwoord1, antwoord2, antwoord3, antwoord4, antwoord5];
    const inputIds = ['vraag1Input', 'vraag2Input', 'vraag3Input', 'vraag4Input', 'vraag5Input'];

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const expected = verwachteAntwoorden[`vraag${i + 1}`];
        const correct = expected.includes(input);

        const inputElement = document.getElementById(inputIds[i]);
        inputElement.style.backgroundColor = correct ? 'lightgreen' : 'red';
    }
}