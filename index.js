


let tbody = document.getElementById("tbody")



fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })

function td_fun({id,title,price,description,category,image}){
    let td = document.createElement('tr');
    td.innerHTML = `
    <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                    <img src="${image}" class="h-10 w-10 rounded-full" alt="">
                </div>
                <div class="ml-4">
                    <div class="text-sm font-medium">
                     <h1 class="text-xl text-indigo-70">${title}</h1>  
                    </div>
                    <div class="text-sm text-gray-500">
                        ${description.split(" ").splice(0,18).join(' ')}

                    </div>
                </div>
            </div>
    </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <span class="text-lg text-gray-500">${price}</span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <span class="px-2 inline-flex text-xs leading-5 font-semibold text-lg rounded-full bg-green-100 text-green-800">
           ${category}
        </span>
    </td>
        </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <button  class='bg primary'>Update</button>
    </td>
    </td>
      <td class="px-6 py-4 whitespace-nowrap">
        <button onclick=${deleteData(id)}   class='bg-danger'>delete</button>
    </td>
  
    
    `;
    return td;
}




// Function to delete 
const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete the data');
      }
  
      console.log(`Resource with ID: ${id} deleted successfully`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


//   function to delete
const updateData = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update the data');
      }
  
      const data = await response.json();
      console.log('Updated data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  