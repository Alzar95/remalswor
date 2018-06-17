var firstNumber, secondNumber, arraySigns, randElementArraySign, stringNumericResult, numericResult,
    wordForTranslation, randomWordForSortingLetters, randomWordForAudio, currentHealthOfTheHero = 100,
    currentHealthOfTheEnemy = 100, indexForMonsterBodyParts = 0, killedMonsters = 0,
    randElementArrayOfAdjectives, randElementArrayOfCharacterClasses, randElementArrayOfNames, theRightSignBetweenTwoRandomNumbers,
    theCorrectPictureForSelectingFromSuperfluousPictures, firstRandomNumberForComparison, secondRandomNumberForComparison,
    unitOfMeasureMillimeter, unitOfMeasureCentimeter, unitOfMeasurementMeter, unitOfMeasureKilometer, randomLengthUnit,
    randomNumberFromAnArrayOfNumbersTransferredFromOneUnitOfMeasureToAnother, aRandomMixtureOfColorsWithTheResult, widthOfAGeometricFigure,
    heightOfAGeometricFigure, digitalValueOfTheWidthOfTheGeometricFigureInCentimeters, digitalValueOfTheHeightOfTheGeometricFigureInCentimeters,
    correctPerimeterResult, theFirstRandomNumberForEquation, theSecondRandomNumberForEquation, theAnswerOfEquation, coordinateValueOnAbscissa,
    coordinateValueOnOrdinate, randomChemicalElement, randomSoundOfAnAnimal, correctImageOfAnAnimal;
var arrayOfCorrectTranslatedWords = [],
    wordArrayForShufflingLetters = [],
    arrayOfRandomIndexesForLetters = [],
    arrayForAudioWords = [],
    arrayOfImageArraysForSelectingARedundantImage = [],
    arrayOfImagesToSelectAnExcessImage = [],
    arrayOfLengthUnits = [],
    anArrayOfColorsForTheMixtureWithTheFinishedResult = [],
    arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother = [],
    arrayOfGeometricShapes = [],
    arrayOfChemicalElements = [],
    arrayOfAnimalImages = [],
    arrayOfAnimalSounds = [],
    arrayForKilledMonsters = [],
    arrayOfAdjectives = ["Ужасный", "Злобный", "Сопливый"],
    arrayOfCharacterClasses = ["Огр", "Гоблин", "Гном"],
    arrayOfNames = ["Том", "Макс", "Дима"];
var heads = ['<svg><circle cx="115" cy="50" r="30" fill="purple">' +
'<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="90" cy="70" r="5" fill="red">' +
'<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="105" cy="70" r="5" fill="red">' +
'<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle></svg>',
    '<svg><circle cx="115" cy="50" r="30" fill="red">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="90" cy="70" r="5" fill="blue">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="105" cy="70" r="5" fill="blue">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle></svg>',
    '<svg><circle cx="115" cy="50" r="30" fill="purple">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="90" cy="70" r="5" fill="red">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle><circle cx="105" cy="70" r="5" fill="red">' +
    '<animate attributeName="cy" dur="2s" repeatCount="indefinite" values="70; 80; 70"></animate></circle></svg>'];
var trunks = ['<svg><ellipse rx="50" ry="70" cx="120" cy="170" fill="gold"></ellipse></svg>',
    '<svg><ellipse rx="50" ry="70" cx="120" cy="170" fill="silver"></ellipse></svg>',
    '<svg><ellipse rx="50" ry="70" cx="120" cy="170" fill="blue"></ellipse></svg>'];
var arms = ['<svg><line x1="90" y1="140" x2="40" y2="110" stroke="red" stroke-width="8" /></svg>',
    '<svg><line x1="90" y1="140" x2="40" y2="110" stroke="green" stroke-width="8" /></svg>',
    '<svg><line x1="90" y1="140" x2="40" y2="110" stroke="yellow" stroke-width="8" /></svg>'];
var weapons = ['<svg><line x1="75" y1="170" x2="15" y2="70" stroke="blue" stroke-width="4" /><circle cx="15" cy="70" r="7" fill="green"></svg>',
    '<svg><line x1="75" y1="170" x2="15" y2="70" stroke="blue" stroke-width="4" /><circle cx="15" cy="70" r="7" fill="gold"></svg>',
    '<svg><line x1="75" y1="170" x2="15" y2="70" stroke="green" stroke-width="4" /><circle cx="15" cy="70" r="7" fill="silver"></svg>'];
var leg = ['<svg><line x1="100" y1="220" x2="50" y2="400" stroke="red" stroke-width="8" />' +
'<line x1="130" y1="237" x2="160" y2="400" stroke="red" stroke-width="8" /></svg>',
    '<svg><line x1="100" y1="220" x2="50" y2="400" stroke="green" stroke-width="8" />' +
    '<line x1="130" y1="237" x2="160" y2="400" stroke="green" stroke-width="8" /></svg>',
    '<svg><line x1="100" y1="220" x2="50" y2="400" stroke="yellow" stroke-width="8" />' +
    '<line x1="130" y1="237" x2="160" y2="400" stroke="yellow" stroke-width="8" /></svg>'];

var taskScreen = new TaskScreen();

$(function () {
    $(".progressbar-for-hero").progressbar({
        value: 100
    }).find(".ui-progressbar-value").css({
        "background": '#003eff'
    });

    $(".progressbar-for-enemy").progressbar({
        value: 100
    }).find(".ui-progressbar-value").css({
        "background": '#003eff'
    });

    randElementArrayOfAdjectives = Math.floor(Math.random() * arrayOfAdjectives.length);
    randElementArrayOfCharacterClasses = Math.floor(Math.random() * arrayOfCharacterClasses.length);
    randElementArrayOfNames = Math.floor(Math.random() * arrayOfNames.length);

    $(".name-of-the-enemy").append(arrayOfAdjectives[randElementArrayOfAdjectives] + ' '
        + arrayOfCharacterClasses[randElementArrayOfCharacterClasses] + ' ' + arrayOfNames[randElementArrayOfNames]);

    $(".enemy").append(trunks[0]).append(heads[0]).append(arms[0]).append(weapons[0]).append(leg[0]);
});

function newEnemy() {
    ++killedMonsters;
    randElementArrayOfAdjectives = Math.floor(Math.random() * arrayOfAdjectives.length);
    randElementArrayOfCharacterClasses = Math.floor(Math.random() * arrayOfCharacterClasses.length);
    randElementArrayOfNames = Math.floor(Math.random() * arrayOfNames.length);

    $(".name-of-the-enemy").empty().append(arrayOfAdjectives[randElementArrayOfAdjectives] + ' '
        + arrayOfCharacterClasses[randElementArrayOfCharacterClasses] + ' ' + arrayOfNames[randElementArrayOfNames]);

    $(".progressbar-for-enemy").progressbar({
        value: 100
    });

    if(indexForMonsterBodyParts < trunks.length - 1) {
        ++indexForMonsterBodyParts;
    } else {
        indexForMonsterBodyParts = 0;
    }

    $(".enemy").empty();
    $(".enemy").append(trunks[indexForMonsterBodyParts]).append(heads[indexForMonsterBodyParts])
        .append(arms[indexForMonsterBodyParts]).append(weapons[indexForMonsterBodyParts]).append(leg[indexForMonsterBodyParts]);
}

function taskSelection(taskName, showTaskTransfer) {
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    function compareRandom() {
        return Math.random() - 0.5;
    }

    if(taskName === 'arithmetic') {
        firstNumber = randomInteger(0, 150);
        secondNumber = randomInteger(0, 150);
        arraySigns = ['+', '-', '*'];
        randElementArraySign = Math.floor(Math.random() * arraySigns.length);
        stringNumericResult = '' + firstNumber + arraySigns[randElementArraySign] + secondNumber;
        console.log('C: ' + stringNumericResult);
        numericResult = eval(stringNumericResult);
        console.log('D: ' + numericResult);
    } else if(taskName === 'transfer') {
        var positionOfTheWordInTheDictionary;

        $.getJSON("https://api.myjson.com/bins/ub3pi")
            .done(function( data ) {
                positionOfTheWordInTheDictionary = randomInteger(0, data.words.length - 1);
                wordForTranslation = data.words[positionOfTheWordInTheDictionary].word;
                arrayOfCorrectTranslatedWords.push(data.words[positionOfTheWordInTheDictionary].translations);
                showTaskTransfer();
            });
    } else if(taskName === 'sequence') {
        wordArrayForShufflingLetters = ['yellow', 'rainbow', 'pineapple', 'fashion'];
        arrayOfRandomIndexesForLetters = [];

        randomWordForSortingLetters = wordArrayForShufflingLetters[randomInteger(0, wordArrayForShufflingLetters.length - 1)];

        for(let i = 0; i < randomWordForSortingLetters.length; i++) {
            arrayOfRandomIndexesForLetters.push(i);
        }

        arrayOfRandomIndexesForLetters.sort(compareRandom);

        $(function () {
            $(".alphabet-sorting").sortable();
            $(".alphabet-sorting").disableSelection();
        })
    } else if(taskName === 'listening') {
        arrayForAudioWords = ['яблоко', 'ураган', 'шар', 'мандарин'];

        randomWordForAudio = arrayForAudioWords[randomInteger(0, arrayForAudioWords.length - 1)];
    } else if(taskName === 'superfluous') {
        arrayOfImageArraysForSelectingARedundantImage = [['mascara.jpg','lipstick.jpg','lacquer.jpg','umbrella.jpg'],
        ['keyboard.jpg','speakers.jpg','headphones.jpg','mouse.jpg'],['electric-kettle.jpg','mixer.jpg','toaster.jpg','bicycle.jpg']];

        arrayOfImagesToSelectAnExcessImage = arrayOfImageArraysForSelectingARedundantImage[randomInteger(0, arrayOfImageArraysForSelectingARedundantImage.length - 1)];
        theCorrectPictureForSelectingFromSuperfluousPictures = arrayOfImagesToSelectAnExcessImage[arrayOfImagesToSelectAnExcessImage.length - 1];
        arrayOfImagesToSelectAnExcessImage.sort(compareRandom);
    } else if(taskName === 'comparison-of-numbers') {
        firstRandomNumberForComparison = randomInteger(0, 15);
        secondRandomNumberForComparison = randomInteger(0, 15);

        if(firstRandomNumberForComparison > secondRandomNumberForComparison) {
            theRightSignBetweenTwoRandomNumbers = '>';
        } else if(firstRandomNumberForComparison < secondRandomNumberForComparison) {
            theRightSignBetweenTwoRandomNumbers = '<';
        } else if(firstRandomNumberForComparison === secondRandomNumberForComparison) {
            theRightSignBetweenTwoRandomNumbers = '=';
        }
    } else if(taskName === 'translation-of-measurement-units') {
        arrayOfLengthUnits = ['мм', 'см', 'м', 'км'];

        randomLengthUnit = arrayOfLengthUnits[randomInteger(0, arrayOfLengthUnits.length - 1)];

        if(randomLengthUnit === 'мм') {
            unitOfMeasureCentimeter = [0.1, 'см'];
            unitOfMeasurementMeter = [0.001, 'м'];
            unitOfMeasureKilometer = [0.000001, 'км'];
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureCentimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasurementMeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureKilometer);
        } else if(randomLengthUnit === 'см') {
            unitOfMeasureMillimeter = [10, 'мм'];
            unitOfMeasurementMeter = [0.01, 'м'];
            unitOfMeasureKilometer = [0.00001, 'км'];
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureMillimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasurementMeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureKilometer);
        } else if(randomLengthUnit === 'м') {
            unitOfMeasureMillimeter = [1000, 'мм'];
            unitOfMeasureCentimeter = [100, 'см'];
            unitOfMeasureKilometer = [0.001, 'км'];
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureMillimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureCentimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureKilometer);
        } else if(randomLengthUnit === 'км') {
            unitOfMeasureMillimeter = [1000000, 'мм'];
            unitOfMeasureCentimeter = [100000, 'см'];
            unitOfMeasurementMeter = [1000, 'м'];
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureMillimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasureCentimeter);
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.push(unitOfMeasurementMeter);
        }

        randomNumberFromAnArrayOfNumbersTransferredFromOneUnitOfMeasureToAnother =
            arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother[randomInteger(0, arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother.length - 1)];
    } else if(taskName === 'blend-of-colors') {
        anArrayOfColorsForTheMixtureWithTheFinishedResult = [
            ['yellow','red','orange'],
            ['black','white','grey'],
            ['yellow','blue','green']
        ];

        aRandomMixtureOfColorsWithTheResult = anArrayOfColorsForTheMixtureWithTheFinishedResult[randomInteger(0, anArrayOfColorsForTheMixtureWithTheFinishedResult.length - 1)];
    } else if(taskName === 'perimeter-of-figures') {
        let randomGeometricFigure;
        arrayOfGeometricShapes = ['square','rectangle'];

        randomGeometricFigure = arrayOfGeometricShapes[randomInteger(0, arrayOfGeometricShapes.length - 1)];

        if(randomGeometricFigure === 'square') {
            widthOfAGeometricFigure = "100px";
            heightOfAGeometricFigure = "100px";
            digitalValueOfTheWidthOfTheGeometricFigureInCentimeters = digitalValueOfTheHeightOfTheGeometricFigureInCentimeters =
                randomInteger(4, 15);

            correctPerimeterResult = digitalValueOfTheWidthOfTheGeometricFigureInCentimeters * 4;
        } else if(randomGeometricFigure === 'rectangle') {
            widthOfAGeometricFigure = "150px";
            heightOfAGeometricFigure = "100px";
            digitalValueOfTheWidthOfTheGeometricFigureInCentimeters = randomInteger(7, 9);
            digitalValueOfTheHeightOfTheGeometricFigureInCentimeters = randomInteger(5, 7);

            correctPerimeterResult = (digitalValueOfTheWidthOfTheGeometricFigureInCentimeters * 2)
                + (digitalValueOfTheHeightOfTheGeometricFigureInCentimeters * 2);
        }
    } else if(taskName === 'the-equation') {
        arraySigns = ['+', '-', '*'];

        theFirstRandomNumberForEquation = randomInteger(0, 30);
        theSecondRandomNumberForEquation = randomInteger(0, 30);

        randElementArraySign = Math.floor(Math.random() * arraySigns.length);
        stringNumericResult = '' + theFirstRandomNumberForEquation + arraySigns[randElementArraySign] + theSecondRandomNumberForEquation;
        theAnswerOfEquation = eval(stringNumericResult);
    } else if(taskName === 'point-of-coordinates') {
        coordinateValueOnAbscissa = randomInteger(1, 9);
        coordinateValueOnOrdinate = randomInteger(1, 9);

        let height = 500,
            width = 500,
            margin = 30,
            rawData = [
                {x: coordinateValueOnAbscissa, y: coordinateValueOnOrdinate}
            ],
            data = [];

        let svg = d3.select(".task").append("svg")
            .attr("class", "axis")
            .attr("width", width)
            .attr("height", height);

        let xAxisLength = width - 2 * margin;

        let yAxisLength = height - 2 * margin;

        let scaleX = d3.scale.linear()
            .domain([0, 10])
            .range([0, xAxisLength]);

        let scaleY = d3.scale.linear()
            .domain([10, 0])
            .range([0, yAxisLength]);

        for (let i = 0; i < rawData.length; i++)
            data.push({x: scaleX(rawData[i].x) + margin, y: scaleY(rawData[i].y) + margin});

        let xAxis = d3.svg.axis()
            .scale(scaleX)
            .orient("bottom");

        let yAxis = d3.svg.axis()
            .scale(scaleY)
            .orient("left");

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform",
                "translate(" + margin + "," + (height - margin) + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y-axis")
            .attr("transform",
                "translate(" + margin + "," + margin + ")")
            .call(yAxis);

        d3.selectAll("g.x-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", -(height - 2 * margin));

        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", yAxisLength)
            .attr("y2", 0);

        let g = svg.append("g");

        g.append("text")
            .attr("x", margin + 11)
            .attr("y", margin - 11)
            .attr("text-anchor", "end")
            .style("font-size", "11px")
            .text("Ось Y");

        g.append("text")
            .attr("x", width - margin + 11)
            .attr("y", height - margin - 5)
            .attr("text-anchor", "end")
            .style("font-size", "11px")
            .text("Ось Х");

        svg.selectAll(".dot")
            .data(rawData)
            .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 4)
            .attr("cx", function (d) {
                return scaleX(d.x) + margin;
            })
            .attr("cy", function (d) {
                return scaleY(d.y) + margin;
            });
    } else if(taskName === 'chemical-element') {
        arrayOfChemicalElements = [['H','водород'],['He','гелий'],['O','кислород'],['Fe','железо']];

        randomChemicalElement = arrayOfChemicalElements[randomInteger(0, arrayOfChemicalElements.length - 1)];
    } else if(taskName === 'sound-of-an-animal') {
        let randomIndexForSelectingTheSoundOfAnAnimal;
        arrayOfAnimalImages = ['cock.jpg','cow.jpg','dog.jpg', 'pig.jpg'];
        arrayOfAnimalSounds = ['rooster-sound','sound-of-a-cow','sound-of-a-dog','sound-of-a-pig'];

        randomIndexForSelectingTheSoundOfAnAnimal = randomInteger(0, arrayOfAnimalSounds.length - 1);
        randomSoundOfAnAnimal = arrayOfAnimalSounds[randomIndexForSelectingTheSoundOfAnAnimal];

        correctImageOfAnAnimal = arrayOfAnimalImages[randomIndexForSelectingTheSoundOfAnAnimal];
    }
}

function playAudio(spellName) {
    var myAudio = new Audio();

    if(spellName === 'fireball') {
        myAudio.src = './sounds/fireball.mp3';
    } else if(spellName === 'medical-rain') {
        myAudio.src = './sounds/medical-rain.mp3';
    } else if(spellName === 'rooster-sound') {
        myAudio.src = './sounds/rooster-sound.mp3';
    } else if(spellName === 'sound-of-a-cow') {
        myAudio.src = './sounds/sound-of-a-cow.mp3';
    } else if(spellName === 'sound-of-a-dog') {
        myAudio.src = './sounds/sound-of-a-dog.mp3';
    } else if(spellName === 'sound-of-a-pig') {
        myAudio.src = './sounds/sound-of-a-pig.mp3';
    }

    myAudio.play();
}

function spellHero(spellName) {
    if (spellName === 'fireball') {
        playAudio(spellName);
        $(".main-central-field").append('<img src="./images/fireball.gif" class="fireball-for-hero">');
    } else if (spellName === 'medical-rain') {
        playAudio(spellName);
        $(".field-for-therapeutic-rain").append('<canvas id="rain"></canvas>');
        let time = true;
        let w = rain.width = 200,
            h = rain.height = 450,
            ctx = rain.getContext('2d'),

            total = w,
            accelleration = .55,

            size = w / total,
            occupation = w / total,
            repaintColor = 'rgba(255, 255, 255, 0)';
        let colors = [],
            dots = [],
            dotsVel = [];

        let portion = 360 / total;
        for (let i = 0; i < total; ++i) {
            colors[i] = portion * i;

            dots[i] = h;
            dotsVel[i] = 10;
        }

        function anim() {
            if (time) {
                window.requestAnimationFrame(anim);

                ctx.fillStyle = repaintColor;
                ctx.fillRect(0, 0, w, h);

                for (let i = 0; i < total; ++i) {
                    let currentY = dots[i] - 1;
                    dots[i] += dotsVel[i] += accelleration;

                    ctx.fillStyle = 'hsl(' + colors[i] + ', 80%, 50%)';
                    ctx.fillRect(occupation * i, currentY, size, dotsVel[i] + 1);

                    if (dots[i] > h && Math.random() < .01) {
                        dots[i] = dotsVel[i] = 0;
                    }
                }
            } else {
                time = true;
                return false;
            }
        }

        anim();
        setTimeout(function () {
            time = false;
            $('#rain').empty().remove();
        }, 3000);
    }
}

function attackOfTheEnemy() {
    playAudio('fireball');
    $(".main-central-field").append('<img src="./images/fireball-for-enemy.gif" class="fireball-for-enemy">');

    currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");

    function selectionSort(array) {
        var n = array.length;
        for (var i = 0; i < n - 1; i++) {
            var max = i;
            for (var j = i + 1; j < n; j++) {
                if (array[j] > array[max]) max = j;
            }
            var t = array[max];
            array[max] = array[i];
            array[i] = t;
        }
        return array;
    }

    setTimeout(function () {
        $(".fireball-for-enemy").empty().remove();
        document.getElementsByClassName('modal-spell-selection-window')[0].style.display = 'block';
        $(".progressbar-for-hero").progressbar({
            value: currentHealthOfTheHero - 10
        });

        if ($(".progressbar-for-hero").progressbar("value") <= 0) {
            arrayForKilledMonsters.push(killedMonsters);
            console.log(JSON.parse(localStorage.getItem("Killed monsters")));
            if (JSON.parse(localStorage.getItem("Killed monsters"))) {
                for (let i = 0; i < JSON.parse(localStorage.getItem("Killed monsters")).length; i++) {
                    arrayForKilledMonsters.push(JSON.parse(localStorage.getItem("Killed monsters"))[i]);
                }
            }
            localStorage.setItem("Killed monsters", JSON.stringify(arrayForKilledMonsters));
            document.getElementsByClassName('highscore-table-screen')[0].style.display = 'block';

            selectionSort(arrayForKilledMonsters);

            for (let i = 0; i < arrayForKilledMonsters.length; i++) {
                $('.highscore-table-screen .highscore-table table').append('<tr><td>Hero</td><td>' + arrayForKilledMonsters[i] + '</td></tr>');
            }
        }
    }, 1000)
}

function attackOfTheHero() {
    setTimeout(function () {
        currentHealthOfTheEnemy = $(".progressbar-for-enemy").progressbar("value");

        $(".progressbar-for-enemy").progressbar({
            value: currentHealthOfTheEnemy - 25
        });

        $(".fireball-for-hero").empty().remove();

        if ($(".progressbar-for-enemy").progressbar("value") <= 0) {
            newEnemy();
            document.getElementsByClassName('modal-spell-selection-window')[0].style.display = 'block';
        } else {
            setTimeout(function () {
                attackOfTheEnemy();
            }, 500);
        }
    }, 1000);
}

function treatmentHero() {
    setTimeout(function () {
        $(".progressbar-for-hero").progressbar({
            value: currentHealthOfTheHero + 20
        });

        setTimeout(function () {
            attackOfTheEnemy();
            setTimeout(function () {
                $(".progressbar-for-hero").progressbar({
                    value: currentHealthOfTheHero - 10
                });

                currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");
            }, 3000)
        }, 500);

        currentHealthOfTheHero = $(".progressbar-for-hero").progressbar("value");
    }, 3000);
}


function TaskScreen() {
    this._spell = '';
    this._task = '';
}

TaskScreen.prototype.showModalTaskSelectionWindow = function (spellName) {
    document.getElementsByClassName('modal-spell-selection-window')[0].style.display = 'none';
    document.getElementsByClassName('modal-task-selection-window')[0].style.display = 'block';

    this._spell = spellName;
};

TaskScreen.prototype.showTaskScreen = function (taskName) {
    this._task = taskName;
    document.getElementsByClassName('task-screen')[0].style.display = 'block';
    document.getElementsByClassName('modal-task-selection-window')[0].style.display = 'none';

    if (taskName === 'arithmetic') {
        taskSelection(taskName, null);
        $('.task').append(firstNumber).append(arraySigns[randElementArraySign]).append(secondNumber).append('=')
            .append('<input type="text" class="field-for-the-answer">')
            .append('<input type="button" value="OK" onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "35%"});
    } else if(taskName === 'transfer') {
        function showTaskTransfer() {

            $('.task').append(wordForTranslation).append(' - ').append('<input type="text" class="field-for-the-answer">')
                .append('<input type="button" value="OK" onclick="taskScreen.getValueFromTheField()">');
        }
        taskSelection(taskName, showTaskTransfer);

        $('.task').css({"top": "40%", "left": "35%"});
    } else if(taskName === 'sequence') {
        taskSelection(taskName, null);

        $('.task').append('<ul class="alphabet-sorting"></ul>');

        for(let i = 0; i < randomWordForSortingLetters.length; i++) {
            $('.alphabet-sorting').append('<li class="ui-state-default" id="letter-number-">' + randomWordForSortingLetters.charAt(arrayOfRandomIndexesForLetters[i]) + '</li>');
        }
        $('.task').append('<input type="button" value="OK" onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "35%"});
    } else if(taskName === 'listening') {
        taskSelection(taskName, null);

        $('.task').append('<input type="button" value="Прослушать"' +
            ' onclick="if (\'speechSynthesis\' in window) window.speechSynthesis.speak(new SpeechSynthesisUtterance(\'\' + randomWordForAudio))">')
            .append('<input type="text" class="field-for-the-answer">').append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "35%"});
    } else if(taskName === 'superfluous') {
        let forRightId;
        taskSelection(taskName, null);

        for(let i = 0; i < arrayOfImagesToSelectAnExcessImage.length; i++) {
            if(theCorrectPictureForSelectingFromSuperfluousPictures === arrayOfImagesToSelectAnExcessImage[i]) {
                forRightId = 'unnecessary-image-among-the-right-ones';
            } else {
                forRightId = 'just-an-image-' + i;
            }
            $('.task').append('<div class="the-fourth-is-not-suitable"><label><input type="radio" name="picture-with-image" id="' + forRightId + '">' +
                '<img src="./images/for-the-task-superfluous/' + arrayOfImagesToSelectAnExcessImage[i] + '" width="100" height="100"></label></div>');
        }
        $('.task').append('<input type="button" value="OK" onclick="taskScreen.getValueFromTheField()">');

        $('.task').css("top", "40%");
    } else if(taskName === 'comparison-of-numbers') {
        taskSelection(taskName, null);

        $('.task').append('<p style="text-align: center"> >, <, = ?</p>').append(firstRandomNumberForComparison)
            .append('<input type="text" class="field-for-the-answer" size="1">').append(secondRandomNumberForComparison)
            .append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');
        $('.task').css({"top": "40%", "left": "45%"});
    } else if(taskName === 'translation-of-measurement-units') {
        taskSelection(taskName, null);

        $('.task').append('мм, см, м, км?').append('<br/>');

        $('.task').append(1).append(randomLengthUnit).append(' = ').append(randomNumberFromAnArrayOfNumbersTransferredFromOneUnitOfMeasureToAnother[0])
            .append('<input type="text" class="field-for-the-answer" size="1">').append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "43%"});
    } else if(taskName === 'blend-of-colors') {
        taskSelection(taskName, null);

        $('.task').append("Ответ - это цвет, который должен быть записан на" + '<br/>' + " английском языке с маленькой буквы." + '<br/>');

        $('.task').append('<div class="the-first-color-square-for-the-task-blend-of-colors"></div>').append('+')
            .append('<div class="the-second-color-square-for-the-task-blend-of-colors"></div>').append('=')
            .append('<input type="text" class="field-for-the-answer">').append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task .the-first-color-square-for-the-task-blend-of-colors').css("background", aRandomMixtureOfColorsWithTheResult[0]);
        $('.task .the-second-color-square-for-the-task-blend-of-colors').css("background", aRandomMixtureOfColorsWithTheResult[1]);

        $('.task').css({"top": "30%", "left": "35%"});
    } else if(taskName === 'perimeter-of-figures') {
        taskSelection(taskName, null);

        $('.task').append('<div class="block-in-which-there-is-a-geometric-figure">' +
            '<hr class="width-line" /><hr class="height-line" />' +
            '<div class="digital-value-of-the-width-of-the-geometric-figure-in-centimeters">' + digitalValueOfTheWidthOfTheGeometricFigureInCentimeters + 'см</div>' +
            '<div class="digital-value-of-the-height-of-the-geometric-figure-in-centimeters">' + digitalValueOfTheHeightOfTheGeometricFigureInCentimeters + 'см</div>' +
            '<div class="random-geometric-figure"></div></div>');

        if(widthOfAGeometricFigure === "100px") {
            $('.task .block-in-which-there-is-a-geometric-figure')
                .css({"width": "120px", "height": "150px"});
            $('.task .block-in-which-there-is-a-geometric-figure .digital-value-of-the-width-of-the-geometric-figure-in-centimeters')
                .css("left", "40px");
        } else if(widthOfAGeometricFigure === "150px") {
            $('.task .block-in-which-there-is-a-geometric-figure')
                .css({"width": "170px", "height": "150px"});
            $('.task .block-in-which-there-is-a-geometric-figure .digital-value-of-the-width-of-the-geometric-figure-in-centimeters')
                .css("left", "65px");
        }

        $('.task .block-in-which-there-is-a-geometric-figure .width-line')
            .css("width", widthOfAGeometricFigure);

        $('.task .block-in-which-there-is-a-geometric-figure .height-line')
            .css("height", heightOfAGeometricFigure);

        $('.task .block-in-which-there-is-a-geometric-figure .random-geometric-figure')
            .css({"width": widthOfAGeometricFigure, "height": heightOfAGeometricFigure});

        $('.task').append('P = ').append('<input type="text" class="field-for-the-answer">')
            .append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "30%", "left": "35%"});
    } else if(taskName === 'the-equation') {
        taskSelection(taskName, null);

        $('.task').append(theFirstRandomNumberForEquation).append(arraySigns[randElementArraySign]).append('x = ')
            .append(theAnswerOfEquation).append('<br />');
        $('.task').append('x = ').append('<input type="text" class="field-for-the-answer" size="1">')
            .append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "45%"});
    } else if(taskName === 'point-of-coordinates') {
        taskSelection(taskName, null);

        $('.task').append('<div class="input-of-x-and-y-coordinates"><span>x = </span>' +
            '<input type="text" class="field-for-the-answer-x" size="1"><span>y = </span>' +
            '<input type="text" class="field-for-the-answer-y" size="1">' +
            '<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()"></div>');

        $('.task').css({"top": "5%", "left": "35%"});
    } else if(taskName === 'chemical-element'){
        taskSelection(taskName, null);

        $('.task').append('Какое название у химического элемента ' + randomChemicalElement[0] + '?').append('<br/>')
            .append(randomChemicalElement[0] + ' - ').append('<input type="text" class="field-for-the-answer" size="15">')
            .append('<input type="button" value="OK"  onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "40%"});
    } else if(taskName === 'sound-of-an-animal') {
        let forRightId;

        taskSelection(taskName, null);

        $('.task').append('<input type="button" value="Прослушать" onclick="playAudio(randomSoundOfAnAnimal)">');

        for(let i = 0; i < arrayOfAnimalImages.length; i++) {
            if(correctImageOfAnAnimal === arrayOfAnimalImages[i]) {
                forRightId = 'unnecessary-image-among-the-right-ones';
            } else {
                forRightId = 'just-an-image-' + i;
            }
            $('.task').append('<div class="pictures-of-animals"><label><input type="radio" name="pictures-of-animals" id="' + forRightId + '">' +
                '<img src="./images/animals/' + arrayOfAnimalImages[i] + '" width="150" height="150"></label></div>');
        }

        $('.task').append('<input type="button" value="OK" onclick="taskScreen.getValueFromTheField()">');

        $('.task').css({"top": "40%", "left": "25%"});
    }
};

TaskScreen.prototype.getValueFromTheField = function () {
    document.getElementsByClassName('task-screen')[0].style.display = 'none';

    if(this._task === 'sequence') {
        let receivedWordFromTheUser = '';

        for(let i = 0; i < randomWordForSortingLetters.length; i++) {
            console.log($('ul.alphabet-sorting li').eq(i).text());
            receivedWordFromTheUser += $('ul.alphabet-sorting li').eq(i).text();
        }

        if(randomWordForSortingLetters === receivedWordFromTheUser) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }

        } else {
            attackOfTheEnemy();
        }

        console.log(receivedWordFromTheUser);

    } else if(this._task === 'transfer') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        for (let i = 0; i < arrayOfCorrectTranslatedWords[0].length; i++) {
            if (arrayOfCorrectTranslatedWords[0][i] === valueFromTheField) {

                spellHero(this._spell);

                if(this._spell === 'fireball') {
                    attackOfTheHero();
                } else if(this._spell === 'medical-rain') {
                    treatmentHero();
                }

                break;
            } else if (i === arrayOfCorrectTranslatedWords[0].length - 1) {
                attackOfTheEnemy();
            }
        }
    } else if(this._task === 'arithmetic') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;


            if (+valueFromTheField === numericResult) {

                spellHero(this._spell);

                if(this._spell === 'fireball') {
                    attackOfTheHero();
                } else if(this._spell === 'medical-rain') {
                    treatmentHero();
                }

            } else {
                attackOfTheEnemy();
            }
    } else if(this._task === 'listening') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;


        if (valueFromTheField === randomWordForAudio) {

            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }

        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'superfluous') {
        if(document.getElementById('unnecessary-image-among-the-right-ones').checked === true) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'comparison-of-numbers') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(valueFromTheField === theRightSignBetweenTwoRandomNumbers) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'translation-of-measurement-units') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(randomNumberFromAnArrayOfNumbersTransferredFromOneUnitOfMeasureToAnother[1] === valueFromTheField) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
        arrayOfNumbersTransferredFromOneUnitOfMeasureToAnother = [];
    } else if(this._task === 'blend-of-colors') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(aRandomMixtureOfColorsWithTheResult[2] === valueFromTheField) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'perimeter-of-figures') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(correctPerimeterResult === +valueFromTheField) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'the-equation') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(theSecondRandomNumberForEquation === +valueFromTheField) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'point-of-coordinates') {
        let valueFromTheFieldX = document.getElementsByClassName('field-for-the-answer-x')[0].value;
        let valueFromTheFieldY = document.getElementsByClassName('field-for-the-answer-y')[0].value;

        if((coordinateValueOnAbscissa === +valueFromTheFieldX) && (coordinateValueOnOrdinate === +valueFromTheFieldY)) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'chemical-element') {
        let valueFromTheField = document.getElementsByClassName('field-for-the-answer')[0].value;

        if(randomChemicalElement[1] === valueFromTheField) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    } else if(this._task === 'sound-of-an-animal') {
        if(document.getElementById('unnecessary-image-among-the-right-ones').checked === true) {
            spellHero(this._spell);

            if(this._spell === 'fireball') {
                attackOfTheHero();
            } else if(this._spell === 'medical-rain') {
                treatmentHero();
            }
        } else {
            attackOfTheEnemy();
        }
    }

    arrayOfCorrectTranslatedWords = [];
    $('.task').empty();
};

