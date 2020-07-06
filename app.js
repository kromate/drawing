
class TypeWriter {
    constructor(txtElement, words) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        //index of the the current string being typedout
        this.wordIndex = 0;
        //method type()
        this.type();

    }


    type() {
        //the number 40 is how fast the characters are typed on screen
        const typing = setTimeout(() => this.type(), 40)
        //current index of words
        const current = this.wordIndex % this.words.length;
        //get full text of current word
        const fullTxt = this.words[current];
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        // insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        //select pencil icon for writting animation
        const typingElement = document.querySelector('.material-icons');
        document.querySelector('.material-icons').className = "material-icons";
        // if word is complete, stop typing and fade pencil
        if (this.txt === fullTxt) {
            typingElement.className += ' fade'
            clearInterval(typing)
        } 
    }
}
//Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    new TypeWriter(txtElement, words);
}