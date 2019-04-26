import React from 'react'

// export default ({changeKeyword}) => (
//     <div className="jumbotron">
//         <div>
//             <input className="form-control" type="text"/>
            
//             <button className="btn btn-primary" onClick={changeKeyword}>
//                 Search
//             </button>
//         </div>
//     </div>
// )

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state({
            keyword: ''
        })
    }

    render() {
        const { changeKeyword } = this.props
        const { keyword } = this.state

        return (
            <div className="jumbotron">
                <div>
                    <input className="form-control" type="text" 
                        onChange={(e => {
                            this.setState({
                                keyword: e.target.value
                            })
                        })}
                    />
                    
                    <button className="btn btn-primary" onClick={changeKeyword(keyword)}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}