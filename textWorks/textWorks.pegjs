/* source: https://coderwall.com/p/316gba/beginning-parsers-with-peg-js */
textWorks
	= "wc:" space* wc:wordCount { return wc; }
    / "lc:" space* lc:letterCount { return lc; }
wordCount = w:(word space?)* {
	return w.length;
}
letterCount = w:(iw:word space? { return iw; })* {
	let total = 0;
    for(let i=0; i < w.length; i++){
    	total += w[i].length;
    }
    return total;
}
word = letter+
letter = [a-zA-Z0-9]
space = " "
