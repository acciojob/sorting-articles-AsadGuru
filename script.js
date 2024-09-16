//your JS code here. If required.

document.addEventListener('DOMContentLoaded', () => {
	const bands =  [
        'The Plot in You', 
        'The Devil Wears Prada', 
        'Pierce the Veil', 
        'Norma Jean', 
        'The Bled', 
        'Say Anything', 
        'The Midway State', 
        'We Came as Romans', 
        'Counterparts', 
        'Oh, Sleeper', 
        'A Skylit Drive', 
        'Anywhere But Here', 
        'An Old Dog'
    ];

	//words to ignore duing sorting
	const ignoreWords = ['a','an','the'];

	//function to create a key for sorting , ignoring specified words
	function getSortKey(str) {
		//convert to lowercase and split into words
		const words = str.toLowerCase().split(' ');
		//remove ignored words
		const filteredWords = words.filter(word => !ignoreWords.includes(word));
		//join the remaining words to for a key
		return filteredWords.join(' ');

	}

	
    // Sort bands by the key ignoring specified words
    const sortedBands = bands.sort((a, b) => {
        const keyA = getSortKey(a);
        const keyB = getSortKey(b);
        return keyA.localeCompare(keyB);
    });

    // Get the list element
    const list = document.getElementById('band');

    // Populate the list with sorted items
    sortedBands.forEach(band => {
        const listItem = document.createElement('li');
        listItem.textContent = band;
        list.appendChild(listItem);
    });
});