import React from 'react'
import "./Wizard.css"
import left from "../../assets/left.gif"
import right from "../../assets/right.gif"
import { connect } from 'react-redux'

interface Props {
    speed:Number
    x:any,
    y:any,
    isLeft:boolean
}
const Wizard: React.FC<Props> = ({ x, y, isLeft,speed }) => {
    return (
        <img style={{ top: y, left: x,    transition: `all linear ${speed}s`}} className='wizard' src={isLeft ? left : right} />
    )
}

const mapStateToProps = (state:Record<string,any>) => ({
    x:state.position.x,
    y:state.position.y,
    isLeft:state.position.isLeft,
    speed:state.position.speed
  })
  

export default connect(mapStateToProps)(Wizard)