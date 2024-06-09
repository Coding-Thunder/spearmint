import React from 'react'
import './App.css'
import SimpleHeader from '../SimpleHeader/SimpleHeader'
import Wizard from '../Wizard/Wizard'
import { setCoordinatesAction } from '../../redux/position/position-actions'
import { connect } from 'react-redux'

interface Props {
  setCoordinatesAction:Function | any
  oldX:number
}

const App: React.FC<Props> = ({setCoordinatesAction,oldX}) => {
  // interface StateProps {
  //   x: Number | any
  //   y: Number | any
  //   isLeft: Boolean
  // }
  // const [mouseCordinates, setMouseCoordinates] = React.useState<StateProps>({ x: 1000, y: 500, isLeft: false })
  const handleMouseMove = (e: Record<string, any>) => {
    let speed = Math.abs(oldX - e.clientX) >= 800 ? 4 : 2

    if (oldX > e.clientX) {
        setCoordinatesAction({ x: e.clientX, y: e.clientY, isLeft: true,speed })
    } else if (oldX < e.clientX) {
      setCoordinatesAction({ x: e.clientX, y: e.clientY, isLeft: false,speed })
    }

  }

  return (
    <>
      <div className="App" onMouseDown={handleMouseMove}>

        <SimpleHeader />
        <Wizard  />

      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  setCoordinatesAction: (payload: any) => dispatch(setCoordinatesAction(payload))
})



const mapStateToProps = (state:Record<string,any>) => ({
  oldX:state.position.x,
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
