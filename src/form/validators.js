//проверка поля формы на валидность
export const requiredField = value => {
    if (value) return undefined; // если value есть, то возвращаем undefined
    // а иначе "field is requred"
    return "field is requred"
}

// санк кнрейтор для количества символов (тут принцип замыкания)
// maxLength приходит из параметров функции maxLengthCreator, а value из поля формы
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`; 
    return undefined;
}

