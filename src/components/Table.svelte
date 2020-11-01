<script>

export let data


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

        {#each rows as row, i}
            <tr id={i}>
                {#each row as cell}
                    <td>{cell}</td>
                {/each}
            </tr>
        {/each}

    </tbody>

</table>