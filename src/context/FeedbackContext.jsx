import React from 'react'
import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext()



export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
    ])

    const [isLoding, setIsLoading] = useState(true)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        editMode: false
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const response = await fetch(`/feedback?_sort=rating&_order=desc`)
        let data = await response.json()  
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure you want to delete?")){
            await fetch(`/feedback/${id}`, {
                method: 'DELETE'
            })
            setFeedback(feedback.filter((item)=>item.id!==id)) 
        }
    }
    
    const addFeedback=async (newFeedback)=>{
        const response=await fetch('/feedback',{
            method:'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)
        })
        const data=await response.json()
        setFeedback([data,...feedback])
    }

    const editFeedback=(item)=>{
        setFeedbackEdit(
            {
                item: item, 
                editMode: true,
            })
    }   

    const updateFeedback=async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...updItem})
        })
        const data= await response.json()
        setFeedback(()=>(feedback.map((item)=>(
           ((item.id === id) ? {...data} : item)
        ))))
    }

    return (    <FeedbackContext.Provider
        value={{
        feedback,
        feedbackEdit,
        isLoding,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>)
}
export default FeedbackContext