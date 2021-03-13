import React from 'react'

const DataTable = ({ headings, items, filterText, caption }) => {

    const capitalise = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <table className="table">
            <caption>{caption}</caption>
            <thead>
                <tr>
                    {headings.map(heading => {
                        return <th key={Math.random()}>{capitalise(heading)}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {items.filter(item => item.name.match(new RegExp(filterText, 'i'))).map(item => {
                    return <tr key={Math.random()}>{headings.map(heading => {
                        return <td key={Math.random()}>{item[heading]}</td>
                    })}</tr>
                })}
            </tbody>
        </table>
    )
}

export default DataTable
