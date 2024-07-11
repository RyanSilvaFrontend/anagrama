function generateAnagrams() {
    const word = document.getElementById('input-word').value.trim();

    if (!word) {
        alert('Please enter a word');
        return;
    }

    const anagrams = generateAnagramsHelper(word);
    displayAnagrams(anagrams);
}

function generateAnagramsHelper(word) {
    if (word.length < 2) {
        return [word];
    }

    let anagrams = [];

    for (let i = 0; i < word.length; i++) {
        const char = word[i];

        if (word.indexOf(char) != i) {
            continue;
        }

        const remainingChars = word.slice(0, i) + word.slice(i + 1, word.length);
        for (let subAnagram of generateAnagramsHelper(remainingChars)) {
            anagrams.push(char + subAnagram);
        }
    }

    return anagrams;
}

function displayAnagrams(anagrams) {
    const outputDiv = document.getElementById('anagrams-output');
    outputDiv.innerHTML = '';

    if (anagrams.length > 0) {
        const uniqueAnagrams = [...new Set(anagrams)];
        uniqueAnagrams.forEach(anagram => {
            const p = document.createElement('p');
            p.textContent = anagram;
            outputDiv.appendChild(p);
        });
    } else {
        outputDiv.textContent = 'No anagrams found.';
    }
}

