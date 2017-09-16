export const greeting = (age = 0) => age > 18 ? 'Hello!' : 'Yo!';

    // if (age > 18) {
    //     return 'Hello';
    // } else {
    //     return 'Yo';
    // }


export const isTacoTuesday = (day = '') => {
    switch(day) {
        case 'monday':
        case 'Wednesday':
        case 'thursday':
        case 'friday':
        case 'saturday':
        case 'sunday':
            return false;
            break;
        case 'tuesday':
            return true;
        default:
            console.log(day + 'is not a day of the week.');
    }

};

