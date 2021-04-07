import React from 'react'
import {Row, Col, Modal, Image, Form, Button} from 'react-bootstrap'
import {RiPencilLine} from 'react-icons/ri'

class Experience extends React.Component {

    state={
        showEditModal: false,
        exp:[],
        showDeleteModal: false,
        showExpPicture: false,
        user:[]
    }

    componentDidMount=async()=>{
        let response= await fetch("https://striveschool-api.herokuapp.com/api/profile/me",{
            headers: new Headers({
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU3M2I3MDhjMjAwMTc1ZGU4OTIiLCJpYXQiOjE2MTc2OTgwMzAsImV4cCI6MTYxODkwNzYzMH0.TOmN-5OfdH2fkLOGF_7LLVIu1cq89o-kEVCzAD_PKFs"
                'content-type': 'application/json'})
        })
        let user=await response.json()
        this.setState({user})
     }

    singleExperience = async() => {
        let response= await fetch(,{
            headers: new Headers({
                'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YjU3M2I3MDhjMjAwMTc1ZGU4OTIiLCJpYXQiOjE2MTc2OTgwMzAsImV4cCI6MTYxODkwNzYzMH0.TOmN-5OfdH2fkLOGF_7LLVIu1cq89o-kEVCzAD_PKFs",
                'content-type': 'application/json'})
            })
            let exp=await response.json()
            this.setState({exp})
            this.setState({ showEditModal: true })
    }

  

    editExperience = async (e) => {
        e.preventDefault();
    
        try {
          let response = await fetch(, {
            method: "PUT",
            body: JSON.stringify(this.state.exp),
            headers: {
                'Authorization': ,
                "Content-Type": "application/json"
            }
          });
          if (response.ok) {
            this.setState({
                showEditModal: false,
              exp: {
                role: "",
                company: "",
                startDate: "",
                endDate: "",
                description: "",
                area: ""
                }
            });
            this.props.fetchExperience()
          } else {
            let json = await response.json();
            console.log(json)
          }
        } catch (err) {
          console.log(err);
        }
      };

    deleteExperience = async() => {
        let response= await fetch(,{
        method:'DELETE',
        // body: JSON.stringify(this.state.student),
        headers: new Headers({
            'Authorization': ,
            'content-type': 'application/json'})
    }
   
    )
    if(response.ok){
        
        this.props.fetchExperience()
    }    
    }

    render(){
      
        return(
            <>
                
            </>
        )
    }
}

export default Experience;