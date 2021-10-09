import React from 'react';

function UnitSelectPanel({handleChange}){
    return(
        <>
            <select
                onChange={handleChange}
                name='unit'
            >
                <option value=''></option>
                <option value='kg'>kg</option>
                <option value='dkg'>dkg</option>
                <option value='g'>g</option>
                <option value='l'>l</option>
                <option value='ml'>ml</option>
            </select>
        </>
    )
}

export default UnitSelectPanel