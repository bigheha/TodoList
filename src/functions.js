function createOption(valueAndText) {
    const option = document.createElement('option');
    option.setAttribute('value', valueAndText);
    option.innerHTML = valueAndText;
    return option;
}
function setFieldAttributes (element, type, idAndName) {
    element.setAttribute('type', type);
    element.setAttribute('id', idAndName);
    element.setAttribute('name', idAndName);
}

export {createOption, setFieldAttributes};