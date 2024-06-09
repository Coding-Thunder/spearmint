import React from "react"
import Typewriter from 'typewriter-effect';


interface Props {
    strings?: string | string[] | undefined
}

const Typewriting: React.FC<Props> = ({strings}) => {

    return (
        <>
            <div>
                <Typewriter
                    options={{
                        strings: strings,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </>
    )

}

export default Typewriting