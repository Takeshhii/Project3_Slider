

const entities = [
    {
        img: '../images/S2image1.png',
        city: 'Rostov-on-Don<br>LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2',
        repairCost: 'Upon request'

    },
    {
        img: '../images/S2image2.png',
        city: 'Sochi<br>Thieves',
        repairTime: '4 months',
        apartmentArea: '105 m2',
        repairCost: 'Upon request'
    },
    {
        img: '../images/S2image3.png',
        city: 'Rostov-on-Don<br>Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2',
        repairCost: 'Upon request'
    }
];

window.onload = function() {
    const img = document.querySelector('.S2Container2 div');
    const city = document.querySelector('.city');
    const repairTime = document.querySelector('.repairTime');
    const apartmentArea = document.querySelector('.apartmentArea');
    const repairCost = document.querySelector('.repairCost');

    const S2Container2 = document.querySelector('.S2Container2 ul');
    const slideButtons = document.querySelector('.S2Container4 ul ');

    console.log("S2Container2" + S2Container2);
    console.log(S2Container2);
    console.log("city " + city);
    console.log(city);
    city.innerHTML='IJSDOIFHJ<br>OLOLOL'

    console.log("S2Container2 " + S2Container2.childElementCount);
};

/*
const setEntity = (index) => {
    text.innerText = entities[index].text
    img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
let currentIndex = 0

prev.addEventListener('click', () => {
    setEntity(currentIndex - 1);
    currentIndex -= 1;
})
next.addEventListener('click', () => {
    setEntity(currentIndex + 1);
    currentIndex += 1;
})
*/