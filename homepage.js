//sandboxdev AWS Connect instance
let customer1 = {
    "connectARN": "08aaaa8c-2bbf-4571-8570-f853f6b7dba0",
    "contactFlowARN": "669aa1e2-2530-4475-8ec8-693ee6b84c1d"
}

//mastest1 AWS Connect instance
let customer2 = {
    "connectARN": "cd54d26a-fee3-4645-87da-6acae50962a5",
    "contactFlowARN": "918bb04e-f3b1-4e07-b101-ebd90191c109"
}

//mastest2 AWS Connect instance
let customer3 = {
    "connectARN": "ce2575a1-6ad8-4694-abd6-53acf392c698",
    "contactFlowARN": "1165bcb6-ac61-4faf-b143-c77b25d1f792"
}

customer1Button = document.querySelector("#customer1")
customer2Button = document.querySelector("#customer2")
customer3Button = document.querySelector("#customer3")
customer1Button.value = JSON.stringify(customer1)
customer2Button.value = JSON.stringify(customer2)
customer3Button.value = JSON.stringify(customer3)
function redirect(arnObject) {
    let connectARN = arnObject.connectARN;
    let contactFlowARN = arnObject.contactFlowARN;
    location.href = `metrics.html?connectARN=${connectARN}&contactFlowARN=${contactFlowARN}`;
}

function parseARNObject(event) {
    let stringObject = event.target.value;
    let parsedObject = JSON.parse(stringObject)
    redirect(parsedObject)
}
customer1Button.addEventListener("click", parseARNObject)
customer2Button.addEventListener("click", parseARNObject)

window.onload = () => {
    let hash = window.location.hash;
    let token = hash.split("access_token=")[1].split("&")[0];
    sessionStorage.setItem("MetricVisionAccessToken", token)
}


