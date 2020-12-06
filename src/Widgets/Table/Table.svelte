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


// console.log(columns)
// console.log(values)


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


// console.log(rows)


// Make 2 dummy lists with the length of cols and rows
let cols_range = Array.from({length: columns.length}).map(el => "")
let rows_range = Array.from({length: rows_len}).map(el => "")


// console.log(`${rows_range.length}rows, ${cols_range.length}cols`)


let html_rows = []
for (let ir = 0; ir < rows_range.length; ir++) {

    let html_row = []
    for (let ic = 0; ic < cols_range.length; ic++) {
        // console.log(ic, ir, rows[ic][ir])
        html_row.push(rows[ic][ir])
    }

    html_rows.push(html_row)
}

// console.log(html_rows)

</script>


{#if html_rows.length > 0 }

  <div class="overflow-x-auto p-2 text-xs md:text-sm px-4">

    <table class="w-full mt-4">
        <thead class="capitalize border-b-2 font-semibold">
            <tr>
                {#each columns as col}
                    <td>{col}</td>
                {/each}
            </tr>
        </thead>

        <tbody class="text-gray-800">
            {#each html_rows as row}
              <tr>
                {#each row as cell}
                  <td>{cell}</td>
                {/each}
              </tr>
            {/each}
        </tbody>
    </table>

  </div>


{/if}

<style>
table {
    min-width: 470px;
}
</style>