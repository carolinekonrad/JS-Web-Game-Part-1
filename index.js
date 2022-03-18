// //refactor using a function
function newImage(src, left, bottom) {
    let object = document.createElement('img')
    object.src = src
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

//making new image objects
newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.style.position = 'fixed'
// sword.style.left = '500px'
// sword.style.bottom = '405px'
// document.body.append(sword)

// sword.addEventListener('click', function() {
//     sword.remove()
// })

function newItem(src, left, bottom) {
    let object = newImage(src, left, bottom)

    object.addEventListener('dblclick', function(){
        object.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 100)
newItem('assets/staff.png', 600, 100)