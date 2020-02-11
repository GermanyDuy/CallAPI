//quản lý các sản phẩm đang edit

import * as Types from './../constants/actionType'

var initialState={}
 const itemEditing=(state=initialState,action)=>{
    switch (action.type) {
        case Types.EDIT_PRODUCT://Tiến hành lưu product lên store
        return action.product
        default:
            return state
    }
 }

 export default itemEditing