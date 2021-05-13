import React, { Component } from 'react';
import NoteItem from './NoteItem';
import {noteData} from './firebaseConnect';



class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }
    
    UNSAFE_componentWillMount(){
        noteData.on('value',(notes) => {
            var arrayData = []
            notes.forEach((element) => {
                const key  = element.key 
                const noteTitle = element.val().title;
                const noteContent = element.val().value;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
                this.setState({
                    dataFirebase: arrayData
                });
            })
            // console.log(notes.val());
            //console.log(arrayData);
        })
    }
    getData = () => {
        if(this.state.dataFirebase){
            return this.state.dataFirebase.map((value,key) => {
                return <NoteItem 
                note={value}
                key={key} 
                i={key}
                noteTitle = {value.noteTitle}
                noteContent = {value.noteContent}
                />
            })
        }
        
    }
   
    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;