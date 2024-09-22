
const car = {
    Производитель: "Toyota",
    Модель: "Corolla",
    Год: 2020,
    Скорость: 60 
  };
  
  function CarInformation(car) {
   alert(`Производитель: ${car.Производитель}\nМодель: ${car.Модель}\nГод: ${car.Год}\nСкрость: ${car.Скорость} км/час`);
  };
  
  function TimeToTravel(distance) {
    let timeWithoutBreaks = distance / car.Скорость;
    let Breaks = timeWithoutBreaks / 4;
    let totalTime = timeWithoutBreaks + Breaks;
    alert(`Общее время поездки ${distance} км: ${(totalTime)} часов`);
  };
  
  CarInformation(car);
  TimeToTravel(300);
  