const getElement = (selector) => document.querySelector(selector);

const clearMessages = (form) => {
    for (let element of form.elements) {
        const span = element.nextElementSibling;
        if (span) span.textContent = "*";
    };
};
document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    form.noValidate = true; // tắt cơ chế kiểm tra dữ liệu mặc định

    for (let element of form.elements) {
        element.oninvalid = (evt) => {
            const elem = evt.currentTarget;
            const msg = elem.title ? elem.title : elem.validationMessage;

            const span = elem.nextElementSibling;
            if (span) span.textContent = msg;
        };
    };

    form.onsubmit = (evt) => {

        clearMessages(form);

        const dobElement = getElement("#dob");
        const dob = new Date(dobElement.value);
        
        

        const limit = new Date();
        limit.setFullYear(limit.getFullYear() - 13);
        
    
        const msg = dob > limit ? dobElement.title : "";
        dobElement.setCustomValidity(msg);
        
        if (!form.checkValidity()) {
            evt.preventDefault();
        };
    };
    getElement("#reset_form").onclick = () => {
        clearMessages(form);
        getElement("#email_address").focus();
    };
});