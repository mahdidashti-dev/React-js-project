import React from 'react'

export default function AddRow() {


    return (
        <div className='text-right'>

            <button className='btn btn-success m-2 '  onClick={() => {
                let table = document.getElementById("myTable");
                let row = table.insertRow();
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
               

                cell1.innerHTML = "مقدار جدید";
                cell2.innerHTML = "مقدار جدید";
                cell3.innerHTML = "مقدار جدید";

                // ////////////////////////////////////////////
                // const inp1 = document.createElement('input')
                // inp1.setAttribute('id', 'INP1')
                // const inp2 = document.createElement('input')
                // inp2.setAttribute('id', 'INP2')
                // const inp3 = document.createElement('input')
                // inp3.setAttribute('id', 'INP3')

                // const btnSave = document.createElement('button')
                // const btnSaveData = document.createTextNode('ذخیره')

                // btnSave.appendChild(btnSaveData)
                // cell1.appendChild(inp1)
                // cell2.appendChild(inp2)
                // cell3.appendChild(inp3)
                // cell4.appendChild(btnSave)
                // const buttonSave = cell4.appendChild(btnSave)
                // buttonSave.addEventListener('click', () => {
                //     const a = document.querySelector('#INP1').value
                //     const b = document.querySelector('#INP2').value
                //     const c = document.querySelector('#INP3').value
                //     // SubmitData({
                //     //     a, b, c
                //     // })

                // })
            }}>اضافه کردن سطر</button>

        </div>
    )
}
