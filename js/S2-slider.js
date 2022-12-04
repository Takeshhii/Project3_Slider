
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
    const S2Container4 = document.querySelector('.S2Container4 ul');

    let currentIndex = 0;

    const setEntity = (index) => {
        img.style.backgroundImage = `url(${entities[index].img})`
        city.innerHTML=entities[index].city
        repairTime.innerHTML=entities[index].repairTime
        apartmentArea.innerHTML=entities[index].apartmentArea
        repairCost.innerHTML=entities[index].repairCost

        for (let j = 0; j <=2; j++){
            S2Container2.children[j].classList.remove('navActive');
            S2Container2.children[j].classList.remove('underlineImg');
        };
        S2Container2.children[index].classList.add('navActive');
        S2Container2.children[index].classList.add('underlineImg');

        for (let j = 1; j <=3; j++){
            S2Container4.children[j].children[0].setAttribute('src','images/KrugSer.png');
        };
        S2Container4.children[index+1].children[0].setAttribute('src','images/KrugBel.png');
    };

    for (let i = 0; i <=2; i++) {
        S2Container2.children[i].addEventListener('click', () => {
            setEntity(i);
        });
    };

    for (let i = 1; i <=3; i++) {
        S2Container4.children[i].addEventListener('click', () => {
            setEntity(i-1);
        });
    };

    S2Container4.firstElementChild.addEventListener('click', () => {
        /*
        if (currentIndex >= 1){
            currentIndex -= 1;
        }else {
           currentIndex = 2;
        }
        */

        (currentIndex >= 1)?currentIndex -= 1:currentIndex = 2;
        setEntity(currentIndex);
    });

    S2Container4.lastElementChild.addEventListener('click', () => {
        if (currentIndex <= 1){
            currentIndex += 1;
        }else {
            currentIndex = 0;
        }
        setEntity(currentIndex);
    });
};