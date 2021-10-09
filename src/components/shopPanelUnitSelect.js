import React from 'react';

function UnitSelectPanel({handleChange}){
    return(
        <>
            <select
                onChange={handleChange}
                name='unit'
            >
                <option value='szt'>szt</option>
                <option value='kg'>kg</option>
                <option value='dkg'>dkg</option>
            </select>
        </>
    )
}

export default UnitSelectPanel