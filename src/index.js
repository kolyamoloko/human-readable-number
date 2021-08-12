module.exports = function toReadable (number) {
    const ones = [
        '', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let string = '';
    
    if(number == 0){
        string = "zero";
    }
    else if(number < 20)
    {
       string = ones[number];
    }
    else if(number < 100) {
        string = tens[Math.floor(number / 10)] + " " + ones[number % 10];
    }
    else {
        tensNumber = number % 100;
        string = ones[Math.floor(number/ 100)] + " hundred ";
        if(tensNumber < 20)
        {
            string += ones[tensNumber];
        }
        else
        {
            string += tens[Math.floor(tensNumber / 10)] + " " + ones[tensNumber % 10];
        }
    }

    return string.trim();
}