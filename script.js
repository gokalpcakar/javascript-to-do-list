let formDOM = document.querySelector("#addForm")
let list = document.querySelector("#list")
let toastDOM = document.querySelector(".toast-notification")

// burada liste elemanlarının seçilmesini sağlıyoruz
list.addEventListener(
    "click",
    function(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

formDOM.addEventListener("submit", addElemenet)

// listeye eleman eklemeye yarayan fonksiyon
function addElemenet(e) {

    e.preventDefault()

    const liDOM = document.createElement("li")
    const inputDOM = document.querySelector("#formInput")

    if (inputDOM.value == "") {

        toastFunction("danger", "fas fa-exclamation-circle", "Dikkat!", "Listeye boş karakter eklenemez!")

        $(document).ready(function() {
            $("#myToast").toast('show');
        });
    } else {

        liDOM.classList.add("list-group-item")
        liDOM.innerHTML =
            `
                ${inputDOM.value}
                <button type="button" onclick="removeElement(this)"><i class="fas fa-times"></i></button>
            `
        list.append(liDOM)
        inputDOM.value = ""

        toastFunction("success", "fas fa-check-circle", "Tebrikler!", "Listeye ekleme işleminiz başarıyla gerçekleştirildi!")

        $(document).ready(function() {
            $("#myToast").toast('show');
        });
    }
}

// listeden eleman silmeye yarayan fonksiyon
function removeElement(element) {

    const parentElement = element.parentElement
    parentElement.remove()
}

// toast işlemi gerçekleştirildiğinde görüntünün değişmesini sağlayan fonksiyon
function toastFunction(borderAndBackgroundColor, toastIcon, title, message) {

    toastDOM.innerHTML =
        `
            <div class="toast mr-4 mt-4 border border-${borderAndBackgroundColor} text-white" id="myToast" data-autohide="false" style="position: absolute; top: 0; right: 0;">
                <div class="toast-header bg-light">
                    <strong class="mr-auto text-${borderAndBackgroundColor}"><i class="${toastIcon}"></i> ${title}</strong>
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>

                <div class="toast-body bg-${borderAndBackgroundColor}">
                    <div>${message}</div>
                </div>
            </div>
        `
}