
const formTarget = document.querySelector(".form")

export const form = () => {

    formTarget.innerHTML =
        ` <header>
<div class="main">
<h2>Enter New Bean</h2>
</header>
<form action="" class="form">

<fieldset class="fieldsets">
    <label for="beanName" class ="beanName">Bean Name:</label>
    <input type="text" name="beanName" id="beanName" class ="beanName">
</fieldset>
<fieldset class="fieldsets">
    <label for="region" class ="region">Region:</label>
    <input type="text" name="region" id="region" class ="region">
</fieldset>
<fieldset class="fieldsets">
    <label for="notes" class ="notes">Notes:</label>
    <input type="notes" name="notes" id="notes" class ="notes">
</fieldset>

</form>
<button  id = "saveBean" value="Save Bean">Save Bean</button>
</div>`
}

formTarget, addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveBean") {
        const beanName = document.querySelector("#beanName").value
        const region = document.querySelector("#region").value
        const notes = document.querySelector("#notes").value
        const newBean = {
            name: beanName,
            region: region,
            notes: notes
        }

    }

})