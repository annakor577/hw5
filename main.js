//homework 5

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let currentKeyIndex = 0;

const keyElement = document.getElementById('key');
const newGameButton = document.getElementById('newGame');

function setNextKey() {
    if (currentKeyIndex < keys.length) {
        keyElement.textContent = keys[currentKeyIndex];
    } else {
        Pnotify.success({
            title: 'Перемога!',
            text: 'Ви натиснули всі правильні клавіші!',
        });
    }
}

function startNewGame() {
    currentKeyIndex = 0;
    setNextKey();
}

window.addEventListener('keydown', (event) => {
    if (currentKeyIndex < keys.length) {
        if (event.key.toUpperCase() === keys[currentKeyIndex]) {
            currentKeyIndex++;
            setNextKey();
        } else {
            PNotify.error({
                title: 'Помилка!',
                text: `Ви натиснули неправильну клавішу: ${event.key.toUpperCase()}`,
            });
        }
    }
});

window.addEventListener('keypress', (event) => {
    event.preventDefault();
});

newGameButton.addEventListener('click', startNewGame);

startNewGame();




const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    datasets: [
        {
            label: "Продажі за останній місяць",
            data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
            backgroundColor: "rgba(33, 150, 243, 0.2)",
            borderColor: "#2196f3",
            borderWidth: 1,
            fill: true
        }
    ]
};

const config = {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Дні місяця'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Продажі'
                },
                beginAtZero: true
            }
        }
    }
};

const ctx = document.getElementById('sales-chart').getContext('2d');
const salesChart = new Chart(ctx, config);



  