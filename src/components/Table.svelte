<script>

// export let data

let data = {
    ignore1: 85,
    ignore2: "2020-10-31",
    ignore3: "some data",
    ignore4: "another data",
    ignore5: "../../assets/img/avatar.jpg",
    col1: ["cell1", "cell1", "cell1", "cell1"],
    col2: ["cell2", "cell2", "cell2", "cell2", "cell2", "cell2"],
    col3: ["cell3", "cell3", "cell3"]
}


let columns = []
let values = []
for (const [col, val] of Object.entries(data)) {  
  if (Array.isArray(val)) {
    columns.push(col)
    values.push(val)
  }
}

console.log(columns)
console.log(values)


// From the list of values get the max len of a list 
let rows_len = Math.max(0, ...values.map(item => item.length))

// Normalize lists to have the same length as the biggest one in the nested lists
let rows = values.map(li => {
    if (li.length != rows_len) {
        let fill_arr = Array.from({length: rows_len - li.length}).map(el => "")
        li.push(...fill_arr)
    }
    return li
})

console.log(rows)

let rows_range = Array.from({length: rows_len}).map(el => "")

</script>


<table class="w-full">
    
    <thead class="capitalize border-b-2">
        <tr>
            {#each columns as col}
                <td>{col}</td>
            {/each}
        </tr>
    </thead>

    <tbody>

        {#each rows[0] as row, i}
            <td>{row}</td>
        {/each}

    </tbody>

</table>