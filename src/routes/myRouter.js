import TodoList from '../Components/Todo/MainPage'

import TableWrapper from '../Components/Table/Table_wrapper '
import AddProduct from '../Components/AddProduct/FristPage'

const routes = [
    {
        path: '/dashboard/table',
        component: TableWrapper,
        exact: true
    },
    {
        path: '/dashboard/List',
        component: TodoList,
        exact: true
    },
    {
        path: '/dashboard/add',
        component: AddProduct,
        exact: true
    }

]
export default routes