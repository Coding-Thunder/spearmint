import React from 'react'
import Typewriting from '../Typewriting/Typewriting'

const SimpleHeader: React.FC<any> = () => {

    return (
        <>
            <div>
                <h1 className="w-fit text-3xl font-bold underline">
                    Welcome 
                </h1>
                <Typewriting  strings={["Vinay Maheshwari's Interview Task", "Click Anywhere To Move The Wizard"]} />
            </div>
        </>
    )
}

export default SimpleHeader