import React, { Component } from 'react';
import {connect} from 'react-redux'


class NoteItem extends Component {
    btnEditClick =  () => {
        this.props.changeEditStatus()
        console.log(this.props.note);
        this.props.defaulValue(this.props.note)
    }
    deleteID = () => {
        this.props.deleteItem(this.props.note)
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0">
                    <a data-toggle="collapse" data-parent="#noteList" href={'#number'+this.props.i} aria-expanded="true" aria-controls="section1ContentId">
                        {this.props.noteTitle}
                    </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-outline-info" onClick={() => this.btnEditClick()}>Sửa</button>
                            <button onClick={() => {this.deleteID()}} className="btn btn-outline-secondary">Xoá</button>
                        </div>
                    </h5>
                </div>
                <div id={'number'+this.props.i}  className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                    {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStatus: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        showForm: () => {
            dispatch({
                type: "CHANGE_EDIT_STATUS"
            })
        },
        defaulValue: (editObj) => {
            dispatch({
                type: "DEFAUL_VALUE_EDIT",
                editObj
            })
        },
        deleteItem: (getItem) => {
            dispatch({type: "DELETE",getItem})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
