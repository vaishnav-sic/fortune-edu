import React, { useState } from 'react';
import NumberAni from './NumberAni';
function AboutTwo() {
    return (
        <>
            <div className='about2_main'>
                <NumberAni num="11784" name="Students Admitted" />
                <NumberAni num="25532" name="Students Counselled" />
                <NumberAni num="20" name="Years Of Experience" />
            </div>
        </>
    )
}
export default AboutTwo;
