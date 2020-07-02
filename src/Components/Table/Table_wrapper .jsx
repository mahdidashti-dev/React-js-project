import React, { useState, useEffect } from 'react'
import Header from './Header'
import Tbody from './Tbody'
import Loader from './Loader/Loading'
import AddRow from './NewRow/AddRow'

// import AddColumn from './AddColumn'

export default function Table_wrapper() {
    const [spinner, setSpinner] = useState(true)
    const [getData, setGetData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.ir/users').then(res => res.json()).then(res => {
            setGetData(res)
            setSpinner(false)
        })

    }, [getData.length > 11])



    const tableData = {

        columns: {
            id: {
                title: 'شناسه',
                clickable: value => {
                    alert(value);
                },
            },
            title: {
                title: 'نام و نام خانوادگی'
            },
            phoneNumber: {
                title: 'تلفن',
                clickable: value => {
                    alert(value);
                }
            },
        }
    };



    const columnsItem = tableData.columns
    const columnData = getData.map(value => {
        return {
            id: value.id,
            name: value.name,
            phone: value.phone,
        }
    })



    //  ///////////////////////////////////////////////////////////////////////////////////

    const [searchValue, setSearchValue] = useState();
    const results = getData.map((data) => {

        // const arrayStr = searchValue.toString().split(" ");

        const dataName = data.name.concat(data.name)

        if (dataName.includes(searchValue)) {
            return <p className='border p-3' style={{ backgroundColor: '#FFD271', color: 'white', fontSize: '20px' }}> نام {searchValue} در جدول وجود دارد</p>

        } else {
            return false
        }

    })

    const serachValue = (e) => {
        if (e.target.value) {
            setSearchValue(e.target.value);
        }
    }
    ////////////////////////////////////////////////////////


    return (
        <div style={{ backgroundColor: 'white' }} className='w-100 p-4 mr-lg-5'>

            <div className='text-center m-2'>
                <span>تمامی اطلاعات این جدول به صورت restApi  از سایت " jsonplaceholder.ir " گرفته شده است</span>
            </div>

            <div className='input-group mb-3 mt-3 w-50'>
                <input className='form-control' type='text' placeholder='جستجو بر اساس نام و نام خانوادگی' onChange={serachValue} />
            </div>

            <AddRow />

            {/* <AddColumn /> */}

            <table className="table table-bordered table-hover" id='myTable'>
                {spinner && <Loader />}
                {!spinner &&
                    <>
                        <Header columns={columnsItem} />
                        <Tbody columns={columnsItem} items={columnData} id='TB' />

                    </>
                }
            </table>

            <div className='text-center p-2'>
                <div className='text-center text-danger'>
                    نتیجه جستجو :
                    </div>
                <span>
                    {results}
                </span>
            </div>

        </div >

    )
}
