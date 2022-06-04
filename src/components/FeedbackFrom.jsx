import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackFrom() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const[text,setText]=useState('')
    const[btnIsDisabled,setBtnIsDisabled]=useState(true)
    const[massage,setMassage]=useState('')
    const[rating,setRating]=useState(10)

    useEffect(
        ()=>{
            if(feedbackEdit.editMode === true){
                setBtnIsDisabled(false)
                setText(feedbackEdit.item.text)
                setRating(feedbackEdit.item.rating)
            }
        }, [feedbackEdit]
    )

    const handleTextChange=(e)=>{
        let val=e.target.value
        if(val === ''){
            setMassage('')
            setBtnIsDisabled(true)
        }else if(val.trim().length<10){
            setMassage('Review must have at lease 10 characters')
            setBtnIsDisabled(true)
        }
        else{
            setMassage('')
            setBtnIsDisabled(false)
        }
        setText(val)
    }
    const handleSubmit=(e) => {
        e.preventDefault()
        let newFeedbackItem = {
            rating,
            text
        }
        if(text.trim().length>=10){
            if(feedbackEdit.editMode){
                updateFeedback(feedbackEdit.item.id,newFeedbackItem)
            }else{
                addFeedback(newFeedbackItem)
            }
        }
        setText('')
        setBtnIsDisabled(true)
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>Please give us a feedback, try compliment us, will you?</h2>
            <RatingSelect select={(rate)=>setRating(rate)}/>
            <div className='input-group'>
                <input 
                type="text" 
                value={text}
                onChange={(e) => handleTextChange(e)}
                minLength={10}
                placeholder='Write a review'/>
                <Button type="submit" version="secondary" isDisabled={btnIsDisabled}>Send</Button>
            </div>
            {massage && <div className='massage'>{massage}</div>}
        </form>

    </Card>
  )
}

export default FeedbackFrom