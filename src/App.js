import React, { Component } from 'react';
// import News from './News';
// import  firebase from 'firebase';
import Nav from './Nav';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {connect} from 'react-redux'
import AlertInfo from './AlertInfo';

class App extends Component {
	
	
	
//   pushData = () => {
//     
//     connectData.push({
//       title: "Ghi chu new",
//       content: "Noi dung ghi chu new"
//     })
//   }
//   removeData = (id) => {
//     var connectData = firebase.database().ref('dataForNote');
//     connectData.child(id).remove();
//   }
	// addData = (item) => {
	// 	//var connectData = firebase.database().ref('dataForNote');
	// 	console.log(item);
	// 	noteData.push(item)
	// 	alert('Thêm Dữ Liệu Thành Công')
	// }
	showForm = () => {
		if(this.props.isEdit){
			return <NoteForm />
		}
	}
	displayForm = () => {
		this.props.changeEditStatus();
	}	
  render() {
    //  console.log(noteData.val())
    
    
    

    return (
      <div>
		  
          <Nav />
		  <h1 className="text-center">Quản lý công việc bằng React JS kết hợp Redux và database Firebase</h1>
		  <AlertInfo />
          <div className="container">
			  <div className="row justify-content-end mb-3">
				  <div className="col">
				 	 <button onClick={() => {this.displayForm()}} className="btn btn-success float-right">Thêm mới ghi chú</button>
				  </div>
			  </div>
              <div className="row">
				<NoteList />
				{this.showForm()}
              </div>
          </div>
      </div>
      
    );
  }
}
const  mapStateToProps = (state, ownProps) => {
	return {
		isEdit: state.isEdit
	}
}
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeEditStatus: () => {
			dispatch({
				type:"CHANGE_EDIT_STATUS"
			})
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)


