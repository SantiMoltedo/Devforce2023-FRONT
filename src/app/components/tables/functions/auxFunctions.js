export const sortTable = (n, dir, setDir) => {
    let table, rows, switching, i, x, y, shouldSwitch, switchcount = 0
    console.log(dir);
    table = document.getElementById("tablaUsuarios")
    switching = true
    while (switching) {
        switching = false
        rows = table.rows
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false
            x = rows[i].getElementsByTagName("TD")[n]
            y = rows[i + 1].getElementsByTagName("TD")[n]
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true
                    break
                }
            }
            if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true
                    break
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
            switchcount++
        }
    }
    if (dir == "asc") {
        setDir("desc")
    } else {
        setDir("asc")
    }
    document.getElementById(`col${n}`).classList.toggle("rotated")
    if (n == 2) {
        document.getElementById(`col2`).classList.remove("text-secondary")
        document.getElementById(`col0`).classList.add("text-secondary")
    } else {
        document.getElementById(`col2`).classList.add("text-secondary")
        document.getElementById(`col0`).classList.remove("text-secondary")
    }
}

export const expandRow = (i) => {
    let collapsed = document.getElementById(`s${i}-collapsed`)
    let expanded = document.getElementById(`s${i}-expanded`)
    if (collapsed.style.display == '' || collapsed.style.display == 'table-row') {
        collapsed.style.display = 'none'
        expanded.style.display = 'table-row'
    } else {
        collapsed.style.display = 'table-row'
        expanded.style.display = 'none'
    }
}