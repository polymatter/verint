import React from 'react'

const DataTable = ({ headings, items}) => {

    const capitalise = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    {headings.map(heading => {
                        return <th key={Math.random()}>{capitalise(heading)}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {items.map(item => {
                    return <tr key={Math.random()}>{headings.map(heading => {
                        return <td key={Math.random()}>{item[heading]}</td>
                    })}</tr>
                })}
            </tbody>
        </table>
    )
}

export default DataTable
