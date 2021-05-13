import {noteData} from './firebaseConnect';
var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    valueEdit: {},
    AlertShow: false,
    AlertContent: ""
   
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
            if(action.getItem.title && action.getItem.value){
                noteData.push(action.getItem)
                console.log(`Them du lieu ${JSON.stringify(action.getItem)} thanh cong`);
            }else{
                alert('Không để trống')
                return {...state,isEdit:!state.isEdit}  
            }
            
            return state
        case 'CHANGE_EDIT_STATUS':
           
            return {...state,isEdit:!state.isEdit}
        case 'SHOW_EDIT_FORM':
        
            return {...state,isEdit:true}    
        case 'DEFAUL_VALUE_EDIT':
        
            return {...state,valueEdit: action.editObj} 
        case 'DELETE':
        console.log('dl can xoa' + action.getItem.id);
        noteData.child(action.getItem.id).remove()
        return state  
        case 'EDIT':
            console.log('du lieu can sua'+ JSON.stringify(action.getItem));
            noteData.child(action.getItem.id).update({
                title: action.getItem.noteTitle ,
                value: action.getItem.noteContent
            })
            console.log('Da cap nhat du lieu'+ JSON.stringify(action.getItem)+ 'thanh cong');
            return {...state,valueEdit: {}}
        case 'ALERT_ON':
        return {...state,AlertShow: true,AlertContent: action.alertContent}
        case 'ALERT_OFF':
        return {...state,AlertShow: false}        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;