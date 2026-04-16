function calculateBMI() {
    // 1. Получаем значения из полей
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('bmi-result');

    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value);

    // 2. Проверка на ввод
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
        resultDiv.innerHTML = '<span style="color: #FF6B35;">Введите корректные данные</span>';
        return;
    }

    // 3. Расчет (рост в метры)
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    // 4. Определение категории и цвета
    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Дефицит веса";
        color = "#3498db"; 
    } else if (bmi < 25) {
        category = "Норма";
        color = "#2ecc71"; 
    } else if (bmi < 30) {
        category = "Избыточный вес";
        color = "#FF6B35"; // Наш акцентный оранжевый
    } else {
        category = "Ожирение";
        color = "#e74c3c"; 
    }

    // 5. Вывод результата
    resultDiv.innerHTML = `
        <div style="font-size: 24px; font-family: 'Oswald'; color: #2D3436;">${bmi}</div>
        <div style="color: ${color}; font-weight: 700; text-transform: uppercase; font-size: 14px;">${category}</div>
    `;
}

function calcBMI() {
    const w = parseFloat(document.getElementById('bmi-w').value);
    const h = parseFloat(document.getElementById('bmi-h').value) / 100;
    if (w > 0 && h > 0) {
        document.getElementById('bmi-res').innerText = "Ваш ИМТ: " + (w / (h * h)).toFixed(1);
    }
}

function calcPFC() {
    const weight = parseFloat(document.getElementById('p-weight').value) / 100;
    const b = (parseFloat(document.getElementById('p-b').value) * weight).toFixed(1);
    const f = (parseFloat(document.getElementById('p-z').value) * weight).toFixed(1);
    const u = (parseFloat(document.getElementById('p-u').value) * weight).toFixed(1);
    document.getElementById('pfc-res').innerHTML = `В порции: Б ${b}г | Ж ${f}г | У ${u}г`;
}
function openProduct(name, price, img) {
    // Заполняем данные
    document.getElementById('detail-title').innerText = name;
    document.getElementById('detail-price').innerText = price;
    document.getElementById('detail-img').innerHTML = `<img src="${img}" style="max-width: 100%; max-height: 300px; object-fit: contain;">`;

    // Прячем только каталог, показываем детали
    document.getElementById('catalog-section').style.display = 'none';
    document.getElementById('product-detail-page').style.display = 'block';
    window.scrollTo(0, 0);
}

function showCatalog() {
    // Прячем детали, возвращаем каталог
    document.getElementById('product-detail-page').style.display = 'none';
    document.getElementById('catalog-section').style.display = 'block';
}


