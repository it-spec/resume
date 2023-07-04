function getAge(dateString) {
    var day = parseInt(dateString.substring(0, 2));
    var month = parseInt(dateString.substring(3, 5));
    var year = parseInt(dateString.substring(6, 10));

    var today = new Date();
    var birthDate = new Date(year, month - 1, day); // 'month - 1' т.к. нумерация месяцев начинается с 0
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

age = getAge('06.02.1983')
ending = ''

switch (age%10) {
    case 1:
        ending = 'год'
        break;
    case 2:
    case 3:
    case 4:
        ending = 'года'
        break;
    default:
        ending = 'лет'
}

document.getElementById('age').innerHTML = age
document.getElementById('ending').innerHTML = ending
