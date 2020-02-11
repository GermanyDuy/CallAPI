import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductActionPage from "./pages/ProductActionPage/ProductActionPage";

const routes=[
    {
        path:"/",
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:"/product-list",
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:"/product/add",
        exact:false,
        main:({history})=><ProductActionPage history={history}/>
    },
    {//Cập nhật thông tin sản phẩm dựa vào /:id thêm/edit để chỉ trang này sửa
        //muốn lấy tham số id cần thêm {match}
        path:"/product/:id/edit",
        exact:false,
        main:({match,history})=><ProductActionPage match={match} history={history}/>
    },
    {
        path:"",
        exact:false,
        main:()=><NotFoundPage/>
    },

]
export default routes