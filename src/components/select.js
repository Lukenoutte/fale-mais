import React from "react";

function Select(props) {
    const { myOptions, value, handleSelect } = props;

    return (
        <select        
        value={value}
        onChange={(e) => handleSelect(e)}
        >
            {myOptions.map((myOption) => {
                return (<option key={myOption} value={myOption}> {myOption} </option>)
            })}

        </select>
    );
}

export default Select;
