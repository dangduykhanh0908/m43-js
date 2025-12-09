const getElement = (selector) => document.querySelector(selector);

const processEntries = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const terms = getElement("#terms");



    let isValid = true;
    if (email.value == ""){
        email.nextElementSibling.textContent = "this field is required";
        isValid = false;
    } else {
        email.nextElementSibling.textContent = "";
    }

    if (phone.value == ""){
        phone.nextElementSibling.textContent = "this field is required";
        isValid = false;
    } else {
        phone.nextElementSibling.textContent = "";
    }

    if (country.value == ""){
        country.nextElementSibling.textContent = "this field is required";
        isValid = false;
    } else {
        country.nextElementSibling.textContent = "";
    }

  

    if (!terms.checked) {
        terms.nextElementSibling.textContent = "This field is required."
        isValid = false;
    } else {
        terms.nextElementSibling.textContent = ""
    }

    if (isValid) {
        getElement("form").submit();
    }

      
    
};



const resetForm = () => {
    getElement("form").reset();
    getElement("#email_address").nextElementSibling.textContent = "";
    getElement("#phone").nextElementSibling.textContent = "";
    getElement("#country").nextElementSibling.textContent = "";
    getElement("#terms").nextElementSibling.textContent = "";
    getElement("#email_address").focus();
};
    
    getElement("#register").onclick = processEntries;
    getElement("#reset_form").onclick = resetForm;
    getElement("#email_address").focus();


