import React from "react"
import Button from "./Button"
import { useNavigate, useParams } from "react-router-dom"

import "./TaskDetails.css"

const TaskDetails = () => {
  const params = useParams()
  const navigate = useNavigate()

  const handleBackButtonClick = () => {
    navigate(-1)
  }
  return (
    <>
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <Button>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          explicabo error molestiae repudiandae porro non? Aut ab a optio velit,
          minus, vero cupiditate reiciendis est consequatur hic debitis facere
          blanditiis!
        </p>
      </div>
    </>
  )
}

export default TaskDetails
