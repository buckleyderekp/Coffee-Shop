const contentTarget = document.querySelector(".beanList")

export const Bean = (coffeeArray) => {
    const bean = `
    <div> 
    ${coffeeArray.map(c => {
        return `
             <h3>Name: ${c.name}</h3>
             <h5>Region: ${c.region}</h5>
             `
    }).join('')
        }
</div >`

    contentTarget.innerHTML = bean
}