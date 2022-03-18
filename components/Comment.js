import React from 'react'
import {
    comment,
    innerCon,
    nameTime,
    replyComment,
    user,
    time
} from "../styles/comment.module.css"

const Comment = () => {
  return (
    <div className={comment}>
        <p>Fusce bibendum fringilla nunc vitae condimentum.
           Vivamus ante velit, 
            fermentum id mattis sed, 
            venenatis eu nulla. Proin lacus dui, 
            faucibus sit amet maximus et,
        </p>
        <div className={innerCon}>
            <div className={nameTime}>
                <h4 className={user}>Felix<br/><span className={time}>An bour ago</span></h4>
            </div>
            <div className={replyComment}>
                <p>Reply Comment</p>
            </div>
        </div>
    </div>
  )
}

export default Comment