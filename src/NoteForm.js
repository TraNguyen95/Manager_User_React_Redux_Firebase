import React, { Component } from 'react';
import {connect} from 'react-redux'

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: "",
            noteContent: "",
            id: ""
        }
    }
    componentWillMount(){
        if(this.props.editItem){
            this.setState({
                noteTitle: this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            });
        }
    }
    

    getValInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
        
    }
    addData = (t,v) => {
        if(this.state.id){
            var editObj = {}
            editObj.id = this.state.id 
            editObj.noteTitle = this.state.noteTitle 
            editObj.noteContent = this.state.noteContent
            this.props.editDataStore(editObj)
            this.props.changeEditStatus()
            this.props.alertOn('Sửa Thành Công')
        }else{
            var item = {}
            item.title = t
            item.value = v
            // //console.log(item);
            // this.props.getData(item)
            // item = JSON.stringify(item);
            this.props.addDataStore(item);
            this.props.changeEditStatus()
            this.props.alertOn('Thêm Mới Thành Công')
        }
       
        
    }
    render() {
        return (
            <div className="col-4">
                <h3>Nội Dung Note</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tieu De Note</label>
                        <input onChange = {(e) => {this.getValInput(e)}} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tieu De Note" defaultValue={this.props.editItem.noteTitle} />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Điền Tiêu Đề Note</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội Dung Note</label>
                        <textarea defaultValue={this.props.editItem.noteContent} onChange = {(e) => {this.getValInput(e)}} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" placeholder="Nội Dung Note"  />
                        <small id="helpIdNoteContent" className="form-text text-muted">Điền Nội Dung Note</small>
                    </div>
                    <button type="reset" onClick={() => {this.addData(this.state.noteTitle,this.state.noteContent)}} className="btn btn-primary btn-block">Lưu</button>
                </form>
                
            </div>

        );
    }
}

 const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.valueEdit
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: "ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type: "EDIT",getItem})
        },
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        alertOn: (alertContent) => {
            dispatch({
                type: "ALERT_ON",alertContent
            })
        },
        alertOff: () => {
            dispatch({
                type: "ALERT_OFF"
            })
        }
        

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
// export default NoteForm;