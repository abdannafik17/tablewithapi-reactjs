import React, { Component } from 'react'

export default ({headers, data}) => (
    <table className="table">        
        <thead>
            <tr>
                {
                    headers.map(header => <th scope="col">{header}</th>)
                }
            </tr>
        </thead>
        <tbody>
                {
                    data.map(people => (
                        <tr>
                            <td>{people.name}</td>
                            <td>{people.gender}</td>
                            <td>{people.hair_color}</td>
                        </tr>
                    ))
                }
        </tbody>
    </table>
)